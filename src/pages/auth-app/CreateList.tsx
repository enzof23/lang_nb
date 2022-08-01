import { Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  TitleInput,
  WordInput,
  WordsGrid,
} from "../../features/list/components";

import { useListContext } from "../../context/ListContext";

import { PageWrapper } from "../../layouts";
import {
  LargeGreenButton,
  ListDisplayBox,
} from "../../features/list/mui_styled/styles";

export const CreateList = () => {
  const [hasTitle, setHasTitle] = useState<boolean>(false);

  const { list, saveListFirebase } = useListContext();

  const listHasWords = list.words.length > 0;

  return (
    <PageWrapper paddingLeft="10rem">
      <Collapse in={!hasTitle} sx={{ width: "90%", maxWidth: "900px" }}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          Enter a title to start creating your new list
        </Typography>
        <TitleInput setHasTitle={setHasTitle} />
      </Collapse>

      <Collapse in={hasTitle} sx={{ width: "90%", maxWidth: "900px" }}>
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {list.title}
        </Typography>

        <WordInput fct={() => null} />

        <Collapse in={listHasWords}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <LargeGreenButton
              variant="contained"
              onClick={() => saveListFirebase()}
            >
              save list
            </LargeGreenButton>

            <ListDisplayBox sx={{ marginTop: "1.5rem" }}>
              {list.words.map((e) => {
                const { wordID, word, translation } = e;
                return (
                  <WordsGrid
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
      </Collapse>
    </PageWrapper>
  );
};
