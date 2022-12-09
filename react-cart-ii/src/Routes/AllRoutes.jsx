import AllProducts from "../Pages/AllProducts";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../Pages/ProductDetails";

import { Routes, Route } from "react-router-dom";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllProducts />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
