import FilterSearch from './FilterSearch';
import SelectOptions from './SelectOptions';
import '../styles/SearchForm.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

type SeachFormProps = {
  showSearchBox: boolean;
};

type RootState = {
  card: {
    homePageData: {
      searchResults: [];
      isLoading: boolean;
      error: null;
    };
  };
};


const SearchFormButton = ({ showSearchBox }: SeachFormProps) => {
  
  const {searchResults } = useSelector(
    (store: RootState) => store.card.homePageData
  );
  
  const className = showSearchBox
    ? 'search-form-visible'
    : 'search-form-hidden';

  return (
    <div className={`search-form ${className}`}>
      <FilterSearch />
      <div className="select-options">
        <SelectOptions />
        <NavLink to={"/search-result"} className="result-btn">{searchResults.length} results</NavLink>
        <NavLink to="/refine-search" className="refine-search">Refine search</NavLink>
      </div>
    </div>
  );
};

export default SearchFormButton;
