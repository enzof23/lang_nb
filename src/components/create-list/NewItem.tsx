import { useState } from "react";
import { nanoid } from "nanoid";

import { useListContext } from "../../context/ListContext";

import { Button, Grid, Typography } from "@mui/material";
import {
  NewItemContainer,
  NewItemDesc,
  CreateListInput,
} from "../../mui_styles/styles";

type Word = string;
type Translation = string;

export const NewItem = () => {
  const { addWord } = useListContext();
  const [word, setWord] = useState<Word>("");
  const [translation, setTranslation] = useState<Translation>("");
  const wordID = nanoid();

  return (
    <NewItemContainer container>
      <Grid item xs={12} sm={5}>
        <CreateListInput
          placeholder="Enter new word"
          onChange={(e) => setWord(e.target.value)}
          sx={{ color: "white", width: "100%" }}
        />
        <NewItemDesc>word</NewItemDesc>
      </Grid>
      <Grid item xs={12} sm={5}>
        <CreateListInput
          placeholder="Enter translation"
          onChange={(e) => setTranslation(e.target.value)}
          sx={{ color: "white", width: "100%" }}
        />
        <NewItemDesc>translation</NewItemDesc>
      </Grid>
      <Grid item xs={9} sm={1}>
        <Button
          type="submit"
          variant="contained"
          onClick={() => addWord({ wordID, word, translation })}
          sx={{
            backgroundColor: "#3bcfd0",
            width: "100%",
            paddingBlock: "0.75rem",
            "&:hover": {
              backgroundColor: "#33afaf",
            },
          }}
        >
          Save
        </Button>
      </Grid>
    </NewItemContainer>
  );
};
