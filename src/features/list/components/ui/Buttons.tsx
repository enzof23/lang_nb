import { useListContext } from "../../../../context/ListContext";

import { Button } from "@mui/material";
import { LargeGreenButton } from "../../mui_styled/styles";

export const AddButton = () => {
  const { setIsAddingWords } = useListContext();
  return (
    <Button
      variant="text"
      onClick={() => {
        setIsAddingWords(true);
      }}
    >
      add words
    </Button>
  );
};

export const CancelButton = ({ listUpdated }: { listUpdated: boolean }) => {
  const { setIsAddingWords } = useListContext();

  return listUpdated ? null : (
    <Button
      variant="text"
      onClick={() => {
        setIsAddingWords(false);
      }}
    >
      cancel
    </Button>
  );
};

export const DoneButton = ({
  setListUpdated,
}: {
  setListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsAddingWords, updateListFirebase } = useListContext();

  return (
    <LargeGreenButton
      variant="contained"
      onClick={() => {
        setIsAddingWords(false);
        updateListFirebase();
        setListUpdated(false);
      }}
    >
      save your changes
    </LargeGreenButton>
  );
};
