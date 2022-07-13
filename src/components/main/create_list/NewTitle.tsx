import { useState } from "react";
import { database } from "../../../firebase/firebase-config";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { Box, FormControl, InputAdornment, Typography } from "@mui/material";
import {
  NewTitleButton,
  NewItemInput,
  NewTitleLabel,
} from "../../../mui_styles/styles";
import { useListContext } from "../../../context/ListContext";

export const NewTitle = () => {
  // const [newTitle, setNewTitle] = useState("");
  // const [newObj, setNewObj] = useState([]);
  // const collectionRef = collection(database, "userID");
  // const titleName = title.title;

  const { setNewTitle, createNewList } = useListContext();

  // const createList = () => {
  //   setDoc(doc(database, "userID", titleName), { word: [] }).then(() =>
  //     console.log("Data Added")
  //   );
  // };

  // const addWord = async () => {
  //   const docRef = doc(database, "userID", titleName);
  //   const data = await getDoc(docRef);
  //   const obj = data.data()?.words;

  //   obj.push({ word: "word 4", translation: "translation 4" });

  //   setDoc(doc(database, "userID", titleName), {
  //     words: obj,
  //   }).then(() => console.log("word added"));
  // };

  // const getList = async () => {
  //   const docRef = doc(database, "userID", titleName);
  //   const data = await getDoc(docRef);
  //   const words = data.data()?.words;
  //   console.log(words);
  // };

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
