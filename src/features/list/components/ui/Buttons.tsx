import { useListContext } from "../../../../context/ListContext";

import { Button } from "@mui/material";
import { LargeGreenButton } from "../../mui_styled/styles";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../../../firebase/firebase-config";

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
  const { list, setIsAddingWords } = useListContext();
  const { userID, listID } = useParams();

  const updateListFirebase = () => {
    if (userID && listID) {
      updateDoc(doc(database, userID, listID), {
        title: list.title,
        words: list.words,
      }).then(() => console.log("List updated"));

      setListUpdated(false);
      setIsAddingWords(false);
    } else {
      alert(`An error has occured, please try again`);
    }
  };

  return (
    <LargeGreenButton
      variant="contained"
      onClick={() => {
        updateListFirebase();
      }}
    >
      save your changes
    </LargeGreenButton>
  );
};
