import React from "react";
import "../components/pagesCss/Home.css";
import "../components/pagesCss/GeneralPageCss.css";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.data.data);

  return (
    <div className="container general-page">
      {/* {data.map((m) => (
        <div>
          <p>{m.productName}</p>
          <p>{m.productPrice}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
