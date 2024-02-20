"use client";
import { ReactProps } from "@/types/ReactProps";
import { createContext, useState, useContext } from "react";

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  setIsLogged: () => {},
});

export const AuthProvider = ({ children }: ReactProps) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
