import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import './Orders.css';
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    console.log(cart)

    const handleRemoveFromCart = id => {

        const remainingItems = cart.filter(product => product.id !== id)
        setCart(remainingItems)
        removeFromDb(id);
    }


    return (
        <div className='orders mx-3 md:mx-0'>
            <div className='m-auto'>
                {
                    cart.map(cartProduct => <CartProduct
                        key={cartProduct.id}
                        cartProduct={cartProduct}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></CartProduct>)
                }
            </div>
            <div className='cart-orders fixed bottom-0 top-20 right-0 z-40 px-5 md:px-0 md:static hidden md:block'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;