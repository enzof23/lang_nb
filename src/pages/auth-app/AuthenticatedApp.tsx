import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { Home, CreateList, ListPage } from "./index";

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
