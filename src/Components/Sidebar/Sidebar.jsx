import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagPlus } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

        <ul className="sidebar-links">
          <NavLink to="/" className="active">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </NavLink>
          <NavLink to="/products">
            <AiOutlineShoppingCart className="icon" />
            محصولات
          </NavLink>
          <NavLink to="/comments">
            <BiCommentDetail className="icon" />
            نظرات
          </NavLink>
          <NavLink to="/users">
            <FiUsers className="icon" />
            کاربران
          </NavLink>
          <NavLink to="/orders">
            <BsBagPlus className="icon" />
            سفارشات
          </NavLink>
          <NavLink to="/discount">
            <TbDiscount2 className="icon" />
            تخفیفات
          </NavLink>
        </ul>
      </div>
    </>
  );
}
