import { useState } from "react";
import { data } from "../utils/data";

export default function Menu() {
  const [products, setProducts] = useState(data);

  return (
    <>
      <div className="flex justify-between items-center text-right p-10"></div>
      <div className="flex justify-center mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-purple-500 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-300"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 px-6 py-2 rounded focus:outline-none">
            Search
          </button>
        </div>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400  hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
        >
          Milk Tea
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
        >
          Fruit Tea
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
        >
          Milk Shake
        </button>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={product.image}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.category}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <span className="text-black text-s">{product.ingredients}</span>
                <div className="flex items-center">
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
