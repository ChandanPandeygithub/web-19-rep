import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      style={{
        border: "2px solid black",
        fontSize: "25px",
        background: `${theme}blue`
      }}
    >
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        toggleTheme for themchange
      </button>
    </nav>
  );
};
