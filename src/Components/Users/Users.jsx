import React, { useEffect, useState } from "react";
import "./Users.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const getUsers = () => {
    fetch(`http://localhost:8000/api/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  };

  const DeleteUser = () => {
    fetch(`http://localhost:8000/api/users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("کاربر حذف شد", res);
        setIsShowDeleteModal(false);
        getUsers();
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="cms-main">
        {users.length ? (
          <>
            <h1 className="cms-title">لیست کاربران</h1>
            <table className="cms-table">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>نام خانوادگی</th>
                  <th>نام کاربری</th>
                  <th>رمز عبور</th>
                  <th>شماره تماس</th>
                  <th>ایمیل</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firsname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setUserId(user.id);
                        }}
                      >
                        حذف
                      </button>
                      <button>جزییات</button>
                      <button>ویرایش</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <ErrorBox msg="هیچ کاربری یافت نشد" />
        )}
      </div>

      {isShowDeleteModal && (
        <DeleteModal
          acceptAction={DeleteUser}
          cancelAction={() => setIsShowDeleteModal(false)}
          title="آیا از حذف کاربر مطمئن هستید ؟"
        ></DeleteModal>
      )}
    </>
  );
}
