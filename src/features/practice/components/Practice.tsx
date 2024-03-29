import { useState } from "react";
import { useListContext } from "../../../context/ListContext";

import { Button, Collapse, Typography } from "@mui/material";
import {
  PracticeClosedContainer,
  PracticeComponentContainer,
  PracticeContainer,
  PracticeDisplayContainer,
  PracticeMenuContainer,
  PracticeMenuOption,
  PracticeOpenedContainer,
  PracticeOpenedHeader,
} from "../mui_styled/styles";

import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { Flashcards, Write, Match } from "./index";

type Option = {
  name: string;
  icon: JSX.Element;
};

const practiceOptions = [
  {
    name: "Flashcards",
    icon: <ViewCarouselIcon />,
  },
  {
    name: "Write",
    icon: <ViewCarouselIcon />,
  },
  {
    name: "Match",
    icon: <ViewCarouselIcon />,
  },
];

export const Practice = () => {
  const [practiceOpened, setPracticeOpened] = useState<boolean>(false);
  const [practiceSelected, setPracticeSelected] = useState<Option>(
    practiceOptions[0]
  );

  const { list } = useListContext();

  const practiceDisplayed = practiceOptions.find(
    (opt) => opt.name === practiceSelected.name
  );

  const optionIsSelectedStyle = {
    backgroundColor: "var(--light-blue-2) !important",
    fontWeight: 500,

    svg: {
      color: "var(--main-yellow)",
    },
  };

  return (
    <PracticeContainer>
      <Collapse in={!practiceOpened}>
        <PracticeClosedContainer onClick={() => setPracticeOpened(true)}>
          <Typography variant="h6">Start practicing !</Typography>
        </PracticeClosedContainer>
      </Collapse>

      <Collapse in={practiceOpened}>
        <PracticeOpenedContainer>
          <PracticeOpenedHeader>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {list.title.toLocaleUpperCase()}
            </Typography>
            <Button variant="text" onClick={() => setPracticeOpened(false)}>
              close
            </Button>
          </PracticeOpenedHeader>

          <PracticeDisplayContainer>
            <PracticeMenuContainer>
              {practiceOptions.map((opt, index) => {
                return (
                  <PracticeMenuOption
                    onClick={() => setPracticeSelected(practiceOptions[index])}
                    key={opt.name}
                    sx={
                      opt.name === practiceSelected.name
                        ? optionIsSelectedStyle
                        : {}
                    }
                  >
                    {opt.icon}
                    {opt.name}
                  </PracticeMenuOption>
                );
              })}
            </PracticeMenuContainer>

            <PracticeComponentContainer>
              {practiceDisplayed?.name === "Flashcards" ? (
                <Flashcards />
              ) : practiceDisplayed?.name === "Write" ? (
                <Write />
              ) : practiceDisplayed?.name === "Match" ? (
                <Match />
              ) : null}
            </PracticeComponentContainer>
          </PracticeDisplayContainer>
        </PracticeOpenedContainer>
      </Collapse>
    </PracticeContainer>
  );
};
