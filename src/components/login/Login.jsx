import React from "react";
import "./Login.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import jwt_decode from "jwt-decode";

function Login(form) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

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
        setToken(data);
        localStorage.setItem("token", data);
        console.log(localStorage.getItem("token"));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="behindTheForm">
      <form className="loginForm" onSubmit={handleSubmit}>
        {/* <button className="closeFormButton" onClick={form.toggleLoginForm}>
          <AiOutlineClose />
        </button> */}
        <p className="headerForm">Login Form</p>
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
        <button className="buttonForm">Submite</button>
      </form>
    </div>
  );
}

export default Login;
