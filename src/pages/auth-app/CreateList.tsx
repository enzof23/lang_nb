import { Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  TitleInput,
  WordInput,
  WordsGrid,
} from "../../features/list/components";

import { useListContext } from "../../context/ListContext";

import { PageWrapper } from "../../layouts";
import { LargeGreenButton } from "../../features/list/mui_styled/styles";
import { TransitionGroup } from "react-transition-group";
import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "../../firebase/firebase-config";
import { useAuthContext } from "../../features/authentication/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreateList = () => {
  const [hasTitle, setHasTitle] = useState<boolean>(false);

  const navigate = useNavigate();
  const { list, setList, initialList } = useListContext();
  const { userInfo } = useAuthContext();

  const listHasWords = list.words.length > 0;

  const saveListToFirebase = async () => {
    try {
      const newDoc = doc(collection(database, userInfo.id));
      await setDoc(newDoc, { title: list.title, words: list.words });

      console.log("list created");
      navigate("/");
      setList(initialList);
    } catch (err) {
      alert(`An error has occured : ${err}`);
    }
  };

  return (
    <PageWrapper paddingLeft="10rem">
      <Collapse in={!hasTitle} sx={{ width: "90%", maxWidth: "900px" }}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          Enter a title to start creating your new list
        </Typography>
        <TitleInput setHasTitle={setHasTitle} />
      </Collapse>

      <Collapse in={hasTitle} sx={{ width: "90%", maxWidth: "900px" }}>
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {list.title}
        </Typography>

        <WordInput fct={() => null} />

        <Collapse in={listHasWords}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <LargeGreenButton variant="contained" onClick={saveListToFirebase}>
              save list
            </LargeGreenButton>

            <Box sx={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
              <TransitionGroup style={{ width: "100%" }}>
                {list.words.map((e) => {
                  const { wordID, word, translation } = e;
                  return (
                    <Collapse key={wordID}>
                      <WordsGrid
                        key={wordID}
                        word={word}
                        translation={translation}
                        wordID={wordID}
                        fct={() => console.log("updated")}
                      />
                    </Collapse>
                  );
                })}
              </TransitionGroup>
            </Box>
          </Box>
        </Collapse>
      </Collapse>
    </PageWrapper>
  );
};
