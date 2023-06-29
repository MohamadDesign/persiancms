import React from "react";
import "./ProductsTable.css";

export default function ProductsTable() {
  return (
    <>
      <table className="products-table">
        <tr className="products-table-heading-tr">
          <th>عکس</th>
          <th>اسم</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th>عملیات</th>
        </tr>

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
            <button className="products-table-btn">حذف </button>
            <button className="products-table-btn">ویرایش </button>
          </td>
        </tr>
      </table>
    </>
  );
}
