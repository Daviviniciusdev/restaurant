import React, { useState } from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return(
    <div className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">Pages</a></li>
      <li className='p__opensans'><a href="#menu">Contact Us</a></li>
      <li className='p__opensans'><a href="#awars">Blog</a></li>
      <li className='p__opensans'><a href="#contact">Landing</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Login in / Registration</a>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu  color='#fff' fontSize={27} onClick={ () => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className="app__navbar-smallscren_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu  fontSize={27}  className='overlay__close' onClick={ ()=> setToggleMenu(false)}/>
        <ul className='app__navbar-smallscren-links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">Pages</a></li>
          <li className='p__opensans'><a href="#menu">Contact Us</a></li>
          <li className='p__opensans'><a href="#awars">Blog</a></li>
          <li className='p__opensans'><a href="#contact">Landing</a></li>
        </ul>
      </div>
      )}
    </div>
  </div>
  )
 
};

export default Navbar;
