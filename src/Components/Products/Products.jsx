import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import NewProduct from "../NewProduct/NewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  return (
    <>
      <ErrorBox msg="هیچ محصولی یافت نشد" />
      <NewProduct />
      <ProductsTable />
    </>
  );
}
