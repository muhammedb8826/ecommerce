import { NavLink, useParams } from 'react-router-dom';
import DetailsImage from '../components/DetailsImage';
import DetailsText from '../components/DetailsText';
import { IoIosArrowBack } from 'react-icons/io';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No id provided in the url</div>;
  }
  return (
    <div className="wrapper p-3">
      <NavLink to="/" className="flex items-center mb-3 text-blue-500 text-sm">
        <span className="flex items-center">
          <IoIosArrowBack />
        </span>
        Back
      </NavLink>
      <div className="md:flex justify-between gap-5">
        <DetailsImage id={id} />
        <DetailsText id={id} />
      </div>
    </div>
  );
};

export default Details;
