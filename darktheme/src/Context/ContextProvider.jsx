import React, { useState } from "react";
//create

export const AppContext = React.createContext();
//2.provide
export default function AppContextProviderComponent(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <AppContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}
