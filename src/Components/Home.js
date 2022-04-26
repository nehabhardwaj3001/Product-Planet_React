import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { Link } from 'react-router-dom';
import './style/Home.css';
import Products from './Products';

function Home({photos,setPhotos}) {
 const[search, setSearch]=useState('');
 const[lowerlimit,setLowerlimit]=useState(0);
 const[upperlimit,setUpperlimit]=useState(100);

 const getPhotos=async()=>{
  const res=await fetch('https://fakestoreapi.com/products')
  const data=await res.json()
  console.log(data)
  setPhotos(data)
}
useEffect(()=>{
  getPhotos();
},[])

  return (
    <div className='main'>
      <Navbar />
     
<Products photos={photos} search={search} setSearch={setSearch} upperlimit={upperlimit} setUpperlimit={setUpperlimit} lowerlimit={lowerlimit} setLowerlimit={setLowerlimit} getPhotos={getPhotos}/>
  
    </div>


  )
}

export default Home;