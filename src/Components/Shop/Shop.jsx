import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Shop = () => {

    const products = useLoaderData()
    const [cart, setCart] = useState([]);



    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the added product
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const storedCartProducts = products.find(product => product.id === id)
            // step 3: add quantity
            if (storedCartProducts) {
                storedCartProducts.quantity = storedCart[id];
                // step 4: add the added product to savedCart
                savedCart.push(storedCartProducts);
            }

        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // const cartItems = [...cart, product]
        let newCart = [];
        // if product doesnt exist in the cart then set quantity 1
        // if product exist then update quantity by 1
        const exists = cart.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    const navigate = useNavigate()

    const handleReviewOrders = ( ) => {
        navigate(`/orders`);
    }

    return (
        <div className='shop-container'>
            <div className="mt-20 w-3/5 sm:w-auto sm:mx-10 m-auto grid sm:grid-cols-2 sm:gap-11 lg:grid-cols-3">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container hidden md:block">
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <div className='flex justify-center '>
                       <button onClick={handleReviewOrders} className='mt-2 w-10/12 h-12 border-none rounded bg-orange-400 hover:bg-orange-500'>Review Orders</button>
                    </div>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Shop;