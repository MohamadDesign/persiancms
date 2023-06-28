import React from "react";
import "./Header.css";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessAltHigh } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="img/user.jpg" alt="user profile" />
        <div>
          <h1>محمد ابراهیمی</h1>
          <h3>برنامه نویس فرانت</h3>
        </div>
      </div>
      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جست و جو کنید..." />
          <button>جست وجو</button>
        </div>
        <button className="header-left-icon">
          <AiOutlineBell />
        </button>
        <button className="header-left-icon">
          <BsBrightnessAltHigh />
        </button>
      </div>
    </div>
  );
}
