import { Link } from "react-router-dom";
import React from "react";
import "./login.css";
import AvatarIcon from "./avatar.svg";

function Login() {
  return (
    <div class="registration-form">
      <form>
        <div class="form-icon">
          <span>
            <i class="icon icon-user"></i>
          </span>
          <i>
            <img src={AvatarIcon} alt="" />
          </i>
        </div>
        <div className="title">
          <h2 className="title">LOG IN</h2>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control item"
            id="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control item"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-block create-account">
            Log In
          </button>
        </div>
        <div class="signin">
          <p>
            <Link to="/signin">
              <a href="./signin">Sign Up </a>
            </Link>
            |<a href="./forgot"> Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
