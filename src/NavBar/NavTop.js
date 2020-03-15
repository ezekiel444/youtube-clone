import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./image/logo.png";
import "./NavTop.css";

export default function NavTop() {
  return (
    <div className="navflex">
      <img src={Logo} alt="" />
      <nav>
        <li>Home</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Github Repository</li>
        <li>About Me</li>
      </nav>
    </div>
  );
}
