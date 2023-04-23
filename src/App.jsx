import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./components/login/Login";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import Signup from "./components/signup/Signup";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  // console.log(showLoginForm);

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  // console.log(decodedToken.given_name);
  // console.log(localStorage.getItem("token"));

  const openLoginForm = () => {
    setShowLoginForm(true);
  };
  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const toggleSignupForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div className="App">
      <Header onOpenLoginClick={openLoginForm} />
      {showLoginForm && (
        <Login
          onOpenLoginClick={openLoginForm}
          onCloseLoginClick={closeLoginForm}
          onSignupClick={toggleSignupForm}
        />
      )}
      {showSignUpForm && (
        <Signup
          onSignupClick={toggleSignupForm}
          onOpenLoginClick={openLoginForm}
        />
      )}
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
