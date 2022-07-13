import { NewTitle } from "./NewTitle";
import { NewItem } from "./NewItem";
import "./_createList.scss";
import { Container } from "@mui/material";

export const CreateList = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NewTitle />
      <NewItem />
    </Container>
  );
};
