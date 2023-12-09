import { useParams } from 'react-router-dom';
import DetailsImage from '../components/DetailsImage';
import DetailsText from '../components/DetailsText';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No id provided in the url</div>;
  }
  return (
    <div className="wrapper border-2 border-sky-500 p-3">
      <div className="flex justify-between gap-5">
        <DetailsImage id={id} />
        <DetailsText id={id} />
      </div>
    </div>
  );
};

export default Details;
