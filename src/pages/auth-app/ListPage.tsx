import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useListContext } from "../../context/ListContext";

import { LoadingSpinner, PageWrapper } from "../../layouts";
import { Box, Collapse, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

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
  ListPageContainer,
  ListPageHeader,
} from "../../features/list/mui_styled/styles";
import { Practice } from "../../features/practice/components";

export const ListPage = () => {
  const navigate = useNavigate();
  const { userID, listID } = useParams();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const {
    list,
    listIsFetched,
    listUpdated,
    setListUpdated,
    isAddingWords,
    isEditingTitle,
    setListIsFetched,
  } = useListContext();

  useEffect(() => {
    setListIsFetched(false);

    if (userID && listID) {
      setTimeout(() => setListIsFetched(true), 300);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [listID]);

  if (!listIsFetched) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {deleteModal ? <DeleteModal setDeleteModal={setDeleteModal} /> : null}
      <PageWrapper paddingLeft="10rem">
        <Practice />

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
            <Box sx={{ marginBottom: "1rem" }}>
              <TransitionGroup style={{ width: "100%" }}>
                {list.words.map((e) => {
                  const { wordID, word, translation } = e;
                  return (
                    <Collapse key={wordID}>
                      <WordsGrid
                        key={wordID}
                        word={word}
                        translation={translation}
                        wordID={wordID}
                        fct={() => setListUpdated(true)}
                      />
                    </Collapse>
                  );
                })}
              </TransitionGroup>
            </Box>
          )}
        </ListPageContainer>
      </PageWrapper>
    </>
  );
};
