import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { ShopPage } from './pages/shop/ShopPage';
import { CartPage } from './pages/cart/CartPage';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">

      <ShopContextProvider>
        <NavBar />

        <Routes>
          <Route path='/' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </ShopContextProvider>

    </div>
  );
}

export default App;
