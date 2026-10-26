
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

function Navbar() {
  return (
    <nav className="w-full bg-white px-4 shadow-sm md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-gray-200 py-4 shadow-amber-50">

        <Link
          to="/"
          className="flex items-center no-underline"
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-14 rounded-lg object-cover"
          />
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <li>
            <Link
              to="/"
              className="rounded-lg px-3 py-2 font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/men"
              className="rounded-lg px-3 py-2 font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Men
            </Link>
          </li>

          <li>
            <Link
              to="/women"
              className="rounded-lg px-3 py-2 font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Women
            </Link>
          </li>

          <li>
            <Link
              to="/kids"
              className="rounded-lg px-3 py-2 font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Kids
            </Link>
          </li>
        </ul>

  
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </button>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;