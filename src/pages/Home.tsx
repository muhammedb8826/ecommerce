import SearchButton from './SearchButton';
import SeachForm from './SeachForm';
import { useEffect, useState } from 'react';
const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [toggleSearchButton, setToggleSearchButton] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggleSearchButton(false);
        setShowSearchBox(true);
      } else {
        setToggleSearchButton(true);
        setShowSearchBox(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  };
  return (
    <section className="home">
      {toggleSearchButton && (
        <SearchButton handleClick={handleClick} showSearchBox={showSearchBox} />
      )}
      {showSearchBox && <SeachForm />}
    </section>
  );
};

export default Home;
