import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  './style/Navbar.css';
import Navbar from './Navbar.js'

function Details({photos,setPhotos, setCartItems, cartItems}) {
  const { id } = useParams();

  const getPhotos=async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    console.log(data)
    setPhotos(data)
  }  
  useEffect(()=>{
    getPhotos();
  },[])
console.log('hey here im ....',photos)
  return (
    <div className='details-div'>
     <Navbar />
     <div className='user-details'>
     {
      photos.map((item,index)=>{
        if(id==item.id){
            return (
                  <div className="col" key={index}>
                    <h2>Details: </h2>
                      <img className='image' src={item.image} width="200px" height="200px"  />
                    <p><span>Title: </span> {item.title}</p>
                    <p><span>Price: </span> {item.price}</p>
                    <p><span>Description: </span> {item.description}</p>
                    <p><span>Category: </span> {item.category}</p>
                    <button onClick={() => {setCartItems
                      // (oldArray => [...oldArray,item]) 
                     (() => {
                       if(!cartItems.includes(item)){
                        return [...cartItems, item]
                       }return[...cartItems]
                     })
                       }}>Add to Cart</button>
                  </div>
            )}
        })
      }
  
     </div>
    </div>
  )
}

export default Details