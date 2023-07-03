import React, { useState } from "react";
import "./NewProduct.css";
import {
  MdDriveFileRenameOutline,
  MdShoppingCartCheckout,
} from "react-icons/md";
import {
  BiDollar,
  BiShoppingBag,
  BiImageAdd,
  BiSolidLike,
} from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";

export default function NewProduct() {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColor, setNewProductColor] = useState("");
  const newProduct = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColor,
  };

  const addNewProduct = (event) => {
    event.preventDefault();
    console.log("محصول جدید افزوده شد");

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="products-main">
        <h1 className="products-title">افزودن محصول جدید</h1>

        <form action="#" className="add-products-form">
          <div className="add-products-form-wrap">
            <div className="add-products-form-group">
              <MdDriveFileRenameOutline className="add-products-icon" />
              <input
                type="text"
                placeholder="نام محصول را وار کنید"
                className="add-products-input"
                onChange={(event) => setNewProductTitle(event.target.value)}
                value={newProductTitle}
              />
            </div>
            <div className="add-products-form-group">
              <BiDollar className="add-products-icon" />
              <input
                type="text"
                placeholder="قیمت محصول را وارد بنویسید"
                className="add-products-input"
                onChange={(event) => setNewProductPrice(event.target.value)}
                value={newProductPrice}
              />
            </div>
            <div className="add-products-form-group">
              <BiShoppingBag className="add-products-icon" />
              <input
                type="text"
                placeholder="تعداد محصول را وارد کنید"
                className="add-products-input"
                onChange={(event) => setNewProductCount(event.target.value)}
                value={newProductCount}
              />
            </div>
            <div className="add-products-form-group">
              <BiImageAdd className="add-products-icon" />
              <input
                type="text"
                placeholder="آدرس عکس محصول را بنویسید"
                className="add-products-input"
                onChange={(event) => setNewProductImg(event.target.value)}
                value={newProductImg}
              />
            </div>
            <div className="add-products-form-group">
              <BiSolidLike className="add-products-icon" />
              <input
                type="text"
                placeholder="میزان محبوبیت محصول را بنویسید"
                className="add-products-input"
                onChange={(event) =>
                  setNewProductPopularity(event.target.value)
                }
                value={newProductPopularity}
              />
            </div>
            <div className="add-products-form-group">
              <MdShoppingCartCheckout className="add-products-icon" />
              <input
                type="text"
                placeholder="میزان فروش محصول را بنویسید"
                className="add-products-input"
                onChange={(event) => setNewProductSale(event.target.value)}
                value={newProductSale}
              />
            </div>
            <div className="add-products-form-group">
              <IoIosColorPalette className="add-products-icon" />
              <input
                type="text"
                placeholder="تعداد رنگ بندی محصول را وارد کنید"
                className="add-products-input"
                onChange={(event) => setNewProductColor(event.target.value)}
                value={newProductColor}
              />
            </div>
          </div>
          <button onClick={addNewProduct} className="add-products-btn">
            افزودن محصول جدید
          </button>
        </form>
      </div>
    </>
  );
}
