import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { initialList, useListContext } from "../../../../context/ListContext";
import { useAuthContext } from "../../../authentication/context/AuthContext";

import { AiOutlinePlus } from "react-icons/ai";
import { Skeleton, Typography } from "@mui/material";
import { ListBox, ListsGrid } from "../../mui_styled/styles";

export const ListsDisplay = () => {
  const { allListsArr, noLists, getAllLists } = useListContext();
  const { userInfo } = useAuthContext();

  useEffect(() => {
    getAllLists();
    // eslint-disable-next-line
  }, [userInfo]);

  if (noLists) {
    return <ListsFetchedEmpty />;
  }

  if (allListsArr.length === 0) {
    return (
      <>
        {[0, 1, 2].map((num) => (
          <FetchingLists key={num} />
        ))}
      </>
    );
  } else {
    return (
      <>
        <Typography variant="h6">My lists</Typography>
        <ListsGrid container>
          <ListsFetched />
        </ListsGrid>
      </>
    );
  }
};

export const FetchingLists = () => {
  return (
    <Skeleton
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
  );
};

export const ListsFetched = () => {
  const { allListsArr } = useListContext();
  const { userInfo } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      {allListsArr.map((list) => {
        const { listID, listTitle, words } = list;
        const titleStringDisplay = listTitle.replace(/_/g, " ");

        return (
          <ListBox
            item
            key={listID}
            sx={{ textTransform: "uppercase" }}
            onClick={() => navigate(`list/${userInfo.id}/${listID}`)}
          >
            <Typography variant="body1">{titleStringDisplay}</Typography>
            <Typography variant="caption" sx={{ color: "#969ab0" }}>
              {words.length} words
            </Typography>
          </ListBox>
        );
      })}
    </>
  );
};

export const ListsFetchedEmpty = () => {
  const { setList } = useListContext();
  const navigate = useNavigate();

  return (
    <Typography
      variant="h5"
      onClick={() => {
        setList(initialList);
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
};
