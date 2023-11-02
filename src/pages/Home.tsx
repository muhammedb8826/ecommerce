import SearchButton from './SearchButton';
import SearchForm from './SearchForm';
import { useState } from 'react';
const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <section className="home">
      <SearchButton handleClick={handleClick} showSearchBox={showSearchBox} />
      <SearchForm showSearchBox={showSearchBox} />
    </section>
  );
};

export default Home;
