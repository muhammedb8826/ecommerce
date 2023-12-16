import { NavLink } from 'react-router-dom';
import '../styles/Card.css';
import { SlLocationPin } from 'react-icons/sl';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { getCardItems } from '../redux/features/card/cardSlice';
import { AppDispatch } from '../redux/store';
import ErrorComponent from './ErrorComponent';
import LoadingComponent from './LoadingComponent';

type RootState = {
  card: {
    homePageData: {
      data: [];
      isLoading: boolean;
      error: null;
    };
  };
};

type Favorite = {
  id: string | number;
};

type Card = {
  id: string | number;
  price: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  location: string;
};

const Card = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (store: RootState) => store.card.homePageData
  );

  useEffect(() => {
    dispatch(getCardItems());
  }, [dispatch]);

  const [expanded, setExpanded] = useState(4);
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const handleExpand = () => {
    setExpanded(expanded + 4);
  };

  const handleFavorite = (cardId: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const newFavorites = [...favorites];
    const cardIndex = newFavorites.findIndex(
      (favorite) => favorite.id === cardId
    );

    if (cardIndex !== -1) {
      newFavorites.splice(cardIndex, 1);
    } else {
      newFavorites.push({ id: cardId });
    }

    setFavorites(newFavorites);
  };

  const slicedData = data.slice(0, expanded);

  if (isLoading) {
    return (

      <LoadingComponent />
)
  }

  if (error) {
    return (
      <ErrorComponent error={error} />
)
  }

  return (
    <div className="card-section">
      <h2 className='text-2xl'>Top Cars</h2>
      <div className="card-container">
        {slicedData.map((card: Card) => (
          <NavLink to={`cars/${card.id}`} className="card" key={card.id}>
            <div className="card-image">
              <img src={card.image} alt="" />
              <span onClick={(event) => handleFavorite(card.id, event)}>
                <FaStar
                  className={
                    favorites.some((favorite) => favorite.id === card.id)
                      ? 'favorite'
                      : 'unfavorite'
                  }
                />
              </span>
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
        {expanded >= data.length ? (
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
