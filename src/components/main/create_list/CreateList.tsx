import { NewTitle } from "./NewTitle";
import { NewItem } from "./NewItem";
import "./_createList.scss";

export const CreateList = () => {
  return (
    <div className="create__container">
      <div className="create__body">
        <NewTitle />
        <NewItem />
      </div>
    </div>
  );
};
