import React from 'react';
import { GiHamburguerMenu } from 'react-icons/gi';
import { MdOutilineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

import images from '../../constants/images'
const Navbar = () => (
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
    <div></div>
  </div>
);

export default Navbar;
