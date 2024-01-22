import React from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import './Orders.css';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    console.log(cart)

    const handleRemoveFromCart = id => {

        const remainingItems = cart.filter(product => product.id !== id)
        setCart(remainingItems)
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
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
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}>
                        <div className='flex justify-center'>
                           <Link className='mt-2 flex justify-center w-10/12 h-12 border-none rounded bg-orange-400 hover:bg-orange-500' to={'/checkout'}><button >Proceed Checkout</button></Link> 
                        </div>

                    </Cart>
            </div>
        </div>
    );
};

export default Orders;