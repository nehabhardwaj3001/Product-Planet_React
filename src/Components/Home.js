import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { Link } from 'react-router-dom';
import './style/Home.css';
import Products from './Products';

function Home({photos, search, setCartItems, cartItems}) {


  return (
    <div className='main'>
      <Navbar />
     
  <Products photos={photos} search={search} setCartItems={setCartItems}  cartItems={cartItems}/>
    </div>


  )
}

export default Home;