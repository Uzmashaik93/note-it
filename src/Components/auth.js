import { createContext, useContext, useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../firebase-config";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    setUser(currentUser);
  });

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
