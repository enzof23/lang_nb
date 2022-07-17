import { Button, Grid, IconButton } from "@mui/material";
import { VerticalDivider, WordGridContainer } from "../../mui_styles/styles";
import { useListContext, Word } from "../../context/ListContext";
import { AiOutlineDelete } from "react-icons/ai";

function WordGrid({ wordID, word, translation }: Word) {
  const { removeWord } = useListContext();
  return (
    <WordGridContainer container columnGap={3} id={wordID}>
      <Grid item xs>
        {word}
      </Grid>
      <Grid item>
        <VerticalDivider orientation="vertical" />
      </Grid>
      <Grid item xs>
        {translation}
      </Grid>
      <Grid item>
        <Button variant="text">Edit</Button>
        <IconButton
          color="error"
          aria-label="delete word"
          onClick={() => removeWord({ wordID, word, translation })}
        >
          <AiOutlineDelete />
        </IconButton>
      </Grid>
    </WordGridContainer>
  );
}

export default WordGrid;
