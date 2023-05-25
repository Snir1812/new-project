import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./components/login/Login";
import PasswordRecovery from "./components/passwordRecovery/PasswordRecovery";
import Signup from "./components/signup/Signup";
import jwtDecode from "jwt-decode";
import Dashboard from "./pages/Dashboard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/form-slice";

function App() {
  const showLoginForm = useSelector((state) => state.form.showLoginForm);
  const showPasswordRecoveryForm = useSelector(
    (state) => state.form.showPasswordRecoveryForm
  );
  const showSignupForm = useSelector((state) => state.form.showSignupForm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.form.isLoading);

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
