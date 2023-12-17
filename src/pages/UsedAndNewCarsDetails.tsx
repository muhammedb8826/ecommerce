import { useEffect } from "react";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import { AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getUsedAndNewCar } from "../redux/features/used-and-new-cars/useAndNewCarsSlice";
import { IoIosArrowBack } from "react-icons/io";
import DetailsImage from "../components/DetailsImage";
import DetailsText from "../components/DetailsText";

type RootState = {
    useAndNewCars: {
      details: {
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

const UsedAndNewCarsDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch: AppDispatch = useDispatch();
    const { details, isLoading, error } = useSelector(
      (store: RootState) => store.useAndNewCars
    );
  
    useEffect(() => {
      if (id!==undefined) {
        dispatch(getUsedAndNewCar(id));
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
          <DetailsImage image={details.image} />
          <DetailsText data={details}  />
        </div>
      </div>
    );
  };
export default UsedAndNewCarsDetails
