import React, { useState } from "react";
import { FormControl, InputAdornment } from "@mui/material";

import { useListContext } from "../../../../context/ListContext";

import {
  NewTitleButton,
  CreateListInput,
  NewTitleLabel,
} from "../../../../mui_styles/styles";

type Props = {
  setHasTitle: (val: boolean) => void;
};

export const NewTitleInput: React.FC<Props> = ({ setHasTitle }) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const { setTitle } = useListContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTitle(newTitle);
    setHasTitle(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        variant="standard"
        sx={{ width: "100%", maxWidth: "900px" }}
        onSubmit={handleSubmit}
      >
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
                onClick={handleSubmit}
              >
                Create
              </NewTitleButton>
            </InputAdornment>
          }
          sx={{ color: "white" }}
        />
      </FormControl>
    </form>
  );
};
