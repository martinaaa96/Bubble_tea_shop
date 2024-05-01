//import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img className="w-auto h-20" src="logo.png" alt="" />
          </a>

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button
              className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide
             text-white capitalize transition-colors  transform border rounded-md sm:mx-2 dark:border-gray-400
              dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white font-semibold
                focus:ring-opacity-40"
            >
              <span className="mx-1 ">Menu</span>
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
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
