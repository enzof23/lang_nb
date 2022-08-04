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
  const { setList, initialList } = useListContext();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Typography variant="h5">Welcome to Words2Go !</Typography>
      <List sx={{ padding: "0", zIndex: "0" }}>
        <ListHeader disableSticky={true}>
          Get started in a few steps:
        </ListHeader>

        <ListItem sx={{ padding: "0.5rem 0" }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#767676" }}>
              <AddCircleOutlineIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography
            onClick={() => {
              setList(initialList);
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
        <ListItem sx={{ padding: "0.5rem 0" }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#767676" }}>
              <DesignServicesIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography>Add words, update or delete your lists</Typography>
        </ListItem>
        <ListItem sx={{ padding: "0.5rem 0" }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#767676" }}>
              <LightbulbSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography>
            Learn your vocabulary with some fun practice (coming soon)
          </Typography>
        </ListItem>
      </List>
    </HeaderContainer>
  );
};
