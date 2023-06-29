import React from "react";
import { Link } from "react-router-dom";
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
          <li className="active">
            <Link>
              <AiOutlineHome className="icon" />
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to="/products">
              <AiOutlineShoppingCart className="icon" />
              محصولات
            </Link>
          </li>
          <li>
            <Link to="/comments">
              <BiCommentDetail className="icon" />
              نظرات
            </Link>
          </li>
          <li>
            <Link to="/users">
              <FiUsers className="icon" />
              کاربران
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <BsBagPlus className="icon" />
              سفارشات
            </Link>
          </li>
          <li>
            <Link to="/discount">
              <TbDiscount2 className="icon" />
              تخفیفات
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
