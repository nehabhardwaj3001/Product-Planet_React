import React,{useState} from "react";
import { Grid } from '@material-ui/core';
import cart from '../image/cart.jpg';
import './style/MyCart.css';

function MyCart({photos, cartItems}){
const [shareName, setShareName] = React.useState([]);

console.log("cartitems", cartItems )

    return(
        <div>
       <div className="main-cart-section">Cart Items
       <img className='cart-image' src={cart} alt='mycart' />
       </div>
       <hr></hr>
       <div className="cart-items">
        {/* <h2>Cart Items</h2> */}
                <Grid container spacing={3}>   
      {cartItems.map((item,index)=>{
        // if(id==item.id){
            return (
                < Grid item xs={4}>
                  <div className="col" key={index}>
                    {/* <h2>Details: </h2> */}
                      <img className='image' src={item.image} width="200px" height="200px"  />
                    <p><span>Title: </span> {item.title}</p>
                    <p><span>Price: </span> {item.price}</p>
                    {/* <p><span>Description: </span> {item.description}</p> */}
                    <p><span>Category: </span> {item.category}</p>
                <button className="button">Buy Now</button>
                  </div>
                  </Grid>
            )
        // }
        })
      }
          </Grid>         
                    </div>
                    </div>
    )
}

export default MyCart;