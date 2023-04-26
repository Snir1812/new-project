import React from "react";
import "../generalCss/FormsCss.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  closeLoginForm,
  openPasswordRecoveryForm,
  openSignupForm,
} from "../../features/form-slice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleCloseLoginForm = () => {
    dispatch(closeLoginForm());
  };
  const handleOpenPassCloseLogin = () => {
    dispatch(closeLoginForm());
    dispatch(openPasswordRecoveryForm());
  };
  const handleOpenSignupCloseLogin = () => {
    dispatch(closeLoginForm());
    dispatch(openSignupForm());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "https://localhost:7149/api/Authentication";
    const data = {
      userName: username,
      password: password,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "User not found") {
          setErrorMessage("User not found");
        } else if (data === "UserName or Password wrong") {
          setErrorMessage("UserName or Password wrong");
        } else {
          setErrorMessage("User Connected");
          setToken(data);
          localStorage.setItem("token", data);
          window.location.reload(false);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button className="closeFormButton" onClick={handleCloseLoginForm}>
        <AiOutlineClose />
      </button>
      <p className="headerForm">Log In</p>
      <div className="labelDiv">
        <label htmlFor="username">Username</label>
        <input
          className="textInput"
          required
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="labelDiv">
        <label htmlFor="password">Password</label>
        <input
          className="textInput"
          required
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <button className="buttonForm">Submite</button>
      <div className="buttonsDiv">
        <button
          onClick={handleOpenPassCloseLogin}
          className="navigationButtons"
        >
          I forgot password
        </button>
        <button
          onClick={handleOpenSignupCloseLogin}
          className="navigationButtons"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Login;
