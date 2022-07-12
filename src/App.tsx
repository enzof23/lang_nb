import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useUserContext } from "./context/UserContext";

import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseConfig } from "./firebase/firebase-config";

import { Navbar, Main, Connection, AuthRoute } from "./components/index";

const App: React.FC = () => {
  initializeApp(firebaseConfig);

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const { updateUser } = useUserContext();

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

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
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
  );
};

export default App;
