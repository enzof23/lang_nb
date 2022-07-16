import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { CreateList } from "./CreateList";
import { Home } from "./Home";

function AuthenticatedApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
