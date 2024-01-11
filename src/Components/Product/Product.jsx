import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { id, category, name, seller, price, ratings, img } = props.product;
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
            <button>Add to Cart </button>
        </div>
    );
};

export default Product;