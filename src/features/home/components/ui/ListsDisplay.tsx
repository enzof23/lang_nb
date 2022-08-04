import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrList,
  initialList,
  useListContext,
} from "../../../../context/ListContext";
import { useAuthContext } from "../../../authentication/context/AuthContext";

import { AiOutlinePlus } from "react-icons/ai";
import { Skeleton, Typography } from "@mui/material";
import { ListBox, ListsGrid } from "../../mui_styled/styles";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../../firebase/firebase-config";

export const ListsDisplay = () => {
  const { allListsArr, noLists, setNoLists, setAllListsArr } = useListContext();
  const { userInfo } = useAuthContext();

  const getAllLists = async () => {
    try {
      if (userInfo.id) {
        let arrLists: ArrList[] = [];
        const listsFetch = await getDocs(collection(database, userInfo.id));
        listsFetch.forEach((list) => {
          arrLists.push({
            listID: list.id,
            listTitle: list.data().title,
            words: list.data().words,
          });
        });

        if (arrLists.length === 0) {
          console.log("first");
          setNoLists(true);
        } else {
          setAllListsArr(arrLists);
          setNoLists(false);
        }
      }
    } catch (err) {
      alert(`An error has occured: ${err}`);
    }
  };

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
  }

  return (
    <>
      <Typography variant="h6">My lists</Typography>
      <ListsGrid container>
        <ListsFetched />
      </ListsGrid>
    </>
  );
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
  const { allListsArr, setList } = useListContext();
  const { userInfo } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = (listID: string) => {
    const listSelected = allListsArr.find((e) => e.listID === listID);
    console.log(listSelected);
    if (listSelected) {
      setList({ title: listSelected?.listTitle, words: listSelected?.words });
      navigate(`list/${userInfo.id}/${listID}`);
    }
  };

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
            onClick={() => handleClick(listID)}
            // onClick={() => navigate(`list/${userInfo.id}/${listID}`)}
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
