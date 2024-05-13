export default function Featured() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-purple-600 mb-8">
          Featured products
        </h2>

        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          <div className="w-72 bg-white shadow-md rounded-xl">
            <img
              src="/matcha milk tea.jpg"
              alt="Coffee"
              className="w-full h-64 object-cover duration-600 hover:scale-105 "
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Matcha milk tea
              </h3>
              <p className="text-gray-700 text-base"> Matcha powder, black tea, milk, sugar, tapioca pearls, ice cubes</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">$14.99</span>
              </div>
            </div>
          </div>
          <div className="w-72 bg-white shadow-md rounded-xl">
            <img
              src="tiger milk tea.jpg"
              alt="Coffee"
              className="w-full h-64 object-cover duration-600 hover:scale-105 "
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Tiger milk tea
              </h3>
              <p className="text-gray-700 text-base">Brown sugar, black tea, milk, tapioca pearls, ice cubes </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">$12.99</span>
              </div>
            </div>
          </div>
          <div className="w-72 bg-white shadow-md rounded-xl">
            <img
              src="/butterfly milk tea.jpg"
              alt="Coffee"
              className="w-72 h-64 object-cover duration-600 hover:scale-105 "
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Butterfly milk tea
              </h3>
              <p className="text-gray-700 text-base">Butterfly pea syrup, black tea, milk, sugar, tapioca pearls, ice cubes</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">$14.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
