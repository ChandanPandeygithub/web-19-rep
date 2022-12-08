import { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";

const getStyle = (theme) =>
  theme === "dark"
    ? {
        color: "white",
        background: "black"
      }
    : {
        color: "black",
        background: "white"
      };
function ToggleComponents() {
  const Context = useContext(AppContext);
  const { toggleTheme, theme } = Context;

  const style = getStyle(theme);
  return (
    <button style={style} onClick={toggleTheme}>
      TOGGLE
    </button>
  );
}
export default ToggleComponents;
