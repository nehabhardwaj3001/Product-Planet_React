import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './style/Products.css';
import ReactPaginate from 'react-paginate';
import { Grid } from '@material-ui/core';
// import '../node_modules/bootstrap/dis/css/bootstrap.min.css'

function Products({photos, search, setSearch,upperlimit ,setUpperlimit, lowerlimit, setLowerlimit , getPhotos}) 
{
  const [pageNumber, setPageNumber] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [cartItems, setCartItems]= useState([]);

  
  const pageVisited = pageNumber*postsPerPage;
const pageCount= Math.ceil(photos.length / postsPerPage);
const changePage = ({selected}) =>{
   setPageNumber(selected)
}

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
                     {/* <button className='addToCart-button' onClick={setCartItems()}>Add to Cart</button> */}
                     <button onClick={() => {
                       setCartItems(() => {
                          if(!cartItems.includes(item.id)) {
                            return [...cartItems, item.id]
                          }else{
                           return [...cartItems]
                          }
                        })
            }}
            >Add to Cart</button>
                    </Grid>
                    
                   )
            }
        )
        // <ReactPaginate />
        
        }
        </Grid>
        <div>
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
       </div>
          {/* <div>{displayPosts}</div> */}
          {  console.log("cart", cartItems)}
              </div>
  )
}

export default Products