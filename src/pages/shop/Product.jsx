import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = ({ data }) => {
   const { id, productName, price, productImage } = data;

   const { addToCart, cartItems } = useContext(ShopContext);

   const cartItemsAmount = cartItems[id];

   return (
      <div className='product'>
         <img style={{ width: '200px' }} src={productImage} alt="apple watch" />
         <div className="description">
            <p>{productName}</p>
            <span>&euro; {price}</span>
         </div>
         <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
      </div>
   )
}


