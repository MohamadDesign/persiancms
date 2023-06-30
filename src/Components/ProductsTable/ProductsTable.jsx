import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";

export default function ProductsTable() {
  const [isDeleteShowModal, setIsDeleteShowModal] = useState(false);
  const [isDetailsShowModal, setIsDetailsShowModal] = useState(false);

  const deleteModalCancelAction = () => {
    console.log("مدال کنسل شد");
    setIsDeleteShowModal(false);
  };

  const deleteModalAcceptAction = () => {
    console.log("مدال تایید شد");
    setIsDeleteShowModal(false);
  };

  const closeDetailsModal = () => {
    console.log("مدال جزییات بسته شد");
    setIsDetailsShowModal(false);
  };

  return (
    <>
      {isDetailsShowModal && (
        <DetailsModal closeDetailsAction={closeDetailsModal} />
      )}
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
              <button
                className="products-table-btn"
                onClick={() => setIsDetailsShowModal(true)}
              >
                جزییات{" "}
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsDeleteShowModal(true)}
              >
                حذف{" "}
              </button>
              <button className="products-table-btn">ویرایش </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isDeleteShowModal && (
        <DeleteModal
          acceptAction={deleteModalAcceptAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
    </>
  );
}
