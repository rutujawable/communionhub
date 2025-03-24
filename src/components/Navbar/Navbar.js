import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>CommunionHub</h1>
      </div>
      <div>
        <input type="text" placeholder="search" className="searchbox"
        ></input>
        <button className="btn">search</button>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/events" className="nav-item">Events</Link>
      </nav>
    </header>
  );
};

export default Navbar;




