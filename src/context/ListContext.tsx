import { createContext, ReactNode, useContext, useState } from "react";

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

const useListHook = () => {
  const initialList = { title: "", words: [] };

  const [noLists, setNoLists] = useState<boolean>(false);
  const [allListsArr, setAllListsArr] = useState<ArrList[]>([]);

  const [listIsFetched, setListIsFetched] = useState<boolean>(false);

  const [list, setList] = useState<List>(initialList);
  const [listUpdated, setListUpdated] = useState<boolean>(false);

  const [isAddingWords, setIsAddingWords] = useState<boolean>(false);
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

  const resetListContext = () => {
    setList(initialList);
    setListIsFetched(false);
    setIsAddingWords(false);
    setIsEditingTitle(false);
    setListUpdated(false);
  };

  return {
    noLists,
    setNoLists,

    initialList,

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

    resetListContext,
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
