import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useListContext } from "../../context/ListContext";

import { PageWrapper } from "../../layouts";
import { Box, Collapse, Typography } from "@mui/material";
import {
  WordInput,
  WordsGrid,
  CancelButton,
  SaveChangesButton,
  DeleteModal,
  ListMenu,
  TitleEditInput,
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
    isEditingTitle,
    getListByTitle,
    setListFetched,
  } = useListContext();

  const { userID, listID } = useParams();

  const [listUpdated, setListUpdated] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    setListFetched(false);

    if (userID && listID) {
      getListByTitle(userID, listID);
    } else {
      navigate("/");
    }
  }, [listID]);

  if (!listFetched) {
    return <ListPageLoading />;
  }

  return (
    <>
      {deleteModal ? <DeleteModal setDeleteModal={setDeleteModal} /> : null}
      <PageWrapper paddingLeft="10rem">
        <PracticeContainer>Practice coming soon</PracticeContainer>

        <ListPageContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {isEditingTitle ? (
              <TitleEditInput />
            ) : (
              <ListPageHeader>
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                  {list.title}
                </Typography>

                {!isAddingWords ? (
                  <ListMenu setDeleteModal={setDeleteModal} />
                ) : (
                  <CancelButton listUpdated={listUpdated} />
                )}
              </ListPageHeader>
            )}

            <Collapse in={isAddingWords}>
              <WordInput fct={() => setListUpdated(true)} />
            </Collapse>

            <Collapse in={listUpdated}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <SaveChangesButton setListUpdated={setListUpdated} />
              </Box>
            </Collapse>
          </Box>
          {list.words.length === 0 ? (
            <Typography variant="h6" sx={{ alignSelf: "center" }}>
              Your list "{list.title.toUpperCase()}" is empty
            </Typography>
          ) : (
            <ListDisplayBox>
              {list.words.map((e) => {
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
    </>
  );
};

export const ListPageLoading = () => {
  return (
    <PageWrapper paddingLeft="10rem">
      <PracticeContainer>Practice coming soon</PracticeContainer>

      <ListPageContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        ></Box>

        <LoadingContainer>
          <HalfCircleSpinner color="#fecd1f" />
        </LoadingContainer>
      </ListPageContainer>
    </PageWrapper>
  );
};
