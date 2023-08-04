import React from 'react'

export const Product = ({ data }) => {
   const { id, productName, price, productImage } = data;
   return (
      <div className='product'>
         <img style={{ width: '200px' }} src={productImage} alt="apple watch" />
         <div className="description">
            <p>{productName}</p>
            <span>&euro; {price}</span>
         </div>
      </div>
   )
}


