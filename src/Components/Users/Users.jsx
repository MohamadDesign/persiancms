import React, { useEffect, useState } from "react";
import "./Users.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import DetailModal from "../DetailsModal/DetailsModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [userNewName, setUserNewName] = useState("");
  const [userNewLastName, setUserNewLastName] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);

  const getUsers = () => {
    fetch(`http://localhost:8000/api/users`)
      .then((res) => res.json())
      .then((res) => {
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

  const EditUser = (event) => {
    event.preventDefault();

    const newInfoUser = {
      firsname: userNewName,
      lastname: userNewLastName,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };
    fetch(`http://localhost:8000/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInfoUser),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsShowEditModal(false);
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
                      <button
                        onClick={() => {
                          setIsShowDetailModal(true);
                          setUserNewCity(user.city);
                          setUserNewAddress(user.address);
                          setUserNewScore(user.score);
                          setUserNewBuy(user.buy);
                        }}
                      >
                        جزییات
                      </button>
                      <button
                        onClick={() => {
                          setUserId(user.id);
                          setIsShowEditModal(true);
                          setUserNewName(user.firsname);
                          setUserNewLastName(user.lastname);
                          setUserNewUsername(user.username);
                          setUserNewPassword(user.password);
                          setUserNewPhone(user.phone);
                          setUserNewEmail(user.email);
                          setUserNewAddress(user.address);
                          setUserNewCity(user.city);
                          setUserNewScore(user.score);
                          setUserNewBuy(user.buy);
                        }}
                      >
                        ویرایش
                      </button>
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

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={EditUser}
        >
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="نام جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewName}
              onChange={(event) => setUserNewName(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="نام خانوادگی جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewLastName}
              onChange={(event) => setUserNewLastName(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="نام کاربری جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewUsername}
              onChange={(event) => setUserNewUsername(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="رمز عبور جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewPassword}
              onChange={(event) => setUserNewPassword(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="شماره تماس جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewPhone}
              onChange={(event) => setUserNewPhone(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="ایمیل جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewEmail}
              onChange={(event) => setUserNewEmail(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="آدرس جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewAddress}
              onChange={(event) => setUserNewAddress(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="شهر جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewCity}
              onChange={(event) => setUserNewCity(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="خرید جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewBuy}
              onChange={(event) => setUserNewBuy(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <input
              type="text"
              placeholder="امتیاز جدید کاربر را وارد کنید"
              className="edit-user-info-input"
              value={userNewScore}
              onChange={(event) => setUserNewScore(event.target.value)}
            />
          </div>
        </EditModal>
      )}

      {isShowDetailModal && (
        <DetailModal closeDetailsAction={() => setIsShowDetailModal(false)}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شهر</th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>مبلغ خریداری شده</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userNewCity}</td>
                <td>{userNewAddress}</td>
                <td>{userNewScore}</td>
                <td>{userNewBuy}</td>
              </tr>
            </tbody>
          </table>
        </DetailModal>
      )}
    </>
  );
}
