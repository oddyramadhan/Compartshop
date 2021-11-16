import { Link } from "react-router-dom";
import React from "react";
import "./signin.css";
import AvatarIcon from "./avatar.svg";

function Signin() {
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
          <h2 className="title">SIGN UP</h2>
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
            type="text"
            class="form-control item"
            id="email"
            placeholder="Email"
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
        <div class="tnc">
          <p>
            By register, you agree to shop's Privacy Policy and Terms of Use.
          </p>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-block create-account">
            Create Account
          </button>
        </div>
        <div class="signin">
          <p>
            Already have?
            <Link to="/login">
              <a href="./login"> Log In</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signin;
