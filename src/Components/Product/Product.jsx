import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <div className='product-gap'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} stars</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;