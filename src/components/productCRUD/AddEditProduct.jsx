import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  addItem,
  setProductForm,
  toggleProductForm,
  updateItem,
} from "../../features/form-slice";
import { useDispatch } from "react-redux";
import "../css/AddEditProduct.css";
import { GrAdd } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { useFormik } from "formik";
import productSchema from "../../validations/productSchema";

function NewProduct() {
  const productToEdit = useSelector((state) => state.form.productToEdit);
  const showProductForm = useSelector((state) => state.form.showProductForm);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Name: productToEdit ? productToEdit.name : "",
      Description: productToEdit ? productToEdit.description : "",
      ImageName: productToEdit ? productToEdit.imageName : "",
      Rating: productToEdit ? productToEdit.rating : "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      const item = {
        id: productToEdit ? productToEdit.id : 0,
        name: values.Name,
        description: values.Description,
        imageName: values.ImageName,
        rating: values.Rating,
      };

      fetch("https://localhost:7201/api/Products", {
        method: productToEdit ? "put" : "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(item),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          if (productToEdit) {
            return response;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          if (productToEdit) {
            dispatch(updateItem(item));
          } else {
            dispatch(addItem(data));
          }
          dispatch(setProductForm(false));
          window.location.reload(false);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <React.Fragment>
      {showProductForm && (
        <div className="addEditTable">
          <span className="title">
            {productToEdit ? "Edit" : "New"} Product
          </span>
          <form onSubmit={formik.handleSubmit} className="addEditForm">
            <div className="formColumn">
              <label htmlFor="Name" className="formLabel">
                Name:
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                  className="form-control"
                  id="Name"
                />
                {formik.touched.Name && formik.errors.Name && (
                  <div className="error">{formik.errors.Name}</div>
                )}
              </div>
            </div>
            <div className="formColumn">
              <label htmlFor="Description" className="formLabel">
                Description:
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className="form-control"
                  id="Description"
                />
                {formik.touched.Description && formik.errors.Description && (
                  <div className="error">{formik.errors.Description}</div>
                )}
              </div>
            </div>
            <div className="formColumn">
              <label htmlFor="ImageName" className="formLabel">
                ImageName:
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="ImageName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ImageName}
                  className="form-control"
                  id="ImageName"
                />
                {formik.touched.ImageName && formik.errors.ImageName && (
                  <div className="error">{formik.errors.ImageName}</div>
                )}
              </div>
            </div>
            <div className="formColumn">
              <label htmlFor="Rating" className="formLabel">
                Rating:
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  name="Rating"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Rating}
                  className="form-control"
                  id="Rating"
                />
                {formik.touched.Rating && formik.errors.Rating && (
                  <div className="error">{formik.errors.Rating}</div>
                )}
              </div>
            </div>
            <div className="mb-2">
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        className="addCancelButton"
        onClick={() => dispatch(toggleProductForm())}
      >
        {showProductForm ? <ImCancelCircle /> : <GrAdd />}
      </button>
    </React.Fragment>
  );
}

export default NewProduct;
