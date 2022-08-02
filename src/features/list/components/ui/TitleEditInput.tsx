import { InputAdornment } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useListContext } from "../../../../context/ListContext";
import { CreateListInput, TitleButton } from "../../mui_styled/styles";

export const TitleEditInput = () => {
  const { list, setList, setListUpdated, setIsEditingTitle } = useListContext();
  const { listID } = useParams();

  const [newTitle, setNewTitle] = useState<string>(list.title);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (listID) {
      setList({ title: newTitle, words: list.words });
      setListUpdated(true);
      setIsEditingTitle(false);
    } else {
      alert("Couldn't update title");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CreateListInput
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <TitleButton
              disabled={newTitle.length < 1}
              variant="text"
              type="submit"
              onClick={handleSubmit}
            >
              Done
            </TitleButton>
          </InputAdornment>
        }
      />
    </form>
  );
};
