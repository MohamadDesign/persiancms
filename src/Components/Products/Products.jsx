import React from "react";
import "./Products.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import NewProduct from "../NewProduct/NewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Products() {
  return (
    <>
      <NewProduct />
      <ErrorBox msg="هیچ محصولی یافت نشد" />
      <ProductsTable />
    </>
  );
}
