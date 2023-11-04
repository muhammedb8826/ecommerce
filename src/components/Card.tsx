import { NavLink } from 'react-router-dom';
import '../styles/Card.css';
import { CardData } from '../utils/CardData';

const Card = () => {
  return (
    <div className="card-section">
      <h2>Top Cars</h2>
      <div className="card-container">
        {CardData.map((card) => (
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
                <p>
                  <span>icon</span>
                  {card.location}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <button type="button" className="see-more-btn">
        +More vehicles
      </button>
    </div>
  );
};

export default Card;
