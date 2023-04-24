import React from "react";
import "./Header.css";
// import Login from "../login/Login";
// import { useState } from "react";
import { openLoginForm } from "../../features/form-slice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const handleOpenLoginForm = () => {
    dispatch(openLoginForm());
  };
  return (
    <div className="header">
      <div className="header-div">
        <button className="buttonLoginForm" onClick={handleOpenLoginForm}>
          Login
        </button>
        <a className="Logo" href=" ">
          Logo
        </a>
      </div>
      <div className="nav-div">
        <ul className="nav-div-links">
          <a className="a" href=" ">
            צור קשר
          </a>
          <a className="a" href=" ">
            מאמרים
          </a>
          <a className="a" href="/Products">
            מוצרים
          </a>
          <a className="a" href="/About">
            אודות
          </a>
          <a className="a" href="/">
            עמוד הבית
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
