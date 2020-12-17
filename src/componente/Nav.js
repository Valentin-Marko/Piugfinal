import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Logo />
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/PhotoGalery">
          <li>PhotoGalery</li>
        </Link>
        <Link style={navStyle} to="/Resorts">
          <li>Resorts prices</li>
        </Link>
        <Link style={navStyle} to="/Contact">
          <li>Contact</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
