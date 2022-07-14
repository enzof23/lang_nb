import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useListContext } from "../../../context/ListContext";
import { useUserContext } from "../../../context/UserContext";
import { ListBox } from "./ListBox";
import "./_home.scss";

export const Home = () => {
  const { userInfo } = useUserContext();
  const { getLists, listsArr } = useListContext();

  console.log(listsArr);

  useEffect(() => {
    if (userInfo.id) getLists();
  }, [userInfo]);

  return (
    <div className="home__container">
      <div className="home__create">
        Create a new List <AiOutlinePlus />
      </div>
      <div className="main__lists">
        <h2 className="lists__title">My Lists</h2>
        <div className="lists__display">
          {listsArr.map((list) => {
            const { listTitle, words } = list;
            return (
              <ListBox key={listTitle} title={listTitle} words={words.length} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
