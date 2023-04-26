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
import Signup from "./components/signup/Signup";
import jwtDecode from "jwt-decode";
import Dashboard from "./pages/Dashboard";

function App() {
  const showLoginForm = useSelector((state) => state.form.showLoginForm);
  const showPasswordRecoveryForm = useSelector(
    (state) => state.form.showPasswordRecoveryForm
  );
  const showSignupForm = useSelector((state) => state.form.showSignupForm);

  // localStorage.removeItem("token");

  // const token = localStorage.getItem("token");
  // if (token) {
  //   const decodedToken = jwtDecode(token);
  //   const currentTime = Date.now() / 1000;
  //   if (decodedToken.exp < currentTime) {
  //     // Token has expired, clear the local storage item
  //     localStorage.removeItem("token");
  //   }
  // }

  return (
    <div className="App">
      <Header />
      {showLoginForm && <Login />}
      {showPasswordRecoveryForm && <PasswordRecovery />}
      {showSignupForm && <Signup />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
