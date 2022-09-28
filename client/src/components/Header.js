import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  let menu

  if(showMenu){
    menu = 
      
      <div className='navbarlinks'>
        <ul>
          <li className="">
            <Link to="/" className="" onClick={() => setShowMenu(!showMenu)}>Dashboard</Link>
          </li>
          {/* <li className="">
            <Link to="/randomiser" className="" onClick={() => setShowMenu(!showMenu)}>Random recipe!</Link>
          </li> */}
          <li className="">
            <Link to="/entries" className="" onClick={() => setShowMenu(!showMenu)}>Show entries</Link>
          </li>
          <li className="">
            <Link to="/searchrecipes" className="" onClick={() => setShowMenu(!showMenu)}>Search Recipes</Link>
          </li>
          {/* <li className="">
            <Link to="/form" className="" onClick={() => setShowMenu(!showMenu)}>Form</Link>
          </li> */}
        </ul>
      </div>
      
  }

  return (
  
    <header>
    {menu}
      <a href='#' className="toggle-button" onClick={() => setShowMenu(!showMenu)} >
          {/* <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span> */}
          <i className="fa-solid fa-burger fa-2xl bar"></i>
      </a>
      <h1>Holy Shiitake!</h1>
      <p className='header'>a mindful eating app</p>
      <div class="custom-shape-divider-bottom-1664367773">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    </header>
    
  )
}

export default Header