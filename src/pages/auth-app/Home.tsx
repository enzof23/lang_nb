import { useEffect } from "react";

import { useListContext } from "../../context/ListContext";
import { useAuthContext } from "../../features/authentication/context/AuthContext";

import { PageWrapper } from "../../layouts";

import { Header, ListDisplay } from "../../features/home/components";

export const Home: React.FC = () => {
  const { userInfo } = useAuthContext();
  const { getAllLists, list } = useListContext();

  useEffect(() => {
    if (userInfo.id) {
      getAllLists();
    }
  }, [userInfo]);

  return (
    <PageWrapper paddingLeft="7rem">
      <Header />
      <ListDisplay />
    </PageWrapper>
  );
};
