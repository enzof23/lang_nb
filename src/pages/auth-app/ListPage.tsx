import { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import { useListContext } from "../../context/ListContext";

import { LoadingSpinner, PageWrapper } from "../../layouts";
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
  const { list, isAddingWords, deleteList, getListByTitle } = useListContext();

  const { userID, title } = useParams();
  const titleDisplay = title?.replace(/_/g, " ");

  const [listUpdated, setListUpdated] = useState<boolean>(false);

  useEffect(() => {
    if (userID && title) {
      getListByTitle(userID, title);
    } else {
      navigate("/");
    }
  }, [title]);

  return (
    <PageWrapper paddingLeft="10rem">
      <Suspense fallback={<LoadingSpinner />}>
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
                {titleDisplay}
              </Typography>
              <Box>
                {!isAddingWords ? (
                  <AddButton />
                ) : (
                  <CancelButton listUpdated={listUpdated} />
                )}
                <IconButton
                  color="error"
                  aria-label="delete word"
                  onClick={() => {
                    if (title) {
                      deleteList(title);
                    } else {
                      alert("Couldn't delete list, please try again");
                    }
                  }}
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
                <DoneButton setListUpdated={setListUpdated} />
              </Box>
            </Collapse>
          </Box>

          {list.length === 0 ? (
            <Typography variant="h6" sx={{ alignSelf: "center" }}>
              Your list "{titleDisplay}" is empty
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
      </Suspense>
    </PageWrapper>
  );
};

export const AddButton = () => {
  const { setIsAddingWords } = useListContext();
  return (
    <Button
      variant="text"
      onClick={() => {
        setIsAddingWords(true);
      }}
    >
      add words
    </Button>
  );
};

export const CancelButton = ({ listUpdated }: { listUpdated: boolean }) => {
  const { setIsAddingWords } = useListContext();

  return listUpdated ? null : (
    <Button
      variant="text"
      onClick={() => {
        setIsAddingWords(false);
      }}
    >
      cancel
    </Button>
  );
};

export const DoneButton = ({
  setListUpdated,
}: {
  setListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsAddingWords, updateListFirebase } = useListContext();

  return (
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
};
