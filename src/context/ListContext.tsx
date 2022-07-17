import { createContext, ReactNode, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

import { database } from "../firebase/firebase-config";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

type Title = string;

export type Word = {
  wordID: string;
  word: string;
  translation: string;
};

type ArrList = {
  listTitle: Title;
  words: Word[];
};

const getAllLists = async (id: string) => {
  let arrLists: ArrList[] = [];

  const userDocs = await getDocs(collection(database, id));
  userDocs.forEach((doc) => {
    arrLists.push({ listTitle: doc.id, words: doc.data().word });
  });
  return arrLists;
};

const getListByTitle = async (userID: string, title: string) => {
  let list;

  const userList = await getDoc(doc(database, userID, title));
  if (userList.exists()) {
    return (list = userList.data().word);
  } else {
    alert(`an error has occured`);
  }
};

const newListAddWord = (list: Word[], { wordID, word, translation }: Word) => [
  ...list,
  {
    wordID,
    word,
    translation,
  },
];

const useCreateList = (initial: Title = "") => {
  const navigate = useNavigate();

  const [noLists, setNoLists] = useState<boolean>(false);

  const [title, setTitle] = useState<Title>(initial);
  const [newTitle, setNewTitle] = useState<Title>(initial);

  const [list, setList] = useState<Word[]>([]);
  const [word, setWord] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const wordID = nanoid();

  const [allListsArr, setAllListsArr] = useState<ArrList[]>([]);

  const [isAddingWords, setIsAddingWords] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { userInfo } = useAuthContext();
  const id = userInfo.id;

  return {
    noLists,

    title,
    newTitle,
    setTitle,
    setNewTitle,

    list,
    word,
    translation,
    wordID,
    setList,
    setWord,
    setTranslation,

    allListsArr,
    setAllListsArr,

    isAddingWords,
    setIsAddingWords,
    isEditing,
    setIsEditing,

    // fetch ALL lists from firebase
    getAllLists: async () => {
      const newList = await getAllLists(id);
      if (newList.length === 0) {
        setNoLists(true);
      } else {
        setAllListsArr(newList);
        setNoLists(false);
      }
    },

    // get single list by title
    getListByTitle: async (listTitle: string) => {
      const listReturned = await getListByTitle(id, listTitle);
      setTitle(listTitle);
      setList(listReturned);
      navigate("/list");
    },

    // add words & translation from new word input to the list array
    // this does not add the word to a firebase list
    newListAddWord: () => {
      setList((list) => newListAddWord(list, { wordID, word, translation }));
      setWord("");
      setTranslation("");
    },

    // creates a new list on firebase
    createList: () => {
      setDoc(doc(database, id, title), { word: list }).then(() =>
        console.log("list created")
      );

      setTimeout(() => {
        navigate("/");
        setList([]);
        setTitle("");
      }, 1000);
    },

    // add, update, remove words from firebase list

    updateList: () => {
      console.log(list);
      updateDoc(doc(database, id, title), {
        word: list,
      }).then(() => console.log("words added"));
    },

    deleteList: (title: string) => {
      deleteDoc(doc(database, id, title)).then(() =>
        console.log("list deleted")
      );
      setList([]);
    },

    removeWord: ({ wordID, word, translation }: Word) => {
      updateDoc(doc(database, id, title), {
        word: arrayRemove({
          word,
          translation,
          wordID,
        }),
      }).then(() => console.log("word removed"));
    },

    // delete list from firebase
  };
};

const ListContext = createContext<ReturnType<typeof useCreateList> | null>(
  null
);

export const useListContext = () => useContext(ListContext)!;

export const ListProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ListContext.Provider value={useCreateList()}>
      {children}
    </ListContext.Provider>
  );
};
