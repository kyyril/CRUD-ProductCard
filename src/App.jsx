import './App.css';
import ProductList from './components/ProductList';
import { dataProducts } from './data/dataProducts';
import { useState } from 'react';

function App() {
  const [product,setProduct] = useState(dataProducts);
  return (
    <>
    <div className='app-title'>Car Store</div>
    <ProductList productsList={product}/>
    </>
  )
}

export default App;
