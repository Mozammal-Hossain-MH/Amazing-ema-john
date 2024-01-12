import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
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
        </div>
    );
};

export default Cart;