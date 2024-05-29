import { useState } from "react";
import { featured } from "../utils/featured";

export default function Featured() {
  const [products, setProducts] = useState(featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-purple-600 mb-8 animate-fade-right ">
          Featured products
        </h2>

        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-72 bg-white shadow-md rounded-xl"
            >
              <img
                src={product.image}
                alt="Coffee"
                className="w-full h-64 object-cover duration-600 hover:scale-105 "
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-base">{product.ingredients}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-yellow-900 font-medium">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
