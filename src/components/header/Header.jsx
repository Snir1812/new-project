import React from "react";
import "./Header.css";
// import Login from "../login/Login";
// import { useState } from "react";
import { openLoginForm } from "../../features/form-slice";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

function Header() {
  const dispatch = useDispatch();

  const handleOpenLoginForm = () => {
    dispatch(openLoginForm());
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all items from local storage
    window.location.reload(false);

    // Perform any other logout actions here, such as redirecting to a login page
  };

  const token = localStorage.getItem("token"); // Get the token value from localStorage
  const decodedToken = token ? jwtDecode(token) : null; // Add null check here
  const tokenName = decodedToken ? decodedToken.given_name : ""; // Add null check here

  return (
    <div className="header">
      <div className="header-div">
        {/* <button className="buttonLoginForm" onClick={handleOpenLoginForm}>
          Login
        </button> */}
        {token ? (
          <div>
            <button className="buttonLoginForm">Hey {tokenName}</button>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <button className="buttonLoginForm" onClick={handleOpenLoginForm}>
            Login
          </button>
        )}
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
