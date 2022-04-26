import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { Link } from 'react-router-dom';
import './style/Home.css';
import Products from './Products';
import Pagination from './Pagination';

function Home({photos,setPhotos}) {
 const[search, setSearch]=useState('');
 const[lowerlimit,setLowerlimit]=useState(0);
 const[upperlimit,setUpperlimit]=useState(100);
//  const [pageNumber, setPageNumber] = useState(0);
//  const [postsPerPage, setPostsPerPage] = useState(5);
 
//  const pageVisited = pageNumber*postsPerPage;

 
//  const displayPosts = photos
//  .slice(pageVisited, pageVisited+postsPerPage)
//  .map((photos) => {
//   return (
    
//     <div className="col">
//     <div>
//       {/* <Link to={`/Home/${item.id}`}  > */}
//         <img className='image' src={photos.image} width="200px" height="200px"  />
//         {/* </Link> */}
//       <p>{photos.title}</p>
//       </div>
     
//     </div>
//    )
//  })
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
{/* <div>{displayPosts}</div> */}
{/* <Pagination />  */}
  
    </div>


  )
}

export default Home;