import { NavLink } from 'react-router-dom';
import '../styles/Home.css';
import SearchButton from './SearchButton';
import SearchForm from './SearchForm';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { LiaCarSideSolid } from 'react-icons/lia';
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
        <div className="your-last-search">
          <NavLink to="#" className="last-search-link">
            <div className="search-results">
              <div className="icons">
                <span className="search-icons">
                  <BsSearch />
                </span>
                <span className="car-icon">
                  <LiaCarSideSolid />
                </span>
              </div>
              <div>
                <p>Your last search</p>
                <p>Electric</p>
              </div>
            </div>
            <hr />
            <div className="found-images">
              <img
                src="https://plus.unsplash.com/premium_photo-1682125726825-3c0049c0aae3?auto=format&fit=crop&q=80&w=1169&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=983&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <span>More results</span>
            </div>
          </NavLink>
        </div>
        <div className="currently-in-demand">
          <p>currently in demand</p>
          <div className="cars">
            <div className="car-card">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Electric cars</p>
            </div>
            <div className="car-card">
              <img
                src="https://plus.unsplash.com/premium_photo-1682125740214-fcddeef28561?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>New cars</p>
            </div>
            <div className="car-card">
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>City cars</p>
            </div>
            <div className="car-card">
              <img
                src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Family cars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
