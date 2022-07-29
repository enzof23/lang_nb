import { Button, Grid, IconButton, Tooltip } from "@mui/material";
import { useListContext } from "../../../../context/ListContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import {
  CreateListInput,
  VerticalDivider,
  WordGridContainer,
} from "../../mui_styled/styles";

type Props = {
  word: string;
  wordID: string;
  translation: string;
  fct: () => void;
};

export const WordsGrid = ({ word, wordID, translation, fct }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const { word, wordID, translation, fct } = props;

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
      <Grid
        item
        xs
        onClick={() => setIsEditing(true)}
        sx={{ textTransform: "uppercase" }}
      >
        {word}
      </Grid>
      <Grid item>
        <VerticalDivider orientation="vertical" />
      </Grid>
      <Grid
        item
        xs
        onClick={() => setIsEditing(true)}
        sx={{ textTransform: "uppercase" }}
      >
        {translation}
      </Grid>
      <Grid item>
        <Tooltip title="edit" arrow>
          <IconButton
            color="success"
            sx={{ padding: "0", marginRight: "0.5rem" }}
            onClick={() => handleEdit()}
          >
            <AiOutlineEdit />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete" arrow>
          <IconButton
            color="error"
            aria-label="delete word"
            sx={{ padding: "0" }}
            onClick={() => deleteWord(wordID)}
          >
            <AiOutlineDelete />
          </IconButton>
        </Tooltip>
      </Grid>
    </WordGridContainer>
  );

  const WordGridEdit = (
    <WordGridContainer container columnGap={3} id={wordID}>
      <Grid item xs>
        <CreateListInput
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
      </Grid>
      <Grid item>
        <VerticalDivider orientation="vertical" />
      </Grid>
      <Grid item xs>
        <CreateListInput
          value={newTranslation}
          onChange={(e) => setNewTranslation(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="text"
          sx={{ padding: "0" }}
          onClick={() => handleEditDone(wordID)}
        >
          done
        </Button>
      </Grid>
    </WordGridContainer>
  );

  return isEditing ? WordGridEdit : WordGridRead;
};
