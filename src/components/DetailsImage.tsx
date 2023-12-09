import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardItem } from '../redux/features/card/cardSlice';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AppDispatch } from '../redux/store';

type RootState = {
  card: {
    detailsPageData: {
      data: null;
      isLoading: boolean;
      error: null;
    };
  };
};

type ID = {
  id: string | number;
};

const DetailsImage = ({ id }: ID) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (store: RootState) => store.card.detailsPageData
  );

  useEffect(() => {
    dispatch(getCardItem(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="md:w-1/2 border border-sky-300">
      <div className="relative w-full h-72 sm:h-96 bg-gradient-to-r from-cyan-500 to-blue-500 mb-3 overflow-hidden">
        <img
          src={`${data.image}`}
          alt={`${data.title}`}
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          className="absolute flex items-center justify-center top-1/2 left-0 w-7 h-10 bg-black text-white"
          aria-label="Go back"
        >
          <IoIosArrowBack />
        </button>
        <button
          type="button"
          className="absolute flex items-center justify-center top-1/2 right-0 w-7 h-10 bg-black text-white"
          aria-label="Go forward"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className="flex gap-2 h-20 overflow-x-scroll">
        <img
          src={`${data.image}`}
          alt=""
          className="h-full w-24 object-cover border border-sky-500"
        />
        <img
          src={`${data.image}`}
          alt=""
          className="h-full w-24 object-cover border border-sky-500"
        />
        <img
          src={`${data.image}`}
          alt=""
          className="h-full w-24 object-cover border border-sky-500"
        />
        <img
          src={`${data.image}`}
          alt=""
          className="h-full w-24 object-cover border border-sky-500"
        />
        <img
          src={`${data.image}`}
          alt=""
          className="h-full w-24 object-cover border border-sky-500"
        />
      </div>
    </div>
  );
};

export default DetailsImage;
