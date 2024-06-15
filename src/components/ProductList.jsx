import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({productsList,onDeleteProducts}) => {
  return (
    <div className='cards'>
    {productsList.map(product => {
      return <ProductCard
      key={product.id}
      product = {product}
      onDeleteProducts = {onDeleteProducts}
      />
    })}
  </div>
  )
}

export default ProductList