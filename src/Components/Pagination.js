import React,{useState} from 'react';
import './style/Pagination.css';

const Pagination = ({photos,totalPosts}) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(5);
    
    const pageVisited = pageNumber*postsPerPage;

    const displayPosts = photos.slice(pageVisited, pageVisited + postsPerPage)
    .map((photos) => {
     return (
       <div className="col" >
       <div>
           <img className='image' src={photos.image} width="200px" height="200px"  />
         <p>{photos.title}</p>
         </div>
        
       </div>
      )
    })
    // {postsPerPage, totalPosts, paginate}
   
//     const pageNumber = [];

// for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
//     pageNumber.push(i);
// }

  return (
    // <nav>
    //     <ul className='pagination'>
    //         {pageNumber.map(number => (
    //             <li key={number} className='page-item'>
    //                 <a onClick={() => paginate(number)} className='page-link'>{number}</a>
    //             </li>
    //         ))}
    //     </ul>
        
    // </nav>
    // <div>
    //       <button onClick={() => previousPage()}>Previous</button>
    //       <button onClick={() => nextPage()}>Next</button>

    //     </div>
    <div>{displayPosts}</div>
  )
}

export default Pagination