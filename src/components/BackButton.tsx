import { IoIosArrowBack } from "react-icons/io"
import { NavLink } from "react-router-dom"

const BackButton = () => {
  return (
    <NavLink to="/" className="hidden md:flex items-center mb-3 text-blue-500 text-sm">
    <span className="flex items-center">
      <IoIosArrowBack />
    </span>
    Back
  </NavLink>
  )
}

export default BackButton