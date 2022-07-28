import { LoadingSpinner, PageWrapper } from "../../layouts";
import { Header, ListsDisplay } from "../../features/home/components";
import { ListsDisplayContainer } from "../../features/home/mui_styled/styles";
import { Suspense } from "react";
import { FetchingLists } from "../../features/home/components/ui/ListsDisplay";
import { Typography } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <PageWrapper paddingLeft="7rem">
      <Header />

      <ListsDisplayContainer>
        <ListsDisplay />
      </ListsDisplayContainer>
    </PageWrapper>
  );
};
