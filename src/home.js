import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarLogo from "./joystick.svg";
import SearchIcon from "./search.svg";
import CartIcon from "./cart.svg";
import BellIcon from "./bell.svg";
import KeyIcon from "./kunci.svg";

function Home() {
  return (
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
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        transitionTime={500}
        interval={4000}
      >
        <div>
          <img alt="banner1" className="carousel-img" src="/banner1.png" />
        </div>
        <div>
          <img alt="banner2" className="carousel-img" src="/banner2.png" />
        </div>
        <div>
          <img alt="banner3" className="carousel-img" src="/banner3.png" />
        </div>
      </Carousel>
      <Link to="/shopbase">
        <button className="btn">
          <i>
            <img className="buildnowicon" src={KeyIcon} alt="" />
          </i>{" "}
          <span>Built Now</span>
        </button>
      </Link>
      <div className="menu-flex">
        <div className="">
          <h2 className="title-cat">Top Categories</h2>
          <div className="leftside">
            <div className="item">
              <img src="/motherboard.png" alt="" />
              <p>Motherboad</p>
            </div>
            <div className="item">
              <img src="/mouse.png" alt="" />
              <p>Mouse</p>
            </div>
            <div className="item">
              <img src="/cpu.png" alt="" />
              <p>CPU</p>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="title-cat">Most Viewed</h2>
          <div className="rightside">
            <div className="item">
              <img src="/mv_cpu.png" alt="" />
              <p>Ryzen 3 3200G</p>
            </div>
            <div className="item">
              <img src="/mv_mouse.png" alt="" />
              <p>Logitech Pro Wireless</p>
            </div>
            <div className="item">
              <img src="/mv_gpu.png" alt="" />
              <p>RTX 3080</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
