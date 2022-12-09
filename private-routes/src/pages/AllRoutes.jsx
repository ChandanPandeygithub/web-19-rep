import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Dashboardpage } from "./Dashboardpage";
import { Homepage } from "./Homepage";
import { Loginpage } from "./Loginpage";
import { Settingpage } from "./Settingpage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboardpage />
          </PrivateRoute>
        }
      />
      <Route path="/setting" element={<Settingpage />} />
    </Routes>
  );
};
