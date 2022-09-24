import React from "react";
import { Link } from "react-router-dom"
import './NavBar.css';


const NavBar = () => {

  return (
    <header>
      <nav>
        <ul className="NavBar">
          <li className="navlist">
            <Link to="/" className="nav_links">Dashboard</Link>
          </li>
          <li className="navlist">
            <Link to="/" className="nav_links">Surprise Me!</Link>
          </li>
          <li className="navlist">
            <Link to="/entries" className="nav_links">Show Entries</Link>
          </li>
          <li className="navlist">
            <Link to="/" className="nav_links">Recipe List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;