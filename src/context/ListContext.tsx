import { createContext, ReactNode, useContext, useState } from "react";
import { useAuthContext } from "../features/authentication/context/AuthContext";

import { database } from "../firebase/firebase-config";
import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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

  return list;
};

const addWordContextList = (
  list: Word[],
  { wordID, word, translation }: Word
) => [
  ...list,
  {
    wordID,
    word,
    translation,
  },
];

const useListHook = (initial: Title = "") => {
  const navigate = useNavigate();

  const [noLists, setNoLists] = useState<boolean>(false);

  const [title, setTitle] = useState<Title>(initial);

  const [list, setList] = useState<Word[]>([]);

  const [allListsArr, setAllListsArr] = useState<ArrList[]>([]);

  const [listFetched, setListFetched] = useState<boolean>(false);
  const [isAddingWords, setIsAddingWords] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { userInfo } = useAuthContext();
  const userID = userInfo.id;

  return {
    noLists,
    setNoLists,

    title,
    setTitle,

    list,
    setList,

    allListsArr,
    setAllListsArr,

    isAddingWords,
    setIsAddingWords,
    isEditing,
    setIsEditing,

    listFetched,
    setListFetched,

    // fetch ALL lists from firebase
    getAllLists: async () => {
      try {
        if (userID) {
          const newList = await getAllLists(userID);
          if (newList.length === 0) {
            setNoLists(true);
          } else {
            setAllListsArr(newList);
            setNoLists(false);
          }
        }
      } catch (err) {
        console.error(err);
      }
    },

    // get single list by title
    getListByTitle: async (id: string, listTitle: string) => {
      try {
        const listReturned = await getListByTitle(id, listTitle);
        setTitle(listTitle);
        setList(listReturned);
        setListFetched(true);
      } catch (err) {
        alert(`An error has occured: ${err}`);
      }
    },

    // add words & translation from new word input to the list array
    // this does not add the word to a firebase list
    addWordContextList: ({ wordID, word, translation }: Word) => {
      setList((list) =>
        addWordContextList(list, { wordID, word, translation })
      );
    },

    // saves the list to firebase
    saveListFirebase: () => {
      setDoc(doc(database, userID, title), { word: list }).then(() =>
        console.log("list created")
      );

      setTimeout(() => {
        navigate("/");
        setList([]);
        setTitle("");
      }, 1000);
    },

    // add, update, remove words from firebase list

    updateListFirebase: () => {
      console.log(list);
      updateDoc(doc(database, userID, title), {
        word: list,
      }).then(() => console.log("words added"));
    },

    removeWord: ({ wordID, word, translation }: Word) => {
      updateDoc(doc(database, userID, title), {
        word: arrayRemove({
          word,
          translation,
          wordID,
        }),
      }).then(() => console.log("word removed"));
    },

    deleteList: (title: string) => {
      deleteDoc(doc(database, userID, title)).then(() =>
        console.log("list deleted")
      );
      setList([]);
      navigate("/");
    },

    // reset all states when going back to home page or logging out
    // noLists and allListsArr aren't reset on home page load because states have to remain througout the session and online reset on log out
    resetListContext: () => {
      setList([]);
      setTitle(initial);
      setListFetched(false);
      setIsAddingWords(false);
      setIsEditing(false);
    },
  };
};

const ListContext = createContext<ReturnType<typeof useListHook> | null>(null);

export const useListContext = () => useContext(ListContext)!;

export const ListProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ListContext.Provider value={useListHook()}>
      {children}
    </ListContext.Provider>
  );
};
