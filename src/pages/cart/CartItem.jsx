import React from 'react'

export const CartItem = ({ data }) => {
   const { id, productName, price, productImage } = data;
   return (
      <div className='cartItem'>
         <img style={{ width: '200px' }} src={productImage} alt="apple watch" />
         <div className='description'>
            <p>{productName}</p>
            <span>&euro; {price}</span>
         </div>
      </div>
   )
}


