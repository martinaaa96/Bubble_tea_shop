export default function Menu() {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Out Boba Menu</h1>
        <h1 className="text-3xl">Check here </h1>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400  hover:to-orange-200 text-white font-semibold
                focus:ring-opacity-40 py-2 px-4 rounded mx-2"
        >
          Button 1
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white font-semibold
                focus:ring-opacity-40 py-2 px-4 rounded mx-2"
        >
          Button 2
        </button>
        <button
          className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-400 hover:to-orange-200 text-white font-semibold
                focus:ring-opacity-40 py-2 px-4 rounded mx-2"
        >
          Button 3
        </button>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto"></div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
