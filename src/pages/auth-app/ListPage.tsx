import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NewItem } from "../../components";
import { WordGrid } from "../../components/list-display";
import { useListContext } from "../../context/ListContext";
import {
  LargeGreenButton,
  ListDisplayContainer,
  ListPageContainer,
} from "../../mui_styles/styles";

export const ListPage = () => {
  const navigate = useNavigate();
  const {
    title,
    list,
    isAddingWords,
    setIsAddingWords,
    updateList,
    deleteList,
  } = useListContext();

  const listDisplay = list.map((e) => {
    const { wordID, word, translation } = e;
    return (
      <WordGrid
        key={wordID}
        word={word}
        translation={translation}
        wordID={wordID}
      />
    );
  });

  const addButton = (
    <LargeGreenButton
      variant="contained"
      onClick={() => setIsAddingWords((st) => !st)}
    >
      add words
    </LargeGreenButton>
  );

  const doneButton = (
    <LargeGreenButton
      variant="contained"
      onClick={() => {
        setIsAddingWords((st) => !st);
        updateList();
      }}
    >
      done
    </LargeGreenButton>
  );

  useEffect(() => {
    if (list.length === 0) {
      navigate("/");
    }
  }, [list]);

  return (
    <ListPageContainer>
      <div>Practice</div>
      <ListDisplayContainer sx={{ rowGap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton
            color="error"
            aria-label="delete word"
            onClick={() => deleteList(title)}
          >
            <AiOutlineDelete />
          </IconButton>
        </Box>
        {listDisplay}
        {!isAddingWords ? addButton : doneButton}
      </ListDisplayContainer>
      {isAddingWords ? <NewItem /> : ""}
    </ListPageContainer>
  );
};
