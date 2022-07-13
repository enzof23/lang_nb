import { createContext, ReactNode, useContext, useState } from "react";

type Title = string;

const createNewList = (title: Title) => {
  return title;
};

const useCreateList = (initial: Title = "") => {
  const [title, setTitle] = useState<Title>(initial);
  const [newTitle, setNewTitle] = useState<Title>(initial);

  return {
    title,
    newTitle,
    setTitle,
    setNewTitle,
    createNewList() {
      setTitle(newTitle);
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
