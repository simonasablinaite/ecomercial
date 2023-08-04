import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { ShopPage } from './pages/shop/ShopPage';
import { CartPage } from './pages/cart/CartPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />

        <Routes>
          <Route path='/' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
