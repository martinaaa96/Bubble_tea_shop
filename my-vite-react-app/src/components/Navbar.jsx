import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Link to="/" className="my-7 md:my-0 cursor-pointer">
          <img
            src="/logo.png"
            alt="logo"
            className="hover:scale-110 duration-500"
            style={{ width: "100px" }}
          />
        </Link>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
