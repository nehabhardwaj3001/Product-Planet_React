import React,{useState} from "react";
import { Grid } from '@material-ui/core';
import cart from '../image/cart.jpg';
import './style/MyCart.css';
import { Box,  Modal,Typography } from '@material-ui/core'
// import { Avatar } from '@material-ui/core';
// import { Stack } from '@mui/material';
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };  
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Ok</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h3 id="child-modal-title">Your Product was Perchached Succesfully</h3>
            <Link to="/products"><Button onClick={handleClose}>Go To Product Page</Button></Link>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

function MyCart({photos, cartItems}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose=()=>setOpen(false)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };  
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
                    <Button variant='contained' onClick={handleOpen}>Buy Now</Button>
          <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant='h6' component="h2">Are you Sure You Want To Buy <span>{item.title}</span></Typography>
                <ChildModal/>
                <Button onClick={handleClose}>Cancel</Button>
            </Box>
          </Modal>
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