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
      <h1>Search form is going to be here</h1>
    </div>
  );
};

export default SearchForm;
