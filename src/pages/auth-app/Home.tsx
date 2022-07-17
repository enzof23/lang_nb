import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { useListContext } from "../../context/ListContext";
import { useAuthContext } from "../../context/AuthContext";

import { HomeBox, ListBox, ListsDisplay } from "../../mui_styles/styles";
import { Divider, Typography, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const { userInfo } = useAuthContext();
  const {
    allListsArr,
    noLists,
    getAllLists,
    getListByTitle,
    setTitle,
    setList,
    setNewTitle,
  } = useListContext();

  const listsDisplay =
    allListsArr.length === 0
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
      : allListsArr.map((list) => {
          const { listTitle, words } = list;
          return (
            <ListBox
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

  useEffect(() => {
    if (userInfo.id) {
      getAllLists();
    }
  }, [userInfo]);

  return (
    <HomeBox>
      <div>
        <Typography
          variant="h5"
          onClick={() => {
            setTitle("");
            setNewTitle("");
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
          Create a new List <AiOutlinePlus />
        </Typography>
        <Divider
          light
          variant="middle"
          sx={{ marginTop: "4rem", borderColor: "rgba(255, 255, 255, 0.3)" }}
        />
      </div>
      <div>
        <Typography
          variant="h6"
          sx={{ marginBlock: "2rem", fontWeight: "400" }}
        >
          MY LISTS
        </Typography>
        <ListsDisplay>
          {noLists ? <div>add a list</div> : listsDisplay}
        </ListsDisplay>
      </div>
    </HomeBox>
  );
};
