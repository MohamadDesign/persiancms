import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiDollar, BiShoppingBag } from "react-icons/bi";

export default function ProductsTable() {
  const [isDeleteShowModal, setIsDeleteShowModal] = useState(false);
  const [isDetailsShowModal, setIsDetailsShowModal] = useState(false);
  const [isEditShowModal, setIsEditShowModal] = useState(false);

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

  const editProducts = (event) => {
    event.preventDefault();
    console.log("محصولات به روز رسانی شد");
    setIsEditShowModal(false);
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
              <button
                className="products-table-btn"
                onClick={() => setIsEditShowModal(true)}
              >
                ویرایش{" "}
              </button>
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
      {isEditShowModal && (
        <EditModal
          onClose={() => setIsEditShowModal(false)}
          onSubmit={editProducts}
        >
          <div className="edit-products-form-group">
            <span>
              <MdDriveFileRenameOutline />
            </span>
            <input
              type="text"
              placeholder="نام جدید محصول را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <BiDollar />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید محصول را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <BiShoppingBag />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید محصول را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
