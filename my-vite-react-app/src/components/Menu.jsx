import { useState } from "react";
import { data } from "../utils/data";

export default function Menu() {
  const [products, setProducts] = useState(data);

  const [filtered, setFiltered] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterProducts =
    filtered === ""
      ? products
      : data.filter((product) => product.category.includes(filtered));

  const searchProducts =
    searchQuery === ""
      ? filterProducts
      : filterProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <div className="flex justify-between items-center text-right p-10"></div>
      <div className="flex flex-wrap justify-center mt-8 space-y-4 md:space-y-0 md:space-x-2 ">
        <div className="relative flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border border-purple-500 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300 w-full md:w-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 px-6 py-2 rounded focus:outline-none"
            onClick={() => setSearchQuery(searchQuery)}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400  hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
          onClick={() => setFiltered("Milk Tea")}
        >
          Milk Tea
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
          onClick={() => setFiltered("Fruit Tea")}
        >
          Fruit Tea
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
          onClick={() => setFiltered("Milk Shake")}
        >
          Milk Shake
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
          onClick={() => setFiltered("")}
        >
          All
        </button>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
  {searchProducts.map((product) => (
    <div
      key={product.id}
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col"
    >
      <a href="#">
        <img
          src={product.image}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72 flex flex-col flex-grow">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {product.category}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <span className="text-black text-s">{product.ingredients}</span>
          <div className="flex items-center mt-auto">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${product.price}
            </p>
            <div className="ml-auto"></div>
          </div>
        </div>
      </a>
    </div>
  ))}
</section>
    </>
  );
}
