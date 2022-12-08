import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Men from "../Components/Men";
import Women from "../Components/Women";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MensProducts" element={<Men />} />
      <Route path="/womenProducts" element={<Women />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cartPage" element={<h1>PAGE PAGES</h1>} />
    </Routes>
  );
}

export default Allroutes;
