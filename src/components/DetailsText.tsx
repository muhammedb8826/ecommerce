type ID = {
  id: number | string;
};

const DetailsText = ({ id }: ID) => {
  return (
    <div className="md:w-1/2 border border-sky-300">
      information goes here {id}
    </div>
  );
};

export default DetailsText;
