import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type DataType = {
  image: string;
};

const DetailsImage = ({ image }: DataType) => {
  return (
    <div className="md:w-1/2">
      <div className="relative w-full max-md:h-[400px] h-[500px] bg-gradient-to-r from-cyan-500 to-blue-500 mb-3 overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
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
      <div className="hidden md:flex gap-2 h-20 overflow-x-scroll">
        <img
          src={image}
          alt=""
          className="h-full w-24 object-cover border"
        />
        <img
          src={image}
          alt=""
          className="h-full w-24 object-cover border"
        />
        <img
          src={image}
          alt=""
          className="h-full w-24 object-cover border"
        />
        <img
          src={image}
          alt=""
          className="h-full w-24 object-cover border"
        />
        <img
          src={image}
          alt=""
          className="h-full w-24 object-cover border"
        />
      </div>
    </div>
  );
};

export default DetailsImage;
