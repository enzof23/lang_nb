import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useListContext } from "../../../../context/ListContext";
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
  const { list, deleteList } = useListContext();
  const { listID } = useParams();

  return (
    <DeleteModalContainer>
      <DeleteModalBox>
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          Are you sure you want to delete your list "{list.title.toUpperCase()}"
          ?
        </Typography>
        <DeleteModalButton
          variant="outlined"
          onClick={() => {
            if (listID) {
              deleteList(listID);
            }
          }}
        >
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
