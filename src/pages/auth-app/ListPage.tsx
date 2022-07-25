import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import { useListContext } from "../../context/ListContext";

import { PageWrapper } from "../../layouts";
import { WordInput, WordsGrid } from "../../features/list/components";

import { Box, Button, Collapse, IconButton, Typography } from "@mui/material";
import {
  LargeGreenButton,
  ListDisplayBox,
  ListPageContainer,
  ListPageHeader,
  PracticeContainer,
} from "../../features/list/mui_styled/styles";

export const ListPage = () => {
  const navigate = useNavigate();
  const {
    title,
    list,
    isAddingWords,
    setIsAddingWords,
    updateListFirebase,
    deleteList,
  } = useListContext();

  const [listUpdated, setListUpdated] = useState<boolean>(false);

  const addButton = (
    <Button
      variant="text"
      onClick={() => {
        setIsAddingWords(true);
      }}
    >
      add words
    </Button>
  );

  const cancelButton = listUpdated ? null : (
    <Button
      variant="text"
      onClick={() => {
        setIsAddingWords(false);
      }}
    >
      cancel
    </Button>
  );

  const doneButton = (
    <LargeGreenButton
      variant="contained"
      onClick={() => {
        setIsAddingWords(false);
        updateListFirebase();
        setListUpdated(false);
      }}
    >
      save your changes
    </LargeGreenButton>
  );

  useEffect(() => {
    if (!title) {
      navigate("/");
    }
  }, [title]);

  return (
    <PageWrapper paddingLeft="10rem">
      <PracticeContainer>Practice coming soon</PracticeContainer>

      <ListPageContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListPageHeader>
            <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
              {title}
            </Typography>
            <Box>
              {!isAddingWords ? addButton : cancelButton}
              <IconButton
                color="error"
                aria-label="delete word"
                onClick={() => deleteList(title)}
              >
                <AiOutlineDelete />
              </IconButton>
            </Box>
          </ListPageHeader>

          <Collapse in={isAddingWords}>
            <WordInput fct={() => setListUpdated(true)} />
          </Collapse>

          <Collapse in={listUpdated}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {doneButton}
            </Box>
          </Collapse>
        </Box>

        {list.length === 0 ? (
          <Typography variant="h6" sx={{ alignSelf: "center" }}>
            Your list "{title}" is empty
          </Typography>
        ) : (
          <ListDisplayBox>
            {list.map((e) => {
              const { wordID, word, translation } = e;
              return (
                <WordsGrid
                  key={wordID}
                  word={word}
                  translation={translation}
                  wordID={wordID}
                  fct={() => setListUpdated(true)}
                />
              );
            })}
          </ListDisplayBox>
        )}
      </ListPageContainer>
    </PageWrapper>
  );
};
