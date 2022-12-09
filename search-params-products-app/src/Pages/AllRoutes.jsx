import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import SingleUserPage from "./SingleUserPage";
import PageNotFound from "./NotFoundPage";
import PrivateRoute from "../Components/PrivateRoute";
import Products from "./Products";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/users/:user_id"
        element={
          <PrivateRoute>
            <SingleUserPage />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      ></Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
