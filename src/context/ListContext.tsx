import { createContext, ReactNode, useContext, useState } from "react";
import { useAuthContext } from "../features/authentication/context/AuthContext";

import { database } from "../firebase/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export type Word = {
  wordID: string;
  word: string;
  translation: string;
};

export type List = {
  title: string;
  words: Word[];
};

export type ArrList = {
  listID: string;
  listTitle: string;
  words: Word[];
};

export const initialList = { title: "", words: [] };

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
  const [allListsArr, setAllListsArr] = useState<ArrList[]>([]);

  const [listIsFetched, setListIsFetched] = useState<boolean>(false);

  const [list, setList] = useState<List>(initialList);
  const [listUpdated, setListUpdated] = useState<boolean>(false);

  const [isAddingWords, setIsAddingWords] = useState<boolean>(false);
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

  const { userInfo } = useAuthContext();
  const userID = userInfo.id;

  return {
    noLists,
    setNoLists,

    list,
    setList,

    listUpdated,
    setListUpdated,

    allListsArr,
    setAllListsArr,

    isAddingWords,
    setIsAddingWords,

    isEditingTitle,
    setIsEditingTitle,

    listIsFetched,
    setListIsFetched,

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

    updateListFirebase: (listID: string, newTitle?: string) => {
      updateDoc(doc(database, userID, listID), {
        title: newTitle ? newTitle : list.title,
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
      setListIsFetched(false);
      setIsAddingWords(false);
      setIsEditingTitle(false);
      setListUpdated(false);
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

// const getListByTitle = async (user: string, list: string) => {
//   try {
//     const listReturned = await getDoc(doc(database, user, list));
//     if (listReturned.exists()) {
//       setList({
//         title: listReturned.data().title,
//         words: listReturned.data().words,
//       });
//       setListIsFetched(true);
//     }
//   } catch (err) {
//     alert(`An error has occured: ${err}`);
//   }
// };
