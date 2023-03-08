import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-div">אתר לדוגמא</div>
      <div className="nav-div">
        <ul className="nav-div-links">
          <a className="a" href=" ">
            עמוד הבית
          </a>
          <a className="a" href=" ">
            אודות
          </a>
          <a className="a" href=" ">
            מוצרים
          </a>
          <a className="a" href=" ">
            מאמרים
          </a>
          <a className="a" href=" ">
            צור קשר
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
