import { Button, Typography } from "@mui/material";
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
  const { title, deleteList } = useListContext();
  return (
    <DeleteModalContainer>
      <DeleteModalBox>
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          Are you sure you want to delete your list "{title.toUpperCase()}" ?
        </Typography>
        <DeleteModalButton variant="outlined" onClick={() => deleteList(title)}>
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
