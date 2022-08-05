import { SetStateAction } from "react";

export type UseStateBooleanType = React.Dispatch<SetStateAction<boolean>>;

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
  setNoLists: UseStateBooleanType;

  allListsArr: ArrList[];
  setAllListsArr: React.Dispatch<SetStateAction<ArrList[]>>;

  listUpdated: boolean;
  setListUpdated: UseStateBooleanType;

  listIsFetched: boolean;
  setListIsFetched: UseStateBooleanType;

  isAddingWords: boolean;
  setIsAddingWords: UseStateBooleanType;

  isEditingTitle: boolean;
  setIsEditingTitle: UseStateBooleanType;

  resetListContext: () => void;
};
