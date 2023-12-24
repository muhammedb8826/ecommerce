import { useState } from 'react';
import { LiaCarSideSolid, LiaTruckSolid } from 'react-icons/lia';
import '../styles/FilterSearch.css';

const FilterSearch = () => {
  const [active, setActive] = useState('cars');
  return (
    <ul className="filter-search">
      <li
        onClick={() => setActive('cars')}
        className={`list-item ${active === 'cars' ? 'active' : ''}`}
      >
        <span>
          <LiaCarSideSolid />
        </span>
      </li>
      <li
        onClick={() => setActive('trucks')}
        className={`list-item ${active === 'trucks' ? 'active' : ''}`}
      >
        <span>
          <LiaTruckSolid />
        </span>
      </li>
    </ul>
  );
};

export default FilterSearch;
