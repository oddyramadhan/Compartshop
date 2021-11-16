import { Route, Link } from "react-router-dom";
import "./shopbase.css";
import Login from "./login";
import NavbarLogo from "./joystick.svg";
import SearchIcon from "./search.svg";
import CartIcon from "./cart.svg";
import BellIcon from "./bell.svg";

function ShopBase() {
  return (
    <header>
      <div className="home">
        <nav className="navbar">
          <img className="navbar-logo" src={NavbarLogo} alt="" />
          <div className="navbar-input">
            <input type="text" placeholder="Search Computer" />
            <i>
              <img src={SearchIcon} alt="" />
            </i>
          </div>
          <div className="navbar-button">
            <div>
              <i>
                <img src={CartIcon} alt="" />
              </i>
            </div>
            <div>
              <i>
                <img src={BellIcon} alt="" />
              </i>
            </div>
            <Link to="/login">
              <button>Login</button>{" "}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default ShopBase;
