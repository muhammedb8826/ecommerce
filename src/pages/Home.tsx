import '../styles/Home.css';
import SearchButton from '../components/SearchButton';
import SearchFormButton from '../components/SearchFormButton';
import { useState } from 'react';
import LastSearch from '../components/LastSearch';
import CurrentlyInDemand from '../components/CurrentlyInDemand';
import Card from '../components/Card';
import UsedAndNewCars from './UsedAndNewCars';

const Home = () => {

  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <section className="home" id='header'>
      <SearchButton handleClick={handleClick} showSearchBox={showSearchBox} />
      <SearchFormButton showSearchBox={showSearchBox} />
      <div className="last-search-container">
        <LastSearch />
        <CurrentlyInDemand />
      </div>
      <Card />
      <UsedAndNewCars />
    </section>
  );
};

export default Home;
