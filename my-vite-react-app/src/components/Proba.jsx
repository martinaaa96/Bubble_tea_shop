import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
export default function Proba() {
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 font-serif">
      <div>
        <Link to="/" className="my-7 md:my-0 md:ml-8 cursor: pointer">
          <img
            src="/logo.png"
            alt="logo"
            className="hover:scale-110 duration-500"
            style={{ width: "100px" }}
          />
        </Link>
      </div>
      <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center">
        <a className="text-white hover:text-purple-700 duration-500">
          <Link to="/" className="my-7 md:my-0 md:ml-8">
            Home
          </Link>
        </a>
        <a className="text-white hover:text-purple-700 duration-500">
          <Link to="/" className="my-7 md:my-0 md:ml-8">
            Home
          </Link>
        </a>
        <a className="text-white hover:text-purple-700 duration-500">
          <Link to="/" className="my-7 md:my-0 md:ml-8">
            Home
          </Link>
        </a>
        <a className="text-white hover:text-purple-700 duration-500">
          <Link to="/" className="my-7 md:my-0 md:ml-8">
            Home
          </Link>
        </a>
      </nav>
      <div className="flex mt-4 md:mt-0">
        <LuSearch
          size={20}
          className="mr-5 my-7 md:my-0 md:ml-8 hover:text-purple-700 duration-500"
        />
      </div>
    </div>
  );
}
