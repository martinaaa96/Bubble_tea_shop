import { useState } from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 font-serif">
      <a
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        href="/"
      >
        <img
          src="/logo.png"
          alt="logo"
          className="my-7 md:my-0 cursor-pointer hover:scale-110 duration-500"
          style={{ width: "100px", display: open ? "none" : "block" }}
        />
      </a>
      <nav className="hidden md:flex">
        <Link
          to="/"
          className={
            isHomePage
              ? "text-white hover:text-purple-700 duration-500 md:mx-4 md:my-2"
              : "text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
          }
        >
          Home
        </Link>
        <Link
          to="/about"
          className={
            !isHomePage
              ? "text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
              : "text-white hover:text-purple-700 duration-500 md:mx-4 md:my-2"
          }
        >
          About
        </Link>
        <Link
          to="/menu"
          className={
            !isHomePage
              ? "text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
              : "text-white hover:text-purple-700 duration-500 md:mx-4 md:my-2"
          }
        >
          Menu
        </Link>
        <Link
          to="/special"
          className={
            !isHomePage
              ? "text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
              : "text-white hover:text-purple-700 duration-500 md:mx-4 md:my-2"
          }
        >
          Featured products
        </Link>
      </nav>
      <div onClick={handleNav} className="md:hidden z-10">
        {open ? (
          <HiX size={20} style={{ color: isHomePage ? "black" : "black" }} />
        ) : (
          <RiMenu3Fill
            size={20}
            style={{ color: isHomePage ? "white" : "black" }}
          />
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          open
            ? `absolute left-0 top-0 w-full px-4 py-7 flex flex-col bg-gradient-to-r  bg-orange-200/90 ${
                !isHomePage
                  ? "bg-gradient-to-r from-purple-200 to-blue-200"
                  : ""
              }`
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li>
            <Link
              to="/"
              className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={
                !isHomePage
                  ? "text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
                  : "text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
              }
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/special"
              className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2"
            >
              Featured products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
