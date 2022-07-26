import { useAuthContext } from "../features/authentication/context/AuthContext";

import {
  Avatar,
  Box,
  SpeedDial,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import { NavbarContainer } from "../mui_styles/styles";
import StyleIcon from "@mui/icons-material/Style";

import { IoExitOutline, IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useListContext } from "../context/ListContext";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const { userInfo, authSignOut } = useAuthContext();
  const { resetListContext } = useListContext();

  const userImage = userInfo.photo ? (
    <Avatar
      alt="user avatar"
      src={userInfo.photo}
      sx={{ width: "100%", height: "100%" }}
    />
  ) : (
    <IoPersonOutline
      style={{ width: "50%", height: "50%", color: "#0a082d" }}
    />
  );

  const actions = [
    // {
    //   icon: <IoSettingsOutline />,
    //   name: "Profile Settings",
    //   fct: () => alert("Account settings"),
    // },
    { icon: <IoExitOutline />, name: "Sign Out", fct: () => signOut() },
  ];

  const signOut = () => {
    authSignOut();
    resetListContext();
  };

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <StyleIcon sx={{ fontSize: "1.5rem" }} />

        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            letterSpacing: "0.1rem",
          }}
          onClick={() => navigate("/")}
        >
          Words2Go
        </Typography>
      </Box>

      <SpeedDial
        ariaLabel="Profile Menu"
        direction="down"
        sx={{
          position: "fixed",
          right: 0,
          top: 0,
          margin: ".59rem",
          marginRight: "1rem",
        }}
        FabProps={{
          sx: {
            height: "38px",
            width: "38px",
            backgroundColor: "#fecd1f",
            "&:hover": { backgroundColor: "#deb31b" },
          },
        }}
        icon={userImage}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.fct}
            sx={{ margin: "0.25rem 0", height: "42px", width: "42px" }}
          />
        ))}
      </SpeedDial>
    </NavbarContainer>
  );
};
