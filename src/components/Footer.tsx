import { NavLink } from "react-router-dom"
import GoToTop from "./GoToTop";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer p-4">
        <hr />
      <div className="h-24 p-4">
        deductable description text goes here
      </div>
      <hr />
      <GoToTop />
      <hr />
      <div className="lg:flex items-center lg:justify-between">
      <div className="description py-4 flex flex-col gap-3 lg:w-full">
        <h3 className="font-bold">Logo: <span>the larges pan-Ethiopian online car market.</span></h3>
        <p className="font-medium">Company</p>
        <NavLink to={"#"} >About Us</NavLink>
        <NavLink to={"#"} >Career</NavLink>
        <NavLink to={"#"} >Contact Us</NavLink>
        <NavLink to={"#"} >Imprint</NavLink>
        <NavLink to={"#"} >Data Protection Information</NavLink>
        <NavLink to={"#"} >Blog</NavLink>
      </div>
      <hr className="lg:hidden"/>
      <div className="apps md:flex items-center justify-between gap-3 py-3 lg:w-1/3 lg:block">
        <div className="flex flex-col gap-3 lg:w-full">
        <NavLink to={"#"} className="flex items-center gap-2"><FaApple />iOS</NavLink>
        <NavLink to={"#"} className="flex items-center gap-2"><IoLogoAndroid />Android</NavLink>
        </div>
        <select name="" id="" className="w-full md:w-1/3 border border-black rounded p-2 mt-3 lg:w-full">
            <option value="">English</option>
            <option value="">Amharic</option>
            <option value="">Oromiffa</option>
            <option value="">Tigrigna</option>
        </select>
      </div>
        <hr className="lg:hidden"/>
      </div>
      <hr className="hidden lg:block" />
      <p className="text-xs text-center text-gray-500 py-3">© Copyright 2023 by Logo, All Rights resrved.</p>
     
    </section>
  )
}

export default Footer
