import { Button, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useListContext } from "../../../context/ListContext";
import {
  NewItemBox,
  NewItemContainer,
  NewItemDesc,
  NewItemInput,
} from "../../../mui_styles/styles";

type Word = string;
type Translation = string;

export const NewItem = () => {
  const { title, addWord } = useListContext();
  const [word, setWord] = useState<Word>("");
  const [translation, setTranslation] = useState<Translation>("");
  const wordID = nanoid();

  return (
    <NewItemContainer>
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.5rem",
          letterSpacing: "0.025rem",
          alignSelf: "flex-start",
        }}
      >
        {title}
      </Typography>
      <NewItemBox>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={5}>
            <NewItemInput
              placeholder="Enter new word"
              onChange={(e) => setWord(e.target.value)}
              sx={{ color: "white", width: "100%" }}
            />
            <NewItemDesc>word</NewItemDesc>
          </Grid>
          <Grid item xs={12} sm={5}>
            <NewItemInput
              placeholder="Enter translation"
              onChange={(e) => setTranslation(e.target.value)}
              sx={{ color: "white", width: "100%" }}
            />
            <NewItemDesc>translation</NewItemDesc>
          </Grid>
          <Grid item xs={9} sm={1}>
            <Button
              type="submit"
              variant="contained"
              onClick={() => addWord({ wordID, word, translation })}
              sx={{
                backgroundColor: "#3bcfd0",
                width: "100%",
                paddingBlock: "0.75rem",
                "&:hover": {
                  backgroundColor: "#33afaf",
                },
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </NewItemBox>
    </NewItemContainer>
  );
};
