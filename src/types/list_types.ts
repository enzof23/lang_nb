import { SetStateAction } from "react";

export interface Word {
  wordID: string;
  word: string;
  translation: string;
}

export interface List {
  title: string;
  words: Word[];
}

export interface ArrList {
  listID: string;
  title: string;
  words: Word[];
}

export type ListContextType = {
  initialList: List;

  list: List;
  setList: React.Dispatch<SetStateAction<List>>;

  noLists: boolean;
  setNoLists: React.Dispatch<SetStateAction<boolean>>;

  allListsArr: ArrList[];
  setAllListsArr: React.Dispatch<SetStateAction<ArrList[]>>;

  listUpdated: boolean;
  setListUpdated: React.Dispatch<SetStateAction<boolean>>;

  listIsFetched: boolean;
  setListIsFetched: React.Dispatch<SetStateAction<boolean>>;

  isAddingWords: boolean;
  setIsAddingWords: React.Dispatch<SetStateAction<boolean>>;

  isEditingTitle: boolean;
  setIsEditingTitle: React.Dispatch<SetStateAction<boolean>>;

  resetListContext: () => void;
};
