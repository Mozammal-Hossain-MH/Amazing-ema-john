import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product mb-10 shadow-lg bg-slate-200'>
            <img src={img} />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <div className='product-gap'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} stars</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='bg-gradient-to-r from-sky-400 to-sky-600 w-full h-12 text-white font-bold absolute bottom-0 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-400'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;