import { useListContext } from "../../context/ListContext";

import { Button, Grid } from "@mui/material";
import {
  NewItemContainer,
  NewItemDesc,
  CreateListInput,
} from "../../mui_styles/styles";

export const NewItem = () => {
  const { newListAddWord, word, translation, setWord, setTranslation } =
    useListContext();

  return (
    <NewItemContainer container>
      <Grid item xs={12} sm={5}>
        <CreateListInput
          value={word}
          placeholder="Enter new word"
          onChange={(e) => setWord(e.target.value)}
          sx={{ color: "white", width: "100%" }}
        />
        <NewItemDesc>word</NewItemDesc>
      </Grid>
      <Grid item xs={12} sm={5}>
        <CreateListInput
          value={translation}
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
          onClick={() => newListAddWord()}
          sx={{
            backgroundColor: "#3bcfd0",
            width: "100%",
            paddingBlock: "0.75rem",
            "&:hover": {
              backgroundColor: "#33afaf",
            },
          }}
        >
          add
        </Button>
      </Grid>
    </NewItemContainer>
  );
};
