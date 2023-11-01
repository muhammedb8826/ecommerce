import SearchButton from './SearchButton';
import SeachForm from './SeachForm';
import { useState } from 'react';
const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <section className="home">
      <SearchButton handleClick={handleClick} showSearchBox={showSearchBox} />
      <SeachForm showSearchBox={showSearchBox} />
    </section>
  );
};

export default Home;
