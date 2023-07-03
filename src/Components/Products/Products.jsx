import React, { useEffect, useState } from "react";
import "./Products.css";
import NewProduct from "../NewProduct/NewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((res) => setAllProducts(res.reverse()));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <NewProduct getAllProducts={getProduct} />
      <ProductsTable allProducts={allProducts} getAllProducts={getProduct} />
    </>
  );
}
