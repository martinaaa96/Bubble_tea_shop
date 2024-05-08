import { Link } from "react-router-dom";

export default function Proba() {
  return (
    <div className="container mx-auto flex flex-wrap flex-col md:flex-row p-5 items-center justify-between h-20 px-4 absolute z-10 font-serif w-full">
      <div>
        <Link to="/" className="my-7 md:my-0 md:ml-8 cursor-pointer">
          <img
            src="/logo.png"
            alt="logo"
            className="hover:scale-110 duration-500"
            style={{ width: "100px" }}
          />
        </Link>
      </div>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mt-10 md:mt-0">
        <a className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">
          <Link to="/">Home</Link>
        </a>
        <a className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">
          <Link to="/menu">Menu</Link>
        </a>
        <a className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">
          <Link to="/about">About</Link>
        </a>
        <a className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">
          <Link to="/contact">Contact</Link>
        </a>
      </nav>
    </div>
  );
}
