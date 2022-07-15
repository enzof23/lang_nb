import { Divider, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useListContext } from "../../../context/ListContext";
import { useUserContext } from "../../../context/UserContext";
import { HomeBox, ListBox, ListsDisplay } from "../../../mui_styles/styles";

export const Home: React.FC = () => {
  const { userInfo } = useUserContext();
  const { getLists, listsArr } = useListContext();

  const listDisplay =
    listsArr.length === 0
      ? [0, 1, 2].map((num) => (
          <Skeleton
            key={num}
            variant="rectangular"
            animation="pulse"
            sx={{ backgroundColor: "#2e3756", borderRadius: "5px" }}
            width={280}
            height={140}
          />
        ))
      : listsArr.map((list) => {
          const { listTitle, words } = list;
          return (
            <ListBox key={listTitle} sx={{ textTransform: "uppercase" }}>
              <Typography variant="body1">{listTitle}</Typography>
              <Typography variant="caption" sx={{ color: "#969ab0" }}>
                {words.length} words
              </Typography>
            </ListBox>
          );
        });

  useEffect(() => {
    if (userInfo.id) {
      getLists();
    }
  }, [userInfo]);

  return (
    <>
      <HomeBox>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "0.5rem",
            cursor: "pointer",
          }}
        >
          Create a new List <AiOutlinePlus />
        </Typography>
        <Divider
          light
          variant="middle"
          sx={{ marginTop: "4rem", borderColor: "rgba(255, 255, 255, 0.3)" }}
        />
      </HomeBox>
      <HomeBox>
        <Typography
          variant="h6"
          sx={{ marginBlock: "2rem", fontWeight: "400" }}
        >
          MY LISTS
        </Typography>
        <ListsDisplay>{listDisplay}</ListsDisplay>
      </HomeBox>
    </>
  );
};
