import { FaStar } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";
import { HiOutlinePrinter } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";

type DetailsTextProps = {
  data: {
    title: string;
    description: string;
    price: number;
    favorite: boolean;
    location: string;
  };
};

const DetailsText = ({data}: DetailsTextProps) => {
  return (
    <div className="md:w-1/2 relative">
      <div className="right-0 max-md:absolute flex items-center justify-start gap-10 text-sky-500 max-md:my-3 mb-3">
        <span className="max-md:block flex items-center gap-2"><FaStar className="max-md:w-full" /> Add to list</span>
        <span className="max-md:block flex items-center gap-2"><RiShareLine className="max-md:w-full" /> Share</span>
        <span className="hidden md:flex items-center gap-2"><HiOutlinePrinter />Print</span>
      </div>
      <h1 className="text-2xl mb-3">{data.title}</h1>
      <NavLink to={"#"} className="text-sky-500 flex items-center gap-2 my-3"><SlLocationPin /> {data.location}</NavLink>
      <hr />
      <h3 className="text-2xl mb-3 mt-3">Birr {data.price}</h3>
      <div className="max-md:sticky bottom-0 flex flex-wrap items-center max-md:justify-between mb-3 gap-3 w-full max-md:bg-white py-5 md:py-0 ">
        <NavLink to={"#"} className="border max-md:border-black md:text-white md:bg-sky-500 p-1 text-center rounded md:w-40 width-47">Email</NavLink>
        <NavLink to={"#"} className=" text-white bg-sky-500 p-1 flex items-center justify-center rounded md:w-40 max-md:-order-1 w-full">+251 905 078826</NavLink>
        <NavLink to={"#"} className="border border-black p-1 text-center rounded md:hidden width-47">WhatsApp</NavLink>
      </div>
      <hr />
    </div>
  );
};

export default DetailsText;
