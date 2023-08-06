import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import '../../style/checkout.css';

import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
   const { cartItems, getTotalAmount } = useContext(ShopContext);
   const totalAmount = getTotalAmount();

   const navigate = useNavigate();

   return (
      <div className='cart'>
         <div>
            <h1>Your Cart Items</h1>
         </div>

         <div className="cartItems">
            {PRODUCTS.map((product) => {
               if (cartItems[product.id] !== 0) {
                  return <CartItem data={product} />
               }
            })}
         </div>
         <div className="checkout">

            <span>Subtotal: &euro; {(Math.round(totalAmount * 100) / 100).toFixed(2)}</span>

            <div className="buttons-wrapper">
               <button onClick={() => navigate('/')}>Continue Shopping</button>
               <button>Checkout</button>
            </div>
         </div>
      </div>
   );
};


