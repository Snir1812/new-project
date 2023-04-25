import React from "react";
import { useState } from "react";
import "./PasswordRecovery.css";
import { useDispatch } from "react-redux";
import {
  openLoginForm,
  closePasswordRecoveryForm,
} from "../../features/form-slice";

function PasswordRecovery() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleOpenLoginClosePass = () => {
    dispatch(openLoginForm());
    dispatch(closePasswordRecoveryForm());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const url = "https://localhost:7149/api/Users";
    // const data = {
    //   userNameOrEmail: usernameOrEmail,
    //   password: password,
    // };

    const url = `
    https://localhost:7149/api/Users?userNameOrEmail=${encodeURIComponent(
      usernameOrEmail
    )}&password=${encodeURIComponent(password)}
    `;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setErrorMessage(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form className="passwordRecoveryForm" onSubmit={handleSubmit}>
      <p className="headerForm">New Password</p>
      <div className="labelDiv">
        <label>Username or email</label>
        <input
          className="textInput"
          required
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
          value={usernameOrEmail}
          onChange={(event) => setUsernameOrEmail(event.target.value)}
        />
      </div>
      <div className="labelDiv">
        <label>Password</label>
        <input
          className="textInput"
          required
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <button className="buttonForm" type="submit">
        Submite
      </button>
      <button onClick={handleOpenLoginClosePass}>Log in</button>
    </form>
  );
}

export default PasswordRecovery;
