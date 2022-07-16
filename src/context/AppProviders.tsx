import { ReactNode } from "react";

import { ListProvider } from "./ListContext";
import { AuthProvider } from "./AuthContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <ListProvider>{children}</ListProvider>
    </AuthProvider>
  );
};

export default AppProviders;
