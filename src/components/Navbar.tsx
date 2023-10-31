import '../styles/navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <button
        type="button"
        aria-label="Toggle Menu"
        className="menu-toggle-btn"
        onClick={handleToggle}
      >
        {toggle ? <RiCloseLine /> : <RiMenuLine />}
      </button>
      <ul className={`menu-bar ${toggle ? 'active' : ''}`}>
        <li>
          <Link to="/cars" onClick={() => setToggle(false)}>
            Used and New Cars
          </Link>
          <BsArrowRight className="right-arrow" />
        </li>
        <li>
          <Link to="/trucks" onClick={() => setToggle(false)}>
            Trucks
          </Link>
          <BsArrowRight className="right-arrow" />
        </li>
        <li>
          <Link to="/language" onClick={() => setToggle(false)}>
            English
          </Link>
          <BsArrowRight className="right-arrow" />
        </li>
      </ul>
      <Link to="/favorites" className="favourite">
        <FaStar />
      </Link>
    </nav>
  );
};

export default Navbar;
