import { createContext, ReactNode, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

import { database } from "../firebase/firebase-config";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

type Title = string;

export type NewWord = {
  wordID: string;
  word: string;
  translation: string;
};

type ArrList = {
  listTitle: Title;
  words: NewWord[];
};

const addWord = (
  id: string,
  title: Title,
  { wordID, word, translation }: NewWord
) => {
  updateDoc(doc(database, id, title), {
    word: arrayUnion({ wordID, word, translation }),
  }).then(() => console.log("word added"));
};

const getLists = async (id: string) => {
  let arrLists: ArrList[] = [];

  const userDocs = await getDocs(collection(database, id));
  userDocs.forEach((doc) => {
    arrLists.push({ listTitle: doc.id, words: doc.data().word });
  });
  return arrLists;
};

const useCreateList = (initial: Title = "") => {
  const [title, setTitle] = useState<Title>(initial);
  const [newTitle, setNewTitle] = useState<Title>(initial);
  const [listsArr, setListsArr] = useState<ArrList[]>([]);

  const { userInfo } = useAuthContext();
  const id = userInfo.id;

  return {
    title,
    newTitle,
    setTitle,
    setNewTitle,
    listsArr,
    setListsArr,

    createNewList() {
      setTitle(newTitle);
      setDoc(doc(database, id, newTitle), { word: [] }).then(() =>
        console.log("list created")
      );
      setNewTitle("");
    },

    addWord: ({ wordID, word, translation }: NewWord) => {
      const newWord = { wordID, word, translation };
      addWord(id, title, newWord);
    },

    removeWord: () => {
      updateDoc(doc(database, id, title), {
        word: arrayRemove({
          word: "test",
          translation: "proba",
          wordID: "Buc8ieCk_BvtGGBQnQ468",
        }),
      }).then(() => console.log("word removed"));
    },

    getLists: async () => {
      const newList = await getLists(id);
      setListsArr(newList);
    },
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
