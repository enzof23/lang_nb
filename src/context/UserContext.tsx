import { createContext, ReactNode, useContext, useState } from "react";

export interface UserInfo {
  id: string;
  name: string | null;
  photo?: string | null;
}

const useUser = (initial: UserInfo = { id: "", name: "" }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initial);

  return {
    userInfo,
    setUserInfo,
    updateUser({ id, name, photo }: UserInfo) {
      setUserInfo({ id, name, photo });
    },
  };
};

const UserContext = createContext<ReturnType<typeof useUser> | null>(null);

export const useUserContext = () => useContext(UserContext)!;

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider value={useUser()}>{children}</UserContext.Provider>
  );
};
