import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 class="title">Callens Johan</h1>
      <ul className="navbar__list">
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/Curiculum" className="navbar__link">
          Curiculum
        </Link>
        <Link to="/Projects" className="navbar__link">
          Projects
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
