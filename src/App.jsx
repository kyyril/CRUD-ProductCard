import './App.css';
import ProductList from './components/ProductList';
import { dataProducts } from './data/dataProducts';
import { useState } from 'react';
import ProductCreate from './components/productCreate';

function App() {
  const [products,setProducts] = useState(dataProducts);

  const onCreateProduct = (product) => {
    setProducts([...products,{id: Math.round(Math.random()*1000),...product}])
    console.log(product)
  }

  return (
    <>
    <div className='app-title'>Car Store</div>
    <ProductCreate ProductCreate={onCreateProduct}/>
    <ProductList productsList={products}/>
    </>
  )
}

export default App;
