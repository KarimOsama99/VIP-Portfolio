import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiDiamondsFour } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuSunMoon } from "react-icons/lu";
import { PiMoonStarsBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if(selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="nav">
      <ul className="list-unstyled">
        <li>
          <NavLink to="/" className="home">
            <HiOutlineHome /> <p className="homep">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="about">
            <HiOutlineUserCircle /> <p className="aboutp">About</p>
          </NavLink>
        </li>
        <li className="darkToggler">
          <a>
            <input
              className="checkbox"
              type="checkbox"
              id="darkmode-toggle"
              onChange={toggleTheme}
              defaultChecked={selectedTheme === "dark"}
            />
            <label className="checkbox-label" for="darkmode-toggle">
              <LuSunMoon className="sun" />
              <PiMoonStarsBold className="moon" />
              <span class="ball"></span>
            </label>
          </a>
        </li>
        <li>
          <NavLink to="/portfolio" className="portfolio">
            <PiDiamondsFour /> <p className="portfoliop">Work</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="contact">
            <HiOutlineEnvelope /> <p className="contactp">Contact</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
