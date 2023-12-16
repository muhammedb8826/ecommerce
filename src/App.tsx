import Home from './pages/Home';
import Cars from './pages/UsedAndNewCars';
import Trucks from './pages/Trucks';
import { Routes, Route } from 'react-router-dom'; // Routes and Route are components from react-router-dom
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import './styles/main.css';
import NotFound from './pages/NotFound';
import AddCar from './components/AddCar';
import Language from './pages/Language';

const App = () => {
  return (
    <main className="app">
      <header className="nav-container">
        <Navbar />
      </header>
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<Details />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/language" element={<Language />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </main>
  );
};

export default App;
