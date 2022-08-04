import { Typography } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useListContext } from "../../../../context/ListContext";
import { database } from "../../../../firebase/firebase-config";
import {
  DeleteModalBox,
  DeleteModalButton,
  DeleteModalContainer,
} from "../../mui_styled/styles";

export const DeleteModal = ({
  setDeleteModal,
}: {
  setDeleteModal: (val: boolean) => void;
}) => {
  const { list, setList, initialList } = useListContext();
  const { userID, listID } = useParams();
  const navigate = useNavigate();

  const deleteList = () => {
    if (userID && listID) {
      deleteDoc(doc(database, userID, listID)).then(() => {
        console.log("list deleted");
        setList(initialList);
        navigate("/");
      });
    } else {
      alert(`An error has occured, please try again`);
    }
  };

  return (
    <DeleteModalContainer>
      <DeleteModalBox>
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          Are you sure you want to delete your list "{list.title.toUpperCase()}"
          ?
        </Typography>
        <DeleteModalButton variant="outlined" onClick={deleteList}>
          yes, delete
        </DeleteModalButton>
        <DeleteModalButton
          variant="outlined"
          onClick={() => setDeleteModal(false)}
        >
          cancel
        </DeleteModalButton>
      </DeleteModalBox>
    </DeleteModalContainer>
  );
};
