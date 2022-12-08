import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import ProductPage from "./Productpage";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}
