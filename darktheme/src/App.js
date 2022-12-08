import "./styles.css";

// import Navbar from "./Components.navbar"
// import AllRoutes from "/Routes/AllRoutes"
import { useContext } from "react";
import { AppContext } from "./Context/ContextProvider.jsx";
import ToggleComponents from "./Components/ToggleComponents";

export default function App() {
  //3.consuming
  const value = useContext(AppContext);
  console.log(value);
  return (
    <div className="APP">
      <h1>Theme</h1>
      <h2 className="theme" theme>
        {value.theme}
      </h2>
      <ToggleComponents />
    </div>
  );
}
