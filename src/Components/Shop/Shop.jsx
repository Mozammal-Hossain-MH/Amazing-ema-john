import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const cartItems = [...cart, product]
        setCart(cartItems);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h5>Order Summary</h5>
                <div className=''>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: </p>
                    <p>Total Shipping Charge:</p>
                    <p>Tax: </p>
                    <p>Grand Total: </p>
                </div>

            </div>
        </div>
    );
};

export default Shop;