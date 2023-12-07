import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">{id}color</h1>
    </div>
  );
};

export default Details;
