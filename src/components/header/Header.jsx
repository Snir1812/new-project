import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-div">Dog Accessories Shop</div>
      <div className="nav-div">
        <span>חטיפים</span>
        <span>צעצועים</span>
        <span>מזון</span>
        <span>רצועות</span>
        <span>קולרים</span>
        <span>עצמות</span>
      </div>
    </div>
  );
}

export default Header;
