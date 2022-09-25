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
            <Link to="/" className="nav_links">Random recipe!</Link>
          </li>
          <li className="navlist">
            <Link to="/entries" className="nav_links">Show entries</Link>
          </li>
          <li className="navlist">
            <Link to="/" className="nav_links">Recipe List</Link>
          </li>
          <li className="navlist">
            <Link to="/form" className="nav_links">Form</Link>
          </li>
        </ul>
        </div>
      </nav>
  );
}

export default NavBar;