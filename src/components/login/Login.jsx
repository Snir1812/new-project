import React from "react";
import "./Login.css";
import { AiOutlineClose } from "react-icons/ai";

function Login(form) {
  return (
    <div className="behindTheForm">
      <form className="loginForm">
        <button className="closeFormButton" onClick={form.toggleLoginForm}>
          <AiOutlineClose />
        </button>
        <p className="headerForm">Login Form</p>
        <div className="labelDiv">
          <label>Username</label>
          <input className="textInput" type="text" name="uname" required />
        </div>
        <div className="labelDiv">
          <label>Password</label>
          <input className="textInput" type="password" name="pass" required />
        </div>
        <button className="buttonForm" onClick={form.toggleLoginForm}>
          Submite
        </button>
      </form>
    </div>
  );
}

export default Login;
