import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import { useListContext } from "../../context/ListContext";

import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { PageWrapper } from "../../layouts";
import {
  WordInput,
  WordsGrid,
  AddButton,
  CancelButton,
  DoneButton,
} from "../../features/list/components";
import {
  ListDisplayBox,
  ListPageContainer,
  ListPageHeader,
  LoadingContainer,
  PracticeContainer,
} from "../../features/list/mui_styled/styles";
import { HalfCircleSpinner } from "react-epic-spinners";

export const ListPage = () => {
  const navigate = useNavigate();
  const {
    list,
    listFetched,
    isAddingWords,
    deleteList,
    getListByTitle,
    setListFetched,
  } = useListContext();

  const { userID, title } = useParams();
  const titleDisplay = title?.replace(/_/g, " ");

  const [listUpdated, setListUpdated] = useState<boolean>(false);

  useEffect(() => {
    setListFetched(false);

    if (userID && title) {
      getListByTitle(userID, title);
    } else {
      navigate("/");
    }
  }, [title]);

  if (!listFetched) {
    return <ListPageLoading />;
  }

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
    </PageWrapper>
  );
};

export const ListPageLoading = () => {
  const { title } = useParams();
  const titleDisplay = title?.replace(/_/g, " ");

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
              {titleDisplay}
            </Typography>
          </ListPageHeader>
        </Box>

        <LoadingContainer>
          <HalfCircleSpinner color="#fecd1f" />
        </LoadingContainer>
      </ListPageContainer>
    </PageWrapper>
  );
};
