import React, { useState } from "react";
import { FormControl, InputAdornment } from "@mui/material";

import { useListContext } from "../../context/ListContext";

import {
  NewTitleButton,
  CreateListInput,
  NewTitleLabel,
} from "../../mui_styles/styles";

type Props = {
  setHasTitle: (val: boolean) => void;
};

export const NewTitleInput: React.FC<Props> = ({ setHasTitle }) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const { setTitle } = useListContext();

  return (
    <FormControl variant="standard" sx={{ width: "80%", maxWidth: "1000px" }}>
      <NewTitleLabel>Enter a Title</NewTitleLabel>
      <CreateListInput
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <NewTitleButton
              disabled={newTitle.length < 1}
              variant="text"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setTitle(newTitle);
                setHasTitle(true);
              }}
            >
              Create
            </NewTitleButton>
          </InputAdornment>
        }
        sx={{ color: "white" }}
      />
    </FormControl>
  );
};
