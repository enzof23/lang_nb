import { Button, Menu, MenuItem, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useListContext } from "../../../../context/ListContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { ListMenuContainer } from "../../mui_styled/styles";

export const ListMenu = ({
  setDeleteModal,
}: {
  setDeleteModal: (val: boolean) => void;
}) => {
  const { list, setList, setIsAddingWords, setIsEditingTitle } =
    useListContext();

  const menuOptions = ["add word", "rename list", "delete list"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [sortTo, setSortTo] = useState<null | string>(null);

  const listSortTo = list.words.sort((a, b) => {
    if (sortTo === "asc") {
      return a.word.localeCompare(b.word);
    } else {
      return b.word.localeCompare(a.word);
    }
  });

  const sortList = () => {
    if (!sortTo || sortTo === "desc") {
      setSortTo("asc");
    } else {
      setSortTo("desc");
    }
  };

  const handleClose = (action: string) => {
    switch (action) {
      case "add word":
        setIsAddingWords(true);
        break;
      case "rename list":
        setIsEditingTitle(true);
        break;
      case "delete list":
        setDeleteModal(true);
        break;
      default:
        setAnchorEl(null);
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    if (sortTo) {
      setList((st) => ({ ...st, words: listSortTo }));
    }
    // eslint-disable-next-line
  }, [sortTo]);

  return (
    <ListMenuContainer>
      <Tooltip title="SORT LIST" arrow>
        <SortByAlphaIcon
          sx={{
            cursor: "pointer",
            fontSize: "28px",
            "&:hover": { color: "#fecd1f" },
          }}
          onClick={sortList}
        />
      </Tooltip>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0",
          maxWidth: "28px",
          minWidth: "0",
        }}
      >
        <MoreVertIcon style={{ color: "white", fontSize: "2em" }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuOptions.map((opt) => (
          <MenuItem
            key={opt}
            onClick={() => handleClose(opt)}
            sx={{ fontSize: "14px", fontWeight: "500", color: "#0f0c41" }}
          >
            {opt.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </ListMenuContainer>
  );
};
