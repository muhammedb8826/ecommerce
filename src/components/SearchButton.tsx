import { BsSearch } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import '../styles/search-button.css';

type SearchProps = {
  handleClick: () => void;
  showSearchBox: boolean;
};

const SearchButton = ({ handleClick, showSearchBox }: SearchProps) => {
  return (
    <button
      onClick={handleClick}
      className="search-btn max-md:bg-[#231651]"
      type="button"
      title="search-collabsable-button"
    >
      <span className="search-icon">
        <BsSearch />
      </span>
      <p>{showSearchBox ? 'Close search' : 'Open search'}</p>
      <span className={`arrow-up ${showSearchBox ? 'open' : 'close'}`}>
        <IoIosArrowUp />
      </span>
    </button>
  );
};

export default SearchButton;
