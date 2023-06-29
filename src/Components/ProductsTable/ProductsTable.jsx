import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function ProductsTable() {
  const [isShowModal, setIsShowModal] = useState(false);

  const deleteModalCancelAction = () => {
    console.log("مدال کنسل شد");
    setIsShowModal(false);
  };

  const deleteModalAcceptAction = () => {
    console.log("مدال تایید شد");
    setIsShowModal(false);
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="img/products/burger.jpg"
                alt="product image"
                className="products-table-img"
              />
            </td>
            <td>ساندویج اماده</td>
            <td>250000 تومان </td>
            <td>20 </td>
            <td>
              <button className="products-table-btn">جزییات </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                حذف{" "}
              </button>
              <button className="products-table-btn">ویرایش </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal
          acceptAction={deleteModalAcceptAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
    </>
  );
}
