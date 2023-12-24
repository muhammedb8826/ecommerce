import '../styles/Home.css';
import SearchButton from '../components/SearchButton';
import SearchForm from '../components/SearchForm';
import { useState } from 'react';
import LastSearch from '../components/LastSearch';
import CurrentlyInDemand from '../components/CurrentlyInDemand';
import Card from '../components/Card';
const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <section className="home">
      <SearchButton handleClick={handleClick} showSearchBox={showSearchBox} />
      <SearchForm showSearchBox={showSearchBox} />
      <div className="last-search-container">
        <LastSearch />
        <CurrentlyInDemand />
      </div>
      <Card />
    </section>
  );
};

export default Home;
