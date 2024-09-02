import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GregGakeBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on GregFakeBook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input
              className="loginInput"
              type="text"
              placeholder="Username"
              />
            <input
              className="loginInput"
              type="email"
              placeholder="Email"
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password Again"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log to your Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
