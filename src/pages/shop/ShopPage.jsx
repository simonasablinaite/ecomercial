import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import '../../style/shop.css';

export const ShopPage = () => {
   return (
      <div className='shop'>
         <div className="shopTitle">
            <h1>Watches Shop</h1>
         </div>

         <div className="productsList">
            {PRODUCTS.map((product) => (
               <Product data={product} />
            )
            )}
         </div>
      </div>
   )
}


