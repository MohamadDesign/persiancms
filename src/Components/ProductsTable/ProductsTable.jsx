import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiDollar, BiShoppingBag } from "react-icons/bi";

export default function ProductsTable() {
  const [isDeleteShowModal, setIsDeleteShowModal] = useState(false);
  const [isDetailsShowModal, setIsDetailsShowModal] = useState(false);
  const [isEditShowModal, setIsEditShowModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  }, []);

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
      {allProducts.length ? (
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
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt="product image"
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان </td>
                <td>{product.count} </td>
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
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هییچ محصولی یافت نشد" />
      )}

      {isDetailsShowModal && (
        <DetailsModal closeDetailsAction={closeDetailsModal} />
      )}
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
