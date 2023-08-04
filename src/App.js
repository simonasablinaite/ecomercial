import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO</h1>
        <NavBar />

        <Routes>
          <Route path='/' />
          <Route path='/cart' />
        </Routes>
      </header>
    </div>
  );
}

export default App;
