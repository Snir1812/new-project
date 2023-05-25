import React from "react";
import "../components/generalCss/GeneralPageCss.css";
import jwtDecode from "jwt-decode";
import NotFoundPage from "./NotFoundPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/form-slice";
import "../components/css/Dashboard.css";
import ProductRow from "../components/ProductRow";
import AddEditProduct from "../components/productCRUD/AddEditProduct";

function Dashboard() {
  const token = localStorage.getItem("token"); // Get the token value from localStorage
  const decodedToken = token ? jwtDecode(token) : null; // Add null check here
  //   const tokenName = decodedToken ? decodedToken.given_name : ""; // Add null check here
  const isAdmin = decodedToken?.role === "Admin";

  const products = useSelector((state) => state.form.products);

  if (!isAdmin) {
    return <NotFoundPage />; // Render the 404 page component when there is an error
  }

  return (
    <div className="container general-page">
      <AddEditProduct />
      <div className="product-table">
        <div className="product-table-header">
          <span className="a-header">ID</span>
          <span className="a-header">Name</span>
          <span className="a-header">Description</span>
          <span className="a-header">Image Name</span>
          <span className="a-header">Rating</span>
          <span className="a-header">Options</span>
        </div>
        {products.map((product) => {
          return <ProductRow product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
