import React from 'react';
import {  Link } from "react-router-dom";
import logo from '../image/logo.jpeg';
import "./style/Navbar.css";
import myCart from './MyCart';


const Navbar= () =>{
  return (
    <nav className="navigation">
    <a href="/" className="brand-name">
    <img className='logo-navbar' src={logo} alt='logo' />
    </a>

  <div  className="navigation-menu">
    <ul>
    <li>
      <Link to="/Home">Home</Link>
    </li>
    <li>
      <Link to="/myCart">My Cart</Link>
    </li>
    <li>
      <Link to="/Login">Logout</Link>
    </li>
  
      </ul>
  </div>

  </nav>
  );
}

export default Navbar;