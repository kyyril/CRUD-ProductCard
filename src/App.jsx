import './App.css';
import productCard from './component/productCard';

function App() {
  return (
    <div className='cards'>
      <>{productCard()}</>
    </div>
  );
}

export default App;
