import React, {useState, useEffect } from 'react';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Products from './Components/Products.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './Components/Details.js';
import MyCart from './Components/MyCart.js';

function App() {
  const [photos,setPhotos]=useState([])
  // const [cartItems, setCartItems]= useState([])

  useEffect(()=>{
    getPhotos();
  },[])
  
  const getPhotos=async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    console.log(data)
    setPhotos(data)
  }
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //     console.log('app true', cartItems)
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.q const [cartItems, setCartItems]= useState([])
console.log('photos...',photos)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='Login' element={<Login />}/>
          <Route path='Home' element={<Home photos={photos} setPhotos={setPhotos}/>}></Route>
          <Route path='/Home/:id' element={<Details  photos={photos} setPhotos={setPhotos}/>}></Route>
          <Route path='Products' element={<Products  />}></Route>
          <Route path='*' element={<Login />}></Route>
          <Route path='MyCart' element={<MyCart />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
