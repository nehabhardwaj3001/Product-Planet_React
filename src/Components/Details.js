import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  './style/Navbar.css';
import Navbar from './Navbar.js'

function Details({photos,setPhotos}) {
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
     {/* {
       photos.map((item) => {
        // if(id==item.id){
// console.log("return ", photos) 
         return
           <div className='details'>
             <h2>Details</h2>
             <img src={item.image} alt='img' width='300px' height='400px' />
             <h3>Title: {item.title}</h3>
              <h4>Price: {item.price}</h4>
               <h5>Description: {item.description}</h5>
           <p><span>Rating : </span> {item.rating}</p>
              </div>
       })
     } */}
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

                  </div>
            )}
        })
      }
  
     </div>
    </div>
  )
}

export default Details