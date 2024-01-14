import { BsSearch } from 'react-icons/bs';
import { LiaCarSideSolid } from 'react-icons/lia';
import { NavLink } from 'react-router-dom';

const LastSearch = () => {
  return (
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
  );
};

export default LastSearch;
