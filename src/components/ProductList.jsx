import React from 'react'
import { Products } from '../data/products';
import ProductCard from './ProductCard';


const ProductList = () => {
  return (
    <div className='cards'>
    {Products.map(product => {
      return <ProductCard key={product.id}
      nama = {product.nama}
      deskripsi = {product.deskripsi}
      imageURL = {product.imageURL} 
      />
    })}
  </div>
  )
}

export default ProductList