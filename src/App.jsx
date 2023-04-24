import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./components/login/Login";
import PasswordRecovery from "./components/passwordRecovery/PasswordRecovery";
import { useSelector } from "react-redux";

function App() {
  const showLoginForm = useSelector((state) => state.form.showLoginForm);
  const showPasswordRecoveryForm = useSelector(
    (state) => state.form.showPasswordRecoveryForm
  );

  // const token = localStorage.getItem("token");
  // const decodedToken = jwtDecode(token);
  // console.log(decodedToken.given_name);
  // console.log(localStorage.getItem("token"));

  return (
    <div className="App">
      <Header />
      {showLoginForm && <Login />}
      {showPasswordRecoveryForm && <PasswordRecovery />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
