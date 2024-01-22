import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const CartProduct = (props) => {
    
    const {name, img, price, quantity, shipping, id} = props.cartProduct;
const handleRemoveFromCart = props.handleRemoveFromCart;
    return (
        <div className='h-28 w-full flex items-center border border-solid border-gray-200 relative mt-10 rounded-md'>
            <img className='h-5/6 w-auto ml-2 rounded' src={img} />
            <div className='px-4 mr-5 grow'>
                <p className='text-sm font-semibold'>{name}</p>
                <p className='text-xs'>Price: <span className='text-orange-400 font-semibold'>${price * quantity}</span></p>
                <p className='text-xs'>Quantity: <span className='text-orange-400 font-semibold'>{quantity}</span></p>
                <p className='text-xs'>Shipping Charge: <span className='text-orange-400 font-semibold'>${shipping}</span></p>
            </div>
            <button onClick={ () => handleRemoveFromCart(id)} className='text-red-500 bg-red-200 hover:bg-red-300 absolute right-0 rounded-full h-10 w-10 mx-2 flex justify-center items-center'>
              <TrashIcon className="h-auto w-6 " />  
            </button>
            
        </div>
    );
};

export default CartProduct;