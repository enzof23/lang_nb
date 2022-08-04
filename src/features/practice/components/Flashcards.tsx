import {
  Flashcard,
  FlashcardFooter,
  FlashcardsBox,
  FlashcardsContainer,
  Type,
} from "../mui_styled/styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useListContext } from "../../../context/ListContext";
import { useState } from "react";
import { Typography } from "@mui/material";

export const Flashcards = () => {
  const { list } = useListContext();
  const [wordCount, setWordCount] = useState<number>(0);
  const [answerDisplayed, setAnswerDisplayed] = useState<boolean>(false);

  const words = list.words.map((e) => ({
    word: e.word,
    translation: e.translation,
  }));

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
    <FlashcardsContainer>
      <FlashcardsBox>
        <ArrowBackIosIcon onClick={previousWord} />
        <Flashcard onClick={() => setAnswerDisplayed((st) => !st)}>
          <Type>
            <Typography variant="caption">
              {answerDisplayed ? "translation" : "word"}
            </Typography>
          </Type>
          <Typography variant="h3" sx={{ position: "relative", top: "-14px" }}>
            {answerDisplayed ? wordDisplayed.translation : wordDisplayed.word}
          </Typography>
        </Flashcard>
        <ArrowBackIosIcon
          onClick={nextWord}
          style={{ transform: "rotateY(180deg)" }}
        />
      </FlashcardsBox>
      <FlashcardFooter>
        <ArrowBackIosIcon onClick={previousWord} />
        {wordCount + 1} / {words.length}
        <ArrowBackIosIcon
          onClick={nextWord}
          style={{ transform: "rotateY(180deg)" }}
        />
      </FlashcardFooter>
    </FlashcardsContainer>
  );
};
