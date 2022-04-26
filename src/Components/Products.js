import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './style/Products.css';
import ReactPaginate from 'react-paginate';
import { Grid } from '@material-ui/core';

function Products({photos, search, setSearch,upperlimit ,setUpperlimit, lowerlimit, setLowerlimit , getPhotos}) 
{
  const [pageNumber, setPageNumber] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);
  
  const pageVisited = pageNumber*postsPerPage;
const pageCount= Math.ceil(photos.length / postsPerPage);
const changePage = ({selected}) =>{
   setPageNumber(selected)
}

  // const displayPosts = photos
  // .slice(pageVisited, pageVisited + postsPerPage)
  // .map((photos) => {
  //   return (
  //     <Grid container spacing={3}>
  //     <Grid  item xs={4} >
         
  //           {/* <Link to={`/Home/${item.id}`}  > */}
  //             <img  className='image' src={photos.image} width="200px" height="200px"  />
  //             {/* </Link> */}
  //           <p>{photos.title}</p>
           
  //         </Grid>
  //                  </Grid>

  //        )
  // })

  return (
    <div>
          <div>
      <input className='input-box' type='text' placeholder="Search" onChange={(e) => setSearch(e.target.value)} /> 
      <h2 className='limit'> Set Price Limit :-</h2>
      <input className='box' type='number' placeholder="" onChange={(e) => setLowerlimit(e.target.value)} />
      
      <input className='box' type='number' placeholder="" onChange={(e) => setUpperlimit(e.target.value)} />
      <button className="button" onClick={getPhotos}>Search</button>
      </div>
        < Grid container spacing={3}>
        {
        photos.filter((item) => {
            if(item.title.toLowerCase().includes(search.toLowerCase()) 
            // && lowerlimit<= item.price && upperlimit>=item.price
            ) {
                return item
            }
        })
        .slice(pageVisited, pageVisited + postsPerPage)
        .map((item,index)=>{
              return (
                <Grid  item xs={4} >
                   
                      <Link to={`/Home/${item.id}`}  >
                        <img  className='image' src={item.image} width="200px" height="200px"  />
                        </Link>
                      <p>{item.title}</p>
                     
                    </Grid>
                   )
            }
        )
        // <ReactPaginate />
        
        }
                  {/* <div>{displayPosts}</div> */}
                  {/* <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  /> */}
        </Grid>
        <Grid container spacing={3}>
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    // pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
       </Grid>
          {/* <div>{displayPosts}</div> */}
        </div>
  )
}

export default Products