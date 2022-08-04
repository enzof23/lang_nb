import { IconButton, Tooltip } from "@mui/material";
import { useListContext } from "../../../../context/ListContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import {
  WordBoxContainer,
  WordRowContainer,
  CreateListInput,
  ButtonsContainer,
  WordContainer,
  TranslationContainer,
  EditDoneButton,
} from "../../mui_styled/styles";

type Props = {
  word: string;
  wordID: string;
  translation: string;
  fct: () => void;
};

export const WordsGrid = ({ word, wordID, translation, fct }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [newWord, setNewWord] = useState<string>(word);
  const [newTranslation, setNewTranslation] = useState<string>(translation);

  const { list, setList } = useListContext();

  const handleEdit = () => {
    setIsEditing(true);
    setNewWord(word);
    setNewTranslation(translation);
  };

  const handleEditDone = (id: string) => {
    const newList = list.words.map((word) => {
      if (word.wordID === id) {
        return { wordID, word: newWord, translation: newTranslation };
      } else return word;
    });

    setList({ title: list.title, words: newList });
    setIsEditing(false);
    fct();
  };

  const deleteWord = (id: string) => {
    const newList = list.words.filter((word) => word.wordID !== id);
    setList({ title: list.title, words: newList });
    fct();
  };

  const WordGridRead = (
    <WordRowContainer id={wordID}>
      <WordBoxContainer>
        <WordContainer>{word}</WordContainer>
        <TranslationContainer>{translation}</TranslationContainer>
      </WordBoxContainer>
      <ButtonsContainer>
        <Tooltip title="EDIT" arrow>
          <IconButton
            color="success"
            sx={{ padding: "0", marginRight: "0.5rem" }}
            onClick={() => handleEdit()}
          >
            <AiOutlineEdit />
          </IconButton>
        </Tooltip>
        <Tooltip title="DELETE" arrow>
          <IconButton
            color="error"
            aria-label="delete word"
            sx={{ padding: "0" }}
            onClick={() => deleteWord(wordID)}
          >
            <AiOutlineDelete />
          </IconButton>
        </Tooltip>
      </ButtonsContainer>
    </WordRowContainer>
  );

  const WordGridEdit = (
    <WordRowContainer id={wordID}>
      <WordBoxContainer>
        <CreateListInput
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />

        <CreateListInput
          value={newTranslation}
          onChange={(e) => setNewTranslation(e.target.value)}
        />
      </WordBoxContainer>

      <EditDoneButton variant="text" onClick={() => handleEditDone(wordID)}>
        done
      </EditDoneButton>
    </WordRowContainer>
  );

  return isEditing ? WordGridEdit : WordGridRead;
};
