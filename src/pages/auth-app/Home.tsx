import { PageWrapper } from "../../layouts";
import { Header, HomeListsDisplay } from "../../features/home/components";
import { ListsDisplayContainer } from "../../features/home/mui_styled/styles";
import { useEffect } from "react";
import { useListContext } from "../../context/ListContext";

export const Home: React.FC = () => {
  const { resetListContext } = useListContext();

  useEffect(() => {
    resetListContext();
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapper paddingLeft="7rem">
      <Header />

      <ListsDisplayContainer>
        <HomeListsDisplay />
      </ListsDisplayContainer>
    </PageWrapper>
  );
};
