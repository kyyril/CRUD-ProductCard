import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({productsList}) => {
  return (
    <div className='cards'>
    {productsList.map(product => {
      return <ProductCard
      key={product.id}
      nama = {product.nama}
      deskripsi = {product.deskripsi}
      imageURL = {product.imageURL} 
      />
    })}
  </div>
  )
}

export default ProductList