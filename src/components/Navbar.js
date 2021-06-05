import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './atlakamani2.png';

function Navbar() {
  const [click, setClick] = useState(false);
  //set a sate on the navbar
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  //Change the background when you scroll on the y-axis
  const changeBackground = () => {
    if(window.scrollY >= 80 && window.scrollY <= 1600){
      setNavbar(true);
    }    
    else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
 
  return (
    <>
      <nav className={navbar ? 'navbar fade' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img alt="atlakamani" className="atlakamani-logo" src={logo} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rooms
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Packages
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Amenities
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  }

export default Navbar;
