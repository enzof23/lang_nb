import { useListContext } from "../../../../context/ListContext";

import { Grid } from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import {
  CreateListInput,
  WordInputButton,
  WordInputContainer,
  WordInputDesc,
} from "../../mui_styled/styles";

export const WordInput = ({ ...props }) => {
  const [word, setWord] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const wordID = nanoid();

  const { fct } = props;

  const { addWordContextList } = useListContext();

  const addWord = (e: any) => {
    e.preventDefault();
    if (word && translation) {
      addWordContextList({ wordID, word, translation });
      fct(true);
      setWord("");
      setTranslation("");
    } else {
      alert("Fill in all inputs");
    }
  };

  return (
    <form onSubmit={addWord}>
      <WordInputContainer container>
        <Grid item xs={12} sm={5}>
          <CreateListInput
            value={word}
            placeholder="Enter new word"
            onChange={(e) => setWord(e.target.value)}
          />
          <WordInputDesc>word</WordInputDesc>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CreateListInput
            value={translation}
            placeholder="Enter translation"
            onChange={(e) => setTranslation(e.target.value)}
          />
          <WordInputDesc>translation</WordInputDesc>
        </Grid>
        <Grid item xs={12} sm={1}>
          <WordInputButton type="submit" variant="contained" onClick={addWord}>
            add
          </WordInputButton>
        </Grid>
      </WordInputContainer>
    </form>
  );
};
