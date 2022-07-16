import { Typography } from "@mui/material";
import { NewTitleInput, NewItem, ListDisplay } from "../components/index";

import { useListContext } from "../context/ListContext";

import { CreateListContainer } from "../mui_styles/styles";

export const CreateList = () => {
  const { title } = useListContext();

  return (
    <CreateListContainer>
      {!title ? (
        <>
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
          <NewTitleInput />
        </>
      ) : (
        <>
          <Typography
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              letterSpacing: "0.025rem",
            }}
          >
            {title}
          </Typography>
          <ListDisplay />
          <NewItem />
        </>
      )}
    </CreateListContainer>
  );
};
