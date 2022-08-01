import { PageWrapper } from "../../layouts";
import { Header, ListsDisplay } from "../../features/home/components";
import { ListsDisplayContainer } from "../../features/home/mui_styled/styles";
import { useEffect } from "react";
import { useListContext } from "../../context/ListContext";

export const Home: React.FC = () => {
  const { resetListContext } = useListContext();

  useEffect(() => {
    resetListContext();
  }, [resetListContext]);
  return (
    <PageWrapper paddingLeft="7rem">
      <Header />

      <ListsDisplayContainer>
        <ListsDisplay />
      </ListsDisplayContainer>
    </PageWrapper>
  );
};
