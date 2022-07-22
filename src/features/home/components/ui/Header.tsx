import { useNavigate } from "react-router-dom";

import { useListContext } from "../../../../context/ListContext";

import { HeaderContainer, ListHeader } from "../../mui_styled/styles";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";

export const Header = () => {
  const { setTitle, setList } = useListContext();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Typography variant="h5">Welcome to !</Typography>
      <List sx={{ padding: "0" }}>
        <ListHeader>Get started in a few steps:</ListHeader>

        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#767676" }}>
              <AddCircleOutlineIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography
            onClick={() => {
              setTitle("");
              setList([]);
              navigate("/create-list");
            }}
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#fecd1f" },
            }}
          >
            Create a new list
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#767676" }}>
              <DesignServicesIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#fecd1f" },
            }}
          >
            Add words, update or delete your lists
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#767676" }}>
              <LightbulbSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#fecd1f" },
            }}
          >
            Learn your vocabulary with some fun practice
          </Typography>
        </ListItem>
      </List>
    </HeaderContainer>
  );
};
