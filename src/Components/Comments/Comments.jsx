import React, { useEffect, useState } from "react";
import "./Comments.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const closeDetailModal = () => {
    setIsShowDetailModal(false);
  };
  const DeleteModalAcceptAction = () => {
    console.log("نظر حذف شد");
    setIsShowDeleteModal(false);
    fetch(`http://localhost:8000/api/comments/${commentId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getComments();
      });
  };
  const DeleteModalCancelAction = () => {
    console.log("از حذف نظر منصرف شدید");
    setIsShowDeleteModal(false);
  };

  const getComments = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((res) => {
        setAllComments(res);
      });
  };

  const EditComment = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: commentBody }),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsShowEditModal(false);
        getComments();
      });
  };

  useEffect(() => {
    getComments();
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
                    <button
                      onClick={() => {
                        setIsShowDetailModal(true);
                        setCommentBody(comments.body);
                      }}
                    >
                      مشاهده کامل نظر
                    </button>
                  </td>
                  <td>{comments.date}</td>
                  <td>{comments.hour}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setCommentId(comments.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      onClick={() => {
                        setIsShowEditModal(true);
                        setCommentId(comments.id);
                        setCommentBody(comments.body);
                      }}
                    >
                      ویرایش
                    </button>
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

        {isShowDetailModal && (
          <DetailsModal
            closeDetailsAction={closeDetailModal}
            onHide={closeDetailModal}
          >
            <p className="text-modal">{commentBody}</p>
            <button
              onClick={() => {
                setIsShowDetailModal(false);
              }}
              className="text-modal-close-btn"
            >
              بستن
            </button>
          </DetailsModal>
        )}

        {isShowDeleteModal && (
          <DeleteModal
            acceptAction={DeleteModalAcceptAction}
            cancelAction={DeleteModalCancelAction}
          >
            <p className="text-modal">از حذف نظر مطمئن هستید ؟ </p>
          </DeleteModal>
        )}

        {isShowEditModal && (
          <EditModal
            onSubmit={EditComment}
            onClose={() => setIsShowEditModal(false)}
          >
            <div className="edit-products-form-group">
              <input
                type="text"
                placeholder="نظر جدید محصول را وارد کنید"
                className="edit-product-input"
                value={commentBody}
                onChange={(event) => setCommentBody(event.target.value)}
              />
            </div>
          </EditModal>
        )}
      </div>
    </>
  );
}
