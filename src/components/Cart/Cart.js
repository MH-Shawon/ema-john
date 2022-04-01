import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = total * 10 / 100;
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
          <h4>Order summary</h4>
         <h5>Selected Items:{cart.length}</h5> 
        <p>Total Price:${total}</p> 
         <p>Total Shipping:${shipping} </p> 
         <p>Tax:{tax}</p>
         <h6>Grand Total: {grandTotal} </h6>
        </div>
    );
};

export default Cart;