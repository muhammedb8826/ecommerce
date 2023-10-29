import SearchButton from './SearchButton';
import SeachForm from './SeachForm';
import { useState } from 'react';
const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(true);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  };
  return (
    <section className="home">
      <SearchButton handleClick={handleClick} showSearchBox={showSearchBox} />
      {showSearchBox && <SeachForm />}
    </section>
  );
};

export default Home;
