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
  const isAdmin = decodedToken?.role === "Admin";
  // console.log(isAdmin);

  return (
    <div className="header">
      <div className="header-div">
        {/* <button className="buttonLoginForm" onClick={handleOpenLoginForm}>
          Login
        </button> */}
        {decodedToken ? (
          <div className="loginDiv">
            <button className="formButtons">Hey {tokenName}</button>
            <button className="logoutButton" onClick={handleLogout}>
              Log out
            </button>
          </div>
        ) : (
          <div className="loginDiv">
            <button className="formButtons" onClick={handleOpenLoginForm}>
              Login
            </button>
          </div>
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
          {isAdmin && (
            <a className="a" style={{ color: "red" }} href="/Dashboard">
              Dashboard
            </a>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
