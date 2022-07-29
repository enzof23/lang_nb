import { createContext, ReactNode, useContext, useState } from "react";
import { useAuthContext } from "../features/authentication/context/AuthContext";

import { database } from "../firebase/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

type Word = {
  wordID: string;
  word: string;
  translation: string;
};

type List = {
  title: string;
  words: Word[];
};

type ArrList = {
  listID: string;
  listTitle: string;
  words: Word[];
};

export const initialList = { title: "", words: [] };

const getAllLists = async (id: string) => {
  let arrLists: ArrList[] = [];

  const userDocs = await getDocs(collection(database, id));
  userDocs.forEach((doc) => {
    arrLists.push({
      listID: doc.id,
      listTitle: doc.data().title,
      words: doc.data().words,
    });
  });

  return arrLists;
};

const getListByTitle = async (userID: string, listID: string) => {
  let list = initialList;

  const userList = await getDoc(doc(database, userID, listID));
  if (userList.exists()) {
    return (list = {
      title: userList.data().title,
      words: userList.data().words,
    });
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

const useListHook = () => {
  const navigate = useNavigate();

  const [noLists, setNoLists] = useState<boolean>(false);

  const [list, setList] = useState<List>(initialList);

  const [allListsArr, setAllListsArr] = useState<ArrList[]>([]);

  const [listFetched, setListFetched] = useState<boolean>(false);
  const [isAddingWords, setIsAddingWords] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { userInfo } = useAuthContext();
  const userID = userInfo.id;

  return {
    noLists,
    setNoLists,

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
      if (userID) {
        const newList = await getAllLists(userID);
        if (newList.length === 0) {
          setNoLists(true);
        } else {
          setAllListsArr(newList);
          setNoLists(false);
        }
      }
    },

    // get single list by title
    getListByTitle: async (id: string, listTitle: string) => {
      try {
        const listReturned = await getListByTitle(id, listTitle);
        setList(listReturned);
        setListFetched(true);
      } catch (err) {
        alert(`An error has occured: ${err}`);
      }
    },

    // add words & translation from new word input to the list array
    // this does not add the word to a firebase list
    addWordContextList: async ({ wordID, word, translation }: Word) => {
      const newList = addWordContextList(list.words, {
        wordID,
        word,
        translation,
      });

      setList((list) => ({ title: list.title, words: newList }));
    },

    // saves the list to firebase
    saveListFirebase: async () => {
      const newDoc = doc(collection(database, userID));
      await setDoc(newDoc, { title: list.title, words: list.words });
      console.log("list created");
      setTimeout(() => {
        navigate("/");
        setList(initialList);
      }, 1000);
    },

    // add, update, remove words from firebase list

    updateListFirebase: (listID: string) => {
      console.log(list);
      updateDoc(doc(database, userID, listID), {
        title: list.title,
        words: list.words,
      }).then(() => console.log("words added"));
    },

    // delete list in firebase

    deleteList: (listID: string) => {
      deleteDoc(doc(database, userID, listID)).then(() =>
        console.log("list deleted")
      );
      setList(initialList);
      navigate("/");
    },

    // reset all states when going back to home page or logging out
    // noLists and allListsArr aren't reset on home page load because states have to remain througout the session and online reset on log out
    resetListContext: () => {
      setList(initialList);
      setList(initialList);
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
