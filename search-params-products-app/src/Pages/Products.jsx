import React from "react";
import data from "../../src/db.json";

const Products = () => {
  return <div>{data.map((item) => {})}</div>;
};

export default Products;
