import '../styles/navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">Logo</NavLink>
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
          <NavLink to="/" onClick={() => setToggle(false)}>
            Used and New Cars
          </NavLink>
          <BsArrowRight className="right-arrow" />
        </li>
        <li>
          <NavLink to="/trucks" onClick={() => setToggle(false)}>
            Trucks
          </NavLink>
          <BsArrowRight className="right-arrow" />
        </li>
        <li>
          <NavLink to="/add-car" onClick={() => setToggle(false)}>
            Add Cars
          </NavLink>
          <BsArrowRight className="right-arrow" />
        </li>
        <li>
          <select name="" id="" className='p-3 bg-transparent text-white hover:bg-white rounded hover:text-black'>
            <option value="">English</option>
            <option value="">Amharic</option>
            <option value="">Oromiffa</option>
            <option value="">Tigrigna</option>
        </select>
        </li>
      </ul>
      <NavLink to="/favorites" className="favourite me-4">
        <FaStar />
      </NavLink>
    </nav>
  );
};

export default Navbar;
