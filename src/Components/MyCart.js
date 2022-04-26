import React,{useState} from "react";

function MyCart({photos}){
const [cartItems, setCartItems]= useState([]);
const [shareName, setShareName] = React.useState([])

// function handleClick() {
//     let arr = [...cartItems]
//     let index = arr.indexOf(shareName)
//     arr.splice(index, 1)
//    setCartItems(arr)
// }
console.log("hjbsj", cartItems)

    return(
       <>
       <div className="main-cart-section">
        <h2>Cart Items</h2>
        {/* <p className="total-items">You have <span className="total-items-count">7</span>items in shopping cart.</p> */}

        <div className="cart-items">
            <div className="cart-items-container">
                <div className="items-info">
                {cartItems.map((item) => {
                return (
                    <h2>
                        

                        
                        {/* <button onClick={() => setShareName(item)}>{item}</button>
                        <span></span>
                        <button onClick={handleClick}>Remove</button><span></span>  */}
                    </h2>
                )
            })}
                  
                    {}
                    </div>
                     </div>
        </div>
        </div>
        {/* <div>
            {cartItems.length === 0 && <div> Cart is Empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className='row'>
                <div className="col-2">{item.title}</div>
                <div className="col-2">
                    <button onClick={() => onAdd(item)} classNameadd> + </button>
                    <button onClick={() => onRemove(item)} classNameadd> - </button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} * ${item.price.toFixed(2)}
                </div>
            </div>
        ))} */}
    </>
    )
}

export default MyCart;