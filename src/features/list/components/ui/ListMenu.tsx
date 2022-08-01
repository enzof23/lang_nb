import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useListContext } from "../../../../context/ListContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ListMenu = ({
  setDeleteModal,
}: {
  setDeleteModal: (val: boolean) => void;
}) => {
  const { setIsAddingWords, setisEditingTitle } = useListContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuOptions = ["add word", "rename list", "delete list"];

  const handleClose = (action: string) => {
    switch (action) {
      case "add word":
        setIsAddingWords(true);
        break;
      case "rename list":
        setisEditingTitle(true);
        break;
      case "delete list":
        setDeleteModal(true);
        break;
      default:
        setAnchorEl(null);
    }
    setAnchorEl(null);
  };

  return (
    <div>
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
    </div>
  );
};
