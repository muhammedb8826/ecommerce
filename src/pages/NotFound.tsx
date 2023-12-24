import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 className="text-center text-cyan-500 text-xl">404 Page not found</h1>
      <NavLink
        to="/"
        className="text-center text-blue-700 underline hover:underline-offset-4"
      >
        Go to home page
      </NavLink>
    </>
  );
}

export default NotFound;
