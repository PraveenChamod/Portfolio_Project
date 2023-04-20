import React, { useState } from "react";
import "./Home.css";
import "../../App.css";
import logo from "../../img/MinePCM.png";
import { Link } from "react-scroll";
export default function Home() {
  //fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home_bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo" data-aos="fade-right" data-aos-duration="1500">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30" data-aos="fade-left" data-aos-duration="1500">
            <ul className="navbar d__flex">
              <li className="nav__items mx__15">
                <a href="#Home">
                  <Link to="Home" spy={true} smooth={true}>
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav__items mx__15">
                <a href="#About">
                  <Link to="About" spy={true} smooth={true}>
                    About
                  </Link>
                </a>
              </li>
              <li className="nav__items mx__15">
                <a href="#Projects">
                  <Link to="Projects" spy={true} smooth={true}>
                    Projects
                  </Link>
                </a>
              </li>
              <li className="nav__items mx__15">
                <a href="#Contact">
                  <Link to="Contact" spy={true} smooth={true}>
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">
                    <Link to="Home" spy={true} smooth={true}>
                      Home
                    </Link>
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">
                    <Link to="About" spy={true} smooth={true}>
                      About
                    </Link>
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#Projects">
                    <Link to="Projects" spy={true} smooth={true}>
                      Projects
                    </Link>
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">
                    <Link to="Contact" spy={true} smooth={true}>
                      Contact
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/*Home Content*/}
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORKSPACE</h1>
              <h2 className="home__text pz__10">Hi! I'm Praveen</h2>
              <h3 className="home__text sweet__green pz__10">Undergraduate</h3>
              <h4 className="home__text pz__10">Computer Science (BCS)</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
