import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useUserContext } from "./context/UserContext";

import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseConfig } from "./firebase/firebase-config";

import { Navbar, Main, Connection, AuthRoute } from "./components/index";
import { ListProvider } from "./context/ListContext";

const App: React.FC = () => {
  initializeApp(firebaseConfig);

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const { updateUser } = useUserContext();

  const populateUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateUser({
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        });
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    populateUser();
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <ListProvider>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Navbar />
              <Main />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Connection />} />
      </Routes>
    </ListProvider>
  );
};

export default App;
