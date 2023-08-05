import React, { useContext, useState } from 'react';
import '../../style/cart.css';
import { ShopContext } from '../../context/shop-context';

export const CartItem = ({ data }) => {
   const { id, productName, price, productImage } = data;
   const { cartItems, addToCart, removeFromCart, updateCartItemsCount } = useContext(ShopContext)

   return (
      <div className='cart-item'>
         <img style={{ width: '150px' }} src={productImage} alt="apple watch" />
         <div className='description'>
            <p>{productName}</p>
            <span>&euro; {price}</span>
            <div className="count-handler">
               <button onClick={() => removeFromCart(id)}>-</button>

               <input value={cartItems[id]} onChange={event => updateCartItemsCount(Number(event.target.value), id)} />

               <button onClick={() => addToCart(id)}>+</button>
            </div>
         </div>
      </div>
   )
}


