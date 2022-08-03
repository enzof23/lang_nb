import { useListContext } from "../../../../context/ListContext";

import { Button } from "@mui/material";
import { LargeGreenButton } from "../../mui_styled/styles";
import { useParams } from "react-router-dom";

export const CancelButton = ({ listUpdated }: { listUpdated: boolean }) => {
  const { setIsAddingWords } = useListContext();

  return listUpdated ? null : (
    <Button
      variant="text"
      sx={{ padding: "0", height: "32px", color: "var(--main-yellow)" }}
      onClick={() => {
        setIsAddingWords(false);
      }}
    >
      cancel
    </Button>
  );
};

export const SaveChangesButton = ({
  setListUpdated,
}: {
  setListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsAddingWords, updateListFirebase } = useListContext();
  const { listID } = useParams();

  return (
    <LargeGreenButton
      variant="contained"
      onClick={() => {
        setIsAddingWords(false);
        if (listID) {
          updateListFirebase(listID);
        }
        setListUpdated(false);
      }}
    >
      save your changes
    </LargeGreenButton>
  );
};
