import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import '../../style/checkout.css';

export const CartPage = () => {
   const { cartItems, getTotalAmount } = useContext(ShopContext);
   const totalAmount = getTotalAmount();
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
            <span>Subtotal: &euro; {totalAmount}</span>
            <button>Continue Shopping</button>
            <button>Checkout</button>
         </div>
      </div>
   )
}


