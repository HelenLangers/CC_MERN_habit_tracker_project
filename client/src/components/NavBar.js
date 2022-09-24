import React from "react";
import { Link } from "react-router-dom"


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Today's Home-Cooked Meal</Link>
      </li>
      <li>
        <Link to="/">Surprise Me!</Link>
      </li>
      <li>
        <Link to="/">Show Entries</Link>
      </li>
      <li>
        <Link to="/">Recipe List</Link>
      </li>
    </ul>
  );
}

export default NavBar;