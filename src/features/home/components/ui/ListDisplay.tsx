import { useNavigate } from "react-router-dom";

import { useListContext } from "../../../../context/ListContext";

import { AiOutlinePlus } from "react-icons/ai";
import { Grid, Skeleton, Typography } from "@mui/material";
import {
  ListBox,
  ListsDisplayContainer,
  ListsGrid,
} from "../../mui_styled/styles";

export const ListDisplay = () => {
  const { allListsArr, noLists, getListByTitle, setTitle, setList } =
    useListContext();
  const navigate = useNavigate();

  const listsLoading = [0, 1, 2].map((num) => (
    <Skeleton
      key={num}
      variant="rectangular"
      animation="pulse"
      sx={{
        backgroundColor: "#2e3756",
        borderRadius: "5px",
        marginTop: "48px",
      }}
      width={280}
      height={140}
    />
  ));

  const listsEmpty = (
    <Typography
      variant="h5"
      onClick={() => {
        setTitle("");
        setList([]);
        navigate("/create-list");
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: "0.5rem",
        cursor: "pointer",
      }}
    >
      Create your first list to get started <AiOutlinePlus />
    </Typography>
  );

  const lists = allListsArr.map((list) => {
    const { listTitle, words } = list;
    return (
      <ListBox
        item
        key={listTitle}
        sx={{ textTransform: "uppercase" }}
        onClick={() => getListByTitle(listTitle)}
      >
        <Typography variant="body1">{listTitle}</Typography>
        <Typography variant="caption" sx={{ color: "#969ab0" }}>
          {words.length} words
        </Typography>
      </ListBox>
    );
  });

  const display =
    allListsArr.length === 0 ? (
      listsLoading
    ) : (
      <>
        <Typography variant="h6">My lists</Typography>
        <ListsGrid container>{lists}</ListsGrid>
      </>
    );

  return (
    <ListsDisplayContainer>
      {noLists ? listsEmpty : display}
    </ListsDisplayContainer>
  );
};
