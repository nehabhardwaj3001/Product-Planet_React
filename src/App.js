import React, {useState, useEffect } from 'react';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Products from './Components/Products.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './Components/Details.js';
import Pagination from './Components/Pagination.js';

function App() {
  const [photos,setPhotos]=useState([])

  useEffect(()=>{
    getPhotos();
  },[])
  
  const getPhotos=async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    console.log(data)
    setPhotos(data)
  }
 
console.log('photos...',photos)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Home' element={<Home photos={photos} setPhotos={setPhotos}/>}></Route>
          <Route path='/Home/:id' element={<Details  photos={photos} setPhotos={setPhotos}/>}></Route>
          <Route path='Products' element={<Products />}></Route>
          <Route path='Pagination' element={<Pagination photos={photos} setPhotos={setPhotos}/>}></Route>
          <Route path='*' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
