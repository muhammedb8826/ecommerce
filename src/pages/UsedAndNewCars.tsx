import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getUsedAndNewCars } from "../redux/features/used-and-new-cars/useAndNewCarsSlice";
import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


type RootState = {
  useAndNewCars: {
      data: [],
      isLoading: boolean,
      error: "",
    };
  };

type Card = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  tag: string;
};

type Favorite = {
  id: string | number;
};



const UsedAndNewCars = () => {
  const dispatch: AppDispatch = useDispatch();
  const {data, isLoading, error} = useSelector((store: RootState) => store.useAndNewCars);

  useEffect(() => {
    dispatch(getUsedAndNewCars());
  }, [dispatch]);

  const [expanded, setExpanded] = useState(4);
  const [favorites, setFavorites] = useState<Favorite[]>([]);

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

  if (isLoading) {
    return (
    <LoadingComponent />
      );
  }

  if (error) {
    return (
      <ErrorComponent error={error} />
    );
  }

  if(data.length === 0) {
    return (
      <div className="wrapper">
        <div className="card-section">
        <h2 className='text-2xl mt-5'>This might also interest you</h2>
        <div className="card-container">
          <p className="text-center">No data found</p>
        </div>
      </div>
      </div>
    )
  }

  const handleExpand = () => {
    setExpanded(expanded + 4);
  };

  const slicedData = data.slice(0, expanded);

  return (
    <div className="wrapper">
      <div className="card-section">
      <h2 className='text-2xl mt-5'>This might also interest you</h2>
      <div className="card-container">
        {slicedData.map((card: Card) => (
          <NavLink to={`used-and-new-cars/${card.id}`} className="card" key={card.id}>
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
          <NavLink to="/refine-search" className="new-search-link">
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
    </div>
  );
};

export default UsedAndNewCars;
