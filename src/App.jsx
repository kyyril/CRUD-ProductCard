import './App.css';
import React from 'react';
import ProductList from './components/ProductList';
import { dataProducts } from './data/dataProducts';
import { useState } from 'react';
import ProductCreate from './components/productCreate';

function App() {
  const [products,setProducts] = useState(dataProducts);
  
  const onCreateProducts = (product) => {
    setProducts([
      ...products,
      {
        id: Math.round(Math.random() * 1998),
        ...product,
      },
    ]);
    console.log(products);
  };

  const onDeleteProducts = (id) => {
    //filter
    const updatedProduct = products.filter((product) => {
      return product.id !== id //return id yg tidak sama dengan Id
    })
    setProducts(updatedProduct)
  }

  return (
    <>
    <div className='app-title'>Car Store</div>
    <ProductCreate ProductCreate={onCreateProducts}/>
    <ProductList productsList={products} 
    onDeleteProducts = {onDeleteProducts}/>
    </>
  )
}

export default App;
