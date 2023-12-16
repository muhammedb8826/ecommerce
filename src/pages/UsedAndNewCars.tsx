import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getUsedAndNewCars } from "../redux/features/card/cardSlice";
import { useEffect } from "react";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";


type RootState = {
  card: {
    usedAndNewCarsPageData: {
      data: [];
      isLoading: boolean;
      error: "";
    };
  };
};

type ItemType = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  tag: string;
};



const UsedAndNewCars = () => {
  const dispatch: AppDispatch = useDispatch();
  const {data, isLoading, error} = useSelector((store: RootState) => store.card.usedAndNewCarsPageData);
  console.log(data);

  useEffect(() => {
    dispatch(getUsedAndNewCars());
  }, [dispatch]);

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

  return (
    <div className="wrapper">
      {data.map((item: ItemType) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.location}</p>
          <p>{item.tag}</p>
          <hr />
    </div>
      ))}
    </div>
  );
};

export default UsedAndNewCars;
