import { Box, FormControl, InputAdornment, Typography } from "@mui/material";
import {
  NewTitleButton,
  NewItemInput,
  NewTitleLabel,
} from "../../../mui_styles/styles";
import { useListContext } from "../../../context/ListContext";

export const NewTitle = () => {
  const { newTitle, setNewTitle, createNewList } = useListContext();

  return (
    <>
      <Box sx={{ width: "80%" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            letterSpacing: "0.025rem",
            marginBottom: "5vh",
          }}
        >
          Create a new List
        </Typography>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <NewTitleLabel>Enter a Title</NewTitleLabel>
          <NewItemInput
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <NewTitleButton variant="text" onClick={() => createNewList()}>
                  Create
                </NewTitleButton>
              </InputAdornment>
            }
            sx={{ color: "white" }}
          ></NewItemInput>
        </FormControl>
      </Box>
    </>
  );
};
