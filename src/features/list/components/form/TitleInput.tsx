import React, { useState } from "react";
import { FormControl, InputAdornment } from "@mui/material";

import { useListContext } from "../../../../context/ListContext";

import {
  TitleInputLabel,
  TitleButton,
  CreateListInput,
} from "../../mui_styled/styles";

type Props = {
  setHasTitle: (val: boolean) => void;
};

export const TitleInput: React.FC<Props> = ({ setHasTitle }) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const { setList } = useListContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setList({ title: newTitle, words: [] });
    setHasTitle(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        variant="standard"
        sx={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <TitleInputLabel>Enter a Title</TitleInputLabel>
        <CreateListInput
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <TitleButton
                disabled={newTitle.length < 1}
                variant="text"
                type="submit"
                onClick={handleSubmit}
              >
                Create
              </TitleButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};
