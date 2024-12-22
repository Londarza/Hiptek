"use client";
import {
  AuthProviderProps,
  AuthContextProps,
  ILoggedUser,
} from "../interfaces/Types";
import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext<AuthContextProps>({
  userData: null,
  setUserData: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<ILoggedUser | null>(null);

  useEffect(() => {
    if (userData) {
      localStorage.setItem(
        "userToken",
        JSON.stringify({ token: userData.token, user: userData.user }),
      );
    }
  }, [userData]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userToken")!);
      setUserData(userData);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
