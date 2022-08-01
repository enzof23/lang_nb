import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingSpinner, Navbar } from "../layouts";
import { Home, CreateList, ListPage } from "./auth-app/index";

function AuthenticatedApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route
          path={`/list/:userID/:listID`}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ListPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
