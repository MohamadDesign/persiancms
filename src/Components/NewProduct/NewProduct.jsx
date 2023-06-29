import React from "react";
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
              />
            </div>
            <div className="add-products-form-group">
              <BiDollar className="add-products-icon" />
              <input
                type="text"
                placeholder="قیمت محصول را وارد بنویسید"
                className="add-products-input"
              />
            </div>
            <div className="add-products-form-group">
              <BiShoppingBag className="add-products-icon" />
              <input
                type="text"
                placeholder="تعداد محصول را وارد کنید"
                className="add-products-input"
              />
            </div>
            <div className="add-products-form-group">
              <BiImageAdd className="add-products-icon" />
              <input
                type="text"
                placeholder="آدرس عکس محصول را بنویسید"
                className="add-products-input"
              />
            </div>
            <div className="add-products-form-group">
              <BiSolidLike className="add-products-icon" />
              <input
                type="text"
                placeholder="میزان محبوبیت محصول را بنویسید"
                className="add-products-input"
              />
            </div>
            <div className="add-products-form-group">
              <MdShoppingCartCheckout className="add-products-icon" />
              <input
                type="text"
                placeholder="میزان فروش محصول را بنویسید"
                className="add-products-input"
              />
            </div>
            <div className="add-products-form-group">
              <IoIosColorPalette className="add-products-icon" />
              <input
                type="text"
                placeholder="تعداد رنگ بندی محصول را وارد کنید"
                className="add-products-input"
              />
            </div>
          </div>
          <button className="add-products-btn">افزودن محصول جدید</button>
        </form>
      </div>
    </>
  );
}
