import { useAuthContext } from "../features/authentication/context/AuthContext";

import { Avatar, SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import { NavbarContainer } from "../mui_styles/styles";

import {
  IoExitOutline,
  IoSettingsOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const { userInfo, authSignOut } = useAuthContext();
  const { name, photo } = userInfo;

  const firstName = name?.split(" ")[0];
  const userImage = photo ? (
    <Avatar
      alt="user avatar"
      src={photo}
      sx={{ width: "100%", height: "100%" }}
    />
  ) : (
    <IoPersonOutline style={{ width: "50%", height: "50%" }} />
  );

  const actions = [
    {
      icon: <IoSettingsOutline />,
      name: "Profile Settings",
      fct: () => alert("Account settings"),
    },
    { icon: <IoExitOutline />, name: "Sign Out", fct: () => authSignOut() },
  ];

  return (
    <NavbarContainer>
      <Typography
        variant="h5"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Language Notebook
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          marginRight: "2.75rem",
        }}
      >
        {firstName ? `Hello ${firstName} !` : "Welcome !"}
      </Typography>
      <SpeedDial
        ariaLabel="Profile Menu"
        direction="down"
        sx={{
          position: "fixed",
          right: 0,
          top: 0,
          margin: ".59rem",
        }}
        FabProps={{
          sx: { height: "38px", width: "38px" },
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
