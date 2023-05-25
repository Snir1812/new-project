import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/form-slice";
import NotFoundPage from "./NotFoundPage";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.form.products);
  const isLoading = useSelector((state) => state.form.isLoading);
  const isError = useSelector((state) => state.form.isError);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  if (isLoading) {
    return <div className="container general-page">Loading...</div>;
  }
  if (isError) {
    return <NotFoundPage />; // Render the 404 page component when there is an error
  }

  return (
    <div className="container general-page">
      {products.map((product) => (
        <div key={product.id} product={product} className="product-card">
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default Products;
