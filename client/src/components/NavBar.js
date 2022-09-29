import React from "react";
import { Link } from "react-router-dom"
import './NavBar.css';


const NavBar = () => {

  return (
      <nav className="NavBar">
        <div>
        <ul>
          <li className="navlist">
            <Link to="/" className="nav_links">Dashboard</Link>
          </li>
          <li className="navlist">
            <Link to="/entries" className="nav_links">My Journal</Link>
          </li>
          <li className="navlist">
            <Link to="/searchrecipes" className="nav_links">New Entry</Link>
          </li>
        </ul>
        </div>
      </nav>
  );
}

export default NavBar;