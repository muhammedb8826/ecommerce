import '../styles/navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Navbar = () => {
  console.log(
    useSelector((store) => {
      console.log(store);
    })
  );

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
          <NavLink to="/cars" onClick={() => setToggle(false)}>
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
          <NavLink to="/language" onClick={() => setToggle(false)}>
            English <IoIosArrowDown className="down-arrow"></IoIosArrowDown>
          </NavLink>
          <BsArrowRight className="right-arrow" />
        </li>
      </ul>
      <NavLink to="/favorites" className="favourite">
        <FaStar />
      </NavLink>
    </nav>
  );
};

export default Navbar;
