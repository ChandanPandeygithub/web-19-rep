import { AllRoutes } from "./pages/AllRoutes";
import { Navbar } from "./pages/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
