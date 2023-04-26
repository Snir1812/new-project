import React from "react";
import "../components/generalCss/GeneralPageCss.css";
import jwtDecode from "jwt-decode";

function Dashboard() {
  const token = localStorage.getItem("token"); // Get the token value from localStorage
  const decodedToken = token ? jwtDecode(token) : null; // Add null check here
  //   const tokenName = decodedToken ? decodedToken.given_name : ""; // Add null check here
  const isAdmin = decodedToken?.Role === "Admin";

  return (
    <div className="container general-page">
      {isAdmin ? <div>Hey Admin</div> : <div>You Are Not Admin !</div>}
    </div>
  );
}

export default Dashboard;
