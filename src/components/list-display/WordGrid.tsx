import { Button, FormControl, Grid, IconButton } from "@mui/material";
import {
  CreateListInput,
  VerticalDivider,
  WordGridContainer,
} from "../../mui_styles/styles";
import { useListContext } from "../../context/ListContext";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

function WordGrid({ ...props }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { word, wordID, translation, fct } = props;

  const [newWord, setNewWord] = useState<string>(word);
  const [newTranslation, setNewTranslation] = useState<string>(translation);

  const { list, setList } = useListContext();

  const handleEdit = () => {
    setIsEditing(true);
    setNewWord(word);
    setNewTranslation(translation);
  };

  const handleEditDone = (id: string) => {
    const newList = list.map((word) => {
      if (word.wordID === id) {
        return { wordID, word: newWord, translation: newTranslation };
      } else return word;
    });

    setList(newList);
    setIsEditing(false);
    fct();
  };

  const deleteWord = (id: string) => {
    const newList = list.filter((word) => word.wordID !== id);
    setList(newList);
    fct();
  };

  const WordGridRead = (
    <WordGridContainer container columnGap={3} id={wordID}>
      <Grid item xs onClick={() => setIsEditing(true)}>
        {word}
      </Grid>
      <Grid item>
        <VerticalDivider orientation="vertical" />
      </Grid>
      <Grid item xs onClick={() => setIsEditing(true)}>
        {translation}
      </Grid>
      <Grid item>
        <Button variant="text" onClick={() => handleEdit()}>
          edit
        </Button>
        <IconButton
          color="error"
          aria-label="delete word"
          onClick={() => deleteWord(wordID)}
        >
          <AiOutlineDelete />
        </IconButton>
      </Grid>
    </WordGridContainer>
  );

  const WordGridEdit = (
    <WordGridContainer container columnGap={3} id={wordID}>
      <Grid item xs>
        <FormControl sx={{ color: "white", width: "100%" }}>
          <CreateListInput
            value={newWord}
            sx={{ color: "white" }}
            onChange={(e) => setNewWord(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item>
        <VerticalDivider orientation="vertical" />
      </Grid>
      <Grid item xs>
        <FormControl sx={{ color: "white", width: "100%" }}>
          <CreateListInput
            value={newTranslation}
            sx={{ color: "white" }}
            onChange={(e) => setNewTranslation(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid
        item
        sx={{ width: "104px", display: "flex", justifyContent: "center" }}
      >
        <Button variant="text" onClick={() => handleEditDone(wordID)}>
          done
        </Button>
      </Grid>
    </WordGridContainer>
  );

  return isEditing ? WordGridEdit : WordGridRead;
}

export default WordGrid;
