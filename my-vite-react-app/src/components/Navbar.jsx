import { LuSearch } from "react-icons/lu";

export default function NavBar() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/logo.png" className="w-100 h-20 mr-2" alt="Logo" />
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="text-base mr-5 hover:text-gray-900">Home</a>
        <a className="text-base mr-5 hover:text-gray-900">Story</a>
        <a className="text-base mr-5 hover:text-gray-900">Gallery</a>
        <a className="text-base mr-5 hover:text-gray-900">Contact Us</a>
      </nav>
      <div className="flex mt-4 md:mt-0">
        <LuSearch className="text-black" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-lg border-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
      />
    </div>
  );
}
