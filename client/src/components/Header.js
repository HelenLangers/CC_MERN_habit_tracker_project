import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((current) => !current);

  return (
    <header>
      <div
        className={clsx("backdrop", { hide: !showMenu })}
        onClick={toggleMenu}
      />
      <div className={clsx("navbarlinks", { hide: !showMenu })}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/entries" onClick={toggleMenu}>
              Show entries
            </Link>
          </li>
          <li>
            <Link to="/searchrecipes" onClick={toggleMenu}>
              Search Recipes
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="toggle-button fa-solid fa-burger fa-2xl"
        onClick={toggleMenu}
      />
      <a href="/"><h1>Holy Shiitake!</h1></a>
      <p>a mindful cooking app</p>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
