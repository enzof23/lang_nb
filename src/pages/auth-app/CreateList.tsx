import { Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { NewTitleInput, NewWordInput, WordGrid } from "../../components/index";

import { useListContext } from "../../context/ListContext";

import {
  PageContainer,
  LargeGreenButton,
  ListDisplayBox,
  ListDisplayContainer,
} from "../../mui_styles/styles";

export const CreateList = () => {
  const [hasTitle, setHasTitle] = useState<boolean>(false);

  const { title, list, saveListFirebase } = useListContext();

  const listHasWords = list.length > 0;

  return (
    <PageContainer>
      <Collapse in={!hasTitle} sx={{ width: "100%", maxWidth: "900px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.5rem",
            letterSpacing: "0.025rem",
            marginBottom: "5vh",
          }}
        >
          Enter a title to start creating your new list
        </Typography>
        <NewTitleInput setHasTitle={setHasTitle} />
      </Collapse>

      <Collapse in={hasTitle} sx={{ width: "100%", maxWidth: "900px" }}>
        <ListDisplayContainer>
          <Box sx={{ width: "100%", maxWidth: "900px", padding: "0 1rem" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.5rem",
                letterSpacing: "0.025rem",
                marginBottom: "1.5rem",
              }}
            >
              {title}
            </Typography>

            <NewWordInput fct={() => console.log("word added")} />
          </Box>

          <Collapse in={listHasWords}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <LargeGreenButton
                variant="contained"
                onClick={() => saveListFirebase()}
              >
                save list
              </LargeGreenButton>

              <ListDisplayBox>
                {list.map((e) => {
                  const { wordID, word, translation } = e;
                  return (
                    <WordGrid
                      key={wordID}
                      word={word}
                      translation={translation}
                      wordID={wordID}
                      fct={() => console.log("updated")}
                    />
                  );
                })}
              </ListDisplayBox>
            </Box>
          </Collapse>
        </ListDisplayContainer>
      </Collapse>
    </PageContainer>
  );
};
