import { FormControl, InputAdornment } from "@mui/material";

import { useListContext } from "../../context/ListContext";

import {
  NewTitleButton,
  CreateListInput,
  NewTitleLabel,
} from "../../mui_styles/styles";

export const NewTitleInput = () => {
  const { newTitle, setNewTitle, createNewList } = useListContext();

  return (
    <FormControl variant="standard" sx={{ width: "80%" }}>
      <NewTitleLabel>Enter a Title</NewTitleLabel>
      <CreateListInput
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <NewTitleButton variant="text" onClick={() => createNewList()}>
              Create
            </NewTitleButton>
          </InputAdornment>
        }
        sx={{ color: "white" }}
      />
    </FormControl>
  );
};
