import Home from './pages/Home';
import Cars from './pages/Cars';
import Motorbikes from './pages/Motorbikes';
import Trucks from './pages/Trucks';
import { Routes, Route } from 'react-router-dom'; // Routes and Route are components from react-router-dom
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <div className="app">
      <div className="nav-container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/motorbikes" element={<Motorbikes />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
