import { Flashcard, FlashcardsContainer, Type } from "../mui_styled/styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useListContext } from "../../../context/ListContext";
import { useState } from "react";
import { Typography } from "@mui/material";

export const Flashcards = () => {
  const { list } = useListContext();
  const [wordCount, setWordCount] = useState<number>(0);
  const [answerDisplayed, setAnswerDisplayed] = useState<boolean>(false);

  const words = list.words;
  const wordDisplayed = words[wordCount];

  const checkNumber = (num: number) => {
    return num > words.length - 1 ? 0 : num < 0 ? words.length - 1 : num;
  };

  const nextWord = () => {
    let newCount = wordCount + 1;
    setWordCount(checkNumber(newCount));
    setAnswerDisplayed(false);
  };

  const previousWord = () => {
    let newCount = wordCount - 1;
    setWordCount(checkNumber(newCount));
    setAnswerDisplayed(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "2rem",
      }}
    >
      <FlashcardsContainer>
        <ArrowBackIosIcon onClick={previousWord} />
        <Flashcard onClick={() => setAnswerDisplayed((st) => !st)}>
          <Type>
            <Typography variant="caption">
              {answerDisplayed ? "translation" : "word"}
            </Typography>
          </Type>
          <Typography variant="h3">
            {answerDisplayed ? wordDisplayed.translation : wordDisplayed.word}
          </Typography>
        </Flashcard>
        <ArrowForwardIosIcon onClick={nextWord} />
      </FlashcardsContainer>
      <div>
        {wordCount + 1} / {words.length}
      </div>
    </div>
  );
};
