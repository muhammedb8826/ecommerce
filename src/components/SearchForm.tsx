import FilterSearch from './FilterSearch';
import SelectOptions from './SelectOptions';
import '../styles/SearchForm.css';
type SeachFormProps = {
  showSearchBox: boolean;
};

const SearchForm = ({ showSearchBox }: SeachFormProps) => {
  const className = showSearchBox
    ? 'search-form-visible'
    : 'search-form-hidden';

  return (
    <div className={`search-form ${className}`}>
      <FilterSearch />
      <div className="select-options">
        <SelectOptions />
        <div className="result-btn">12,422 results</div>
        <div className="refine-search">Refine search</div>
      </div>
    </div>
  );
};

export default SearchForm;
