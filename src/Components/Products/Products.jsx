import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import NewProduct from "../NewProduct/NewProduct";

export default function Products() {
  return (
    <>
      <ErrorBox msg="هیچ محصولی یافت نشد" />
      <NewProduct />
    </>
  );
}
