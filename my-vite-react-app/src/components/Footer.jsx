import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="my-7 md:my-0 cursor-pointer">
            <img
              className="w-auto h-20 hover:scale-110 duration-500 "
              src="logo.png"
              alt="logo"
            />
          </Link>

          <p className="max-w-md mx-auto mt-4 text-black dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"></div>
        </div>

        <hr className="my-2 border-purple-700 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Boba milk tea Copyright 2024. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <SiFacebook className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:scale-110 duration-500" />
              <FiInstagram className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:scale-110 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
