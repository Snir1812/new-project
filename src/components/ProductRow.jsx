import React from "react";
import { useContext, useRef } from "react";
// import { Context } from "../Context";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProductToEdit } from "../features/form-slice";
import { removeItem } from "../features/form-slice";

function ProductRow({ product }) {
  // const state = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setProductToEdit(product));
    // console.log("first");
  };

  const handleDelete = (e) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }

    fetch(`https://localhost:7201/api/Products/${product.id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response;
      })
      .then((data) => {
        dispatch(removeItem(product));
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="product-item" key={product.id}>
      <span className="a-product">{product.id}</span>
      <span className="a-product">{product.name}</span>
      <span className="a-product">{product.description}</span>
      <span className="a-product">{product.imageName}</span>
      <span className="a-product">{product.rating}</span>
      <span className="a-product">
        <button className="btn btn-warning" onClick={handleEdit}>
          <AiOutlineEdit />
        </button>
        <button className="btn btn-warning" onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </span>
    </div>
  );
}

export default ProductRow;
