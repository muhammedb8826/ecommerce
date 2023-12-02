import Home from './pages/Home';
import Cars from './pages/Cars';
import Trucks from './pages/Trucks';
import { Routes, Route } from 'react-router-dom'; // Routes and Route are components from react-router-dom
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <main className="app">
      <header className="nav-container">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
};

export default App;
