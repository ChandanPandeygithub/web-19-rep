import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    auth: true,
    token: null
  });
  const handleLogin = (token) => {
    setState({
      ...state,
      auth: true,
      token: token
    });
  };
  return (
    <AuthContext.Provider value={{ state, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
