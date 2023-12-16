import { NavLink, useParams } from 'react-router-dom';
import DetailsImage from '../components/DetailsImage';
import DetailsText from '../components/DetailsText';
import { IoIosArrowBack } from 'react-icons/io';
import { AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getCardItem } from '../redux/features/card/cardSlice';
import { useEffect } from 'react';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';

type RootState = {
  card: {
    detailsPageData: {
      data: {
        image: string;
        title: string;
    description: string;
    price: number;
    favorite: boolean;
    location: string;
      };
      isLoading: boolean;
      error: null;
    };
  };
};

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (store: RootState) => store.card.detailsPageData
  );

  useEffect(() => {
    if (id!==undefined) {
      dispatch(getCardItem(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <LoadingComponent />
    )
  }

  if (error) {
    return(
      <ErrorComponent error={error} />
    )
  }

  return (
    <div className="p-3">
      <NavLink to="/" className="hidden md:flex items-center mb-3 text-blue-500 text-sm">
        <span className="flex items-center">
          <IoIosArrowBack />
        </span>
        Back
      </NavLink>
      <div className="md:flex justify-between gap-5">
        <DetailsImage image={data.image} />
        <DetailsText data={data}  />
      </div>
    </div>
  );
};

export default Details;
