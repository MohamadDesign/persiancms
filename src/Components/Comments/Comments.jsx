import React, { useEffect, useState } from "react";
import "./Comments.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((res) => {
        setAllComments(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      <div className="cms-main">
        {allComments.length ? (
          <table className="cms-table">
            <thead>
              <tr>
                <th>اسم کاربر</th>
                <th>محصول</th>
                <th>نظر کاربر</th>
                <th>تاریخ</th>
                <th>ساعت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {allComments.map((comments) => (
                <tr key={comments.id}>
                  <td>{comments.userID}</td>
                  <td>{comments.productID}</td>
                  <td>
                    <button>مشاهده کامل نظر</button>
                  </td>
                  <td>{comments.date}</td>
                  <td>{comments.hour}</td>
                  <td>
                    <button>حذف</button>
                    <button>ویرایش</button>
                    <button>پاسخ</button>
                    <button>تایید</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ErrorBox msg="هیچ نظری یافت نشد" />
        )}
      </div>
    </>
  );
}
