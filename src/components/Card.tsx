import { NavLink } from 'react-router-dom';
import '../styles/Card.css';
import { SlLocationPin } from 'react-icons/sl';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { CardData } from '../utils/CardData';
import { useState } from 'react';

const Card = () => {
  const [expanded, setExpanded] = useState(4);

  const handleExpand = () => {
    setExpanded(expanded + 4);
  };

  console.log(expanded);
  console.log(CardData.length);

  const slicedData = CardData.slice(0, expanded);

  return (
    <div className="card-section">
      <h2>Top Cars</h2>
      <div className="card-container">
        {slicedData.map((card) => (
          <NavLink to="#" className="card" key={card.id}>
            <div className="card-image">
              <img src={card.image} alt="" />
              <span>{card.favorite}</span>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3 className="card-title">{card.title}</h3>
                <h3>Birr {card.price}</h3>
                <p className="card-description">{card.description}</p>
              </div>
              <div className="card-footer">
                <span className="tag">{card.tag}</span>
                <p className="location">
                  <span>
                    <SlLocationPin />
                  </span>
                  {card.location}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <button type="button" className="see-more-btn" onClick={handleExpand}>
        {expanded >= CardData.length ? (
          <NavLink to="/cars" className="new-search-link">
            Nothing found?{' '}
            <span>
              Start a new search <IoIosArrowRoundForward className="icon" />
            </span>
          </NavLink>
        ) : (
          ' + More vehicles'
        )}
      </button>
    </div>
  );
};

export default Card;
