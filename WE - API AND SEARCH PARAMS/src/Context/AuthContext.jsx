import React, { useState } from "react";

export const AuthContext = React.createContext();
function AppContextProvider({ children }) {
  const [status, setStatus] = useState(false);
  const handelClick = () => {
    status === false ? setStatus(true) : setStatus(false);
  };
  return (
    <AuthContext.Provider value={{ handelClick, status }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AppContextProvider;
