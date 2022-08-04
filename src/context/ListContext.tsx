import { createContext, ReactNode, useContext, useState } from "react";
import { ArrList, List, ListContextType } from "../types/list_types";

const ListContext = createContext({} as ListContextType);

export const ListProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <ListContext.Provider
      value={{
        initialList,

        list,
        setList,

        noLists,
        setNoLists,

        allListsArr,
        setAllListsArr,

        listUpdated,
        setListUpdated,

        listIsFetched,
        setListIsFetched,

        isAddingWords,
        setIsAddingWords,

        isEditingTitle,
        setIsEditingTitle,

        resetListContext,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
