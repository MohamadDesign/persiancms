import React from "react";
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
          <li>
            <a href="#">
              <AiOutlineHome className="icon" />
              صفحه اصلی
            </a>
          </li>
          <li className="active">
            <a href="#">
              <AiOutlineShoppingCart className="icon" />
              محصولات
            </a>
          </li>
          <li>
            <a href="#">
              <BiCommentDetail className="icon" />
              نظرات
            </a>
          </li>
          <li>
            <a href="#">
              <FiUsers className="icon" />
              کاربران
            </a>
          </li>
          <li>
            <a href="#">
              <BsBagPlus className="icon" />
              سفارشات
            </a>
          </li>
          <li>
            <a href="#">
              <TbDiscount2 className="icon" />
              تخفیفات
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
