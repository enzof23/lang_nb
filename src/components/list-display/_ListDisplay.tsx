import { useListContext } from "../../context/ListContext";
import {
  ListDisplayContainer,
  ListDisplayBox,
  LargeGreenButton,
} from "../../mui_styles/styles";
import { WordGrid } from "./index";

function ListDisplay() {
  const { list, createList } = useListContext();

  return (
    <ListDisplayContainer>
      <ListDisplayBox>
        {list.map((e) => {
          const { wordID, word, translation } = e;
          return (
            <WordGrid
              key={wordID}
              word={word}
              translation={translation}
              wordID={wordID}
            />
          );
        })}
      </ListDisplayBox>
      <LargeGreenButton variant="contained" onClick={() => createList()}>
        save list
      </LargeGreenButton>
    </ListDisplayContainer>
  );
}

export default ListDisplay;
