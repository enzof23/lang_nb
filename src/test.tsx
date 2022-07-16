import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import { Connection } from "./pages/Connection";
import { CreateList } from "./pages/CreateList";
import { Home } from "./pages/Home";

function test() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AuthenticatedApp />} />
          <Route path="/create-list" element={<CreateList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default test;
