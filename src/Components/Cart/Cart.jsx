import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteShoppingCart } from '../../utilities/fakedb';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100
    const grandTotal = total + shipping + tax


    return (
        <div className='cart'>
            <h5 className='cart-head'>Order Summary</h5>
            <div className='cart-body'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            <div className='clear-cart'>
                <button onClick={deleteShoppingCart}>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
            </div>
            
        </div>
    );
};

export default Cart;