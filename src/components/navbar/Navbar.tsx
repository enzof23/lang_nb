import { Avatar, SpeedDial, SpeedDialAction } from "@mui/material";
import { SignOut } from "../../firebase/firebase-auth";
import {
  IoExitOutline,
  IoSettingsOutline,
  IoPersonOutline,
} from "react-icons/io5";

import { useUserContext } from "../../context/UserContext";

import "./_navbar.scss";

export const Navbar: React.FC = () => {
  const { userInfo } = useUserContext();
  const { name, photo } = userInfo;

  const actions = [
    { icon: <IoSettingsOutline />, name: "Profile Settings" },
    { icon: <IoExitOutline />, name: "Sign Out" },
  ];

  return (
    <>
      <nav className="navbar__container">
        <p>Language Notebook</p>
      </nav>
      {userInfo && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            right: "0",
            top: "0",
            margin: "1rem",
          }}
        >
          {name && (
            <p
              style={{
                color: "white",
                marginTop: "1rem",
                paddingRight: "0.5rem",
              }}
            >
              Hello {name}
            </p>
          )}

          <SpeedDial
            ariaLabel="Profile Menu"
            direction="down"
            icon={
              photo ? (
                <Avatar
                  alt="user avatar"
                  src={photo}
                  sx={{ width: "100%", height: "100%" }}
                />
              ) : (
                <IoPersonOutline style={{ width: "50%", height: "50%" }} />
              )
            }
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={SignOut}
                sx={{ paddingTop: "0" }}
              />
            ))}
          </SpeedDial>
        </div>
      )}
    </>
  );
};
