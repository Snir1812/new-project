import React, { useState } from "react";
import { closeSignupForm, openLoginForm } from "../../features/form-slice";
import { useDispatch } from "react-redux";
import "./Signup.css";

function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleOpenLoginCloseSignup = () => {
    dispatch(closeSignupForm());
    dispatch(openLoginForm());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "https://localhost:7149/api/Users";

    const newUser = {
      userName: userName,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
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
    <form onSubmit={handleSubmit} className="signupForm">
      <div className="labelDiv">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="textInput"
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="labelDiv">
        <label htmlFor="username">Password</label>
        <input
          type="password"
          className="textInput"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="labelDiv">
        <label htmlFor="username">Email</label>
        <input
          type="text"
          className="textInput"
          required
          value={password}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="labelDiv">
        <label htmlFor="username">First Name</label>
        <input
          type="text"
          className="textInput"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="labelDiv">
        <label htmlFor="username">Last Name</label>
        <input
          type="text"
          className="textInput"
          required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <button className="buttonForm" type="submit">
        Sign Up
      </button>
      <button onClick={handleOpenLoginCloseSignup}>Log in</button>
    </form>
  );
}

export default Signup;
