import { Route, Routes } from "react-router-dom";
import { Navbar } from "../layouts";
import { Home, CreateList, ListPage } from "./auth-app/index";

function AuthenticatedApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
