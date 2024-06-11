import './App.css';
import ProductCard from './components/ProductCard.jsx';


function App() {
  return (
    <div className='cards'>
      <ProductCard
      nama = 'Ford'
      deskripsi = 'Mobil ford adalah mobil yang sangat bagus'
      imageURL = 'https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      />
    </div>
  )
}

export default App;
