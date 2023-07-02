import React from "react";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  return (
    <>
      <NewProduct />
      <ProductsTable />
    </>
  );
}
