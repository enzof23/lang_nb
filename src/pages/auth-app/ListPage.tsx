import { Box, Button, Collapse, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NewWordInput, WordGrid } from "../../components";
import { useListContext } from "../../context/ListContext";
import {
  LargeGreenButton,
  ListDisplayBox,
  ListDisplayContainer,
  ListPageHeader,
  PageContainer,
} from "../../mui_styles/styles";

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
      sx={{ padding: "0.75rem 3rem" }}
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
    <PageContainer sx={{ gap: "2rem" }}>
      <div>Practice</div>

      <ListDisplayContainer>
        <ListPageHeader>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">{title}</Typography>
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
          </Box>
          <Collapse in={isAddingWords} sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NewWordInput fct={() => setListUpdated(true)} />
            </Box>
          </Collapse>
          <Collapse in={listUpdated}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {doneButton}
            </Box>
          </Collapse>
        </ListPageHeader>

        {list.length === 0 ? (
          <Typography variant="h6" sx={{ alignSelf: "center" }}>
            Your list "{title}" is empty
          </Typography>
        ) : (
          <ListDisplayBox>
            {list.map((e) => {
              const { wordID, word, translation } = e;
              return (
                <WordGrid
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
      </ListDisplayContainer>
    </PageContainer>
  );
};
