import React, {useState, useEffect } from 'react';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Products from './Components/Products';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './Components/Details.js';
import MyCart from './Components/MyCart.js';

function App() {
  const [photos,setPhotos]=useState([]);
  const [cartItems, setCartItems]= useState([]);
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
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home photos={photos} 
                                            search={search} 
                                           setCartItems={setCartItems} 
                                           cartItems={cartItems}/>}/>
          <Route path='/home/:id' element={<Details  photos={photos} 
                                                     setPhotos={setPhotos}
                                                     setCartItems={setCartItems}
                                                     cartItems={cartItems}/>}/>
          <Route path='/products' element={<Products photos={photos} 
                                                    search={search} 
                                                    setSearch={setSearch} 
                                                    upperlimit={upperlimit} 
                                                    setUpperlimit={setUpperlimit} 
                                                    lowerlimit={lowerlimit} 
                                                    setLowerlimit={setLowerlimit} 
                                                    getPhotos={getPhotos} 
                                                    setCartItems={setCartItems} 
                                                    cartItems={cartItems}
                                                    />}/>
          <Route path='*' element={<Login />}/>
          <Route path='/mycart' element={<MyCart cartItems={cartItems}/>}/>
        {/* {render} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
