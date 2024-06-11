import './App.css';
import ProductCard from './components/ProductCard.jsx';
import { Products } from './data/products';


function App() {
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

export default App;
