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
            <Link to="/" className="">Dashboard</Link>
          </li>
          <li className="">
            <Link to="/" className="">Random recipe!</Link>
          </li>
          <li className="">
            <Link to="/entries" className="">Show entries</Link>
          </li>
          <li className="">
            <Link to="/" className="">Recipe List</Link>
          </li>
        </ul>
      </div>
      
  }

  return (
    <>
    {menu}
    <header>
      <a href='#' className="toggle-button" onClick={() => setShowMenu(!showMenu)} >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </a>
      <h1>Holy Shiitake!</h1>
      <p className='header'>a mindful eating app...</p>
    </header>
    </>
  )
}

export default Header