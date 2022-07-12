import { AiOutlinePlus } from "react-icons/ai";
import { ListBox } from "./ListBox";
import "./_home.scss";

export const Home = () => {
  return (
    <div className="home__container">
      <div className="home__create">
        Create a new List <AiOutlinePlus />
      </div>
      <div className="main__lists">
        <h2 className="lists__title">My Lists</h2>
        <div className="lists__display">
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
        </div>
      </div>
    </div>
  );
};
