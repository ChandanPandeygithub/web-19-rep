import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Setting from "../Pages/Settings";
import SingleUserDetail from "../Pages/SingleUserDetail";
import User from "../Pages/Users";
import Wellcome from "../Pages/Welcome";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Wellcome />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />{" "}
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<SingleUserDetail />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
