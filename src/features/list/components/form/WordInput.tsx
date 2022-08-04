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
  const [wordInputValue, setWordInputValue] = useState<string>("");
  const [translationInputValue, setTranslationInputValue] =
    useState<string>("");

  const { list, setList } = useListContext();

  const wordID = nanoid();

  const { fct } = props;

  const addWord = (e: any) => {
    e.preventDefault();
    if (wordInputValue && translationInputValue) {
      const newList = [
        ...list.words,
        { wordID, word: wordInputValue, translation: translationInputValue },
      ];

      setList({ title: list.title, words: newList });

      fct();
      setWordInputValue("");
      setTranslationInputValue("");
    } else {
      alert("Fill in all inputs");
    }
  };

  return (
    <form onSubmit={addWord}>
      <WordInputContainer container>
        <Grid item xs={12} sm={5}>
          <CreateListInput
            value={wordInputValue}
            placeholder="Enter new word"
            onChange={(e) => setWordInputValue(e.target.value)}
          />
          <WordInputDesc>word</WordInputDesc>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CreateListInput
            value={translationInputValue}
            placeholder="Enter translation"
            onChange={(e) => setTranslationInputValue(e.target.value)}
          />
          <WordInputDesc>translation</WordInputDesc>
        </Grid>
        <Grid item xs={12} sm={1}>
          <WordInputButton
            type="submit"
            variant="contained"
            onClick={addWord}
            disabled={!wordInputValue || !translationInputValue}
          >
            add
          </WordInputButton>
        </Grid>
      </WordInputContainer>
    </form>
  );
};
