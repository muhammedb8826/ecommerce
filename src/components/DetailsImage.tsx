type ID = {
  id: string | number;
};

function DetailsImage({ id }: ID) {
  return (
    <div className="w-1/2 border border-sky-300">Image goes here {id}</div>
  );
}

export default DetailsImage;
