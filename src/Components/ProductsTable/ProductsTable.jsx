import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiDollar, BiShoppingBag } from "react-icons/bi";

export default function ProductsTable({ allProducts, getAllProducts }) {
  const [isDeleteShowModal, setIsDeleteShowModal] = useState(false);
  const [isDetailsShowModal, setIsDetailsShowModal] = useState(false);
  const [isEditShowModal, setIsEditShowModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [mainProductInfo, setMainProductInfo] = useState({});
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColor, setProductNewColor] = useState("");

  const deleteModalCancelAction = () => {
    setIsDeleteShowModal(false);
  };

  const closeDetailsModal = () => {
    setIsDetailsShowModal(false);
  };

  const editProducts = (event) => {
    event.preventDefault();
    const productsNewInfo = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColor,
    };
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productsNewInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsEditShowModal(false);
        getAllProducts();
      });
  };

  const deleteModalAcceptAction = () => {
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsDeleteShowModal(false);
        getAllProducts();
      });
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
                    onClick={() => {
                      setIsDetailsShowModal(true);
                      setMainProductInfo(product);
                    }}
                  >
                    جزییات{" "}
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsDeleteShowModal(true);
                      setProductId(product.id);
                    }}
                  >
                    حذف{" "}
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsEditShowModal(true);
                      setProductId(product.id);
                      setMainProductInfo(product);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewCount(product.count);
                      setProductNewImg(product.img);
                      setProductNewPopularity(product.popularity);
                      setProductNewSale(product.sale);
                      setProductNewColor(product.colors);
                    }}
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
        <DetailsModal closeDetailsAction={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductInfo.popularity}</td>
                <td>{mainProductInfo.sale}</td>
                <td>{mainProductInfo.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isDeleteShowModal && (
        <DeleteModal
          title="آیا از حذف اطمینان دارید ؟"
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
              value={productNewTitle}
              onChange={(event) => setProductNewTitle(event.target.value)}
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
              value={productNewPrice}
              onChange={(event) => setProductNewPrice(event.target.value)}
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
              value={productNewCount}
              onChange={(event) => setProductNewCount(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <BiShoppingBag />
            </span>
            <input
              type="text"
              placeholder="آدرس کاور جدید محصول را وارد کنید"
              className="edit-product-input"
              value={productNewImg}
              onChange={(event) => setProductNewImg(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <BiShoppingBag />
            </span>
            <input
              type="text"
              placeholder="میزان محبوبیت جدید محصول را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
              onChange={(event) => setProductNewPopularity(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <BiShoppingBag />
            </span>
            <input
              type="text"
              placeholder="میزان فروش جدید محصول را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
              onChange={(event) => setProductNewSale(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <BiShoppingBag />
            </span>
            <input
              type="text"
              placeholder="تعداد رنگ بندی جدید محصول را وارد کنید"
              className="edit-product-input"
              value={productNewColor}
              onChange={(event) => setProductNewColor(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
