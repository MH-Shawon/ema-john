import React from 'react';
import './Product.css'

const Product = (props) => {
    const {eventAddToCart} = props;
    const {name, img, seller, price, ratings} = props. product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='pro-info'>
            <p className='pro-name'>{name}</p>
            <p>Price:$ {price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button onClick={() => props.eventAddToCart(props.product)} className='btn-cart'>
                <p>
                    Add to cart
                </p>
            </button>
        </div>
    );
};

export default Product;