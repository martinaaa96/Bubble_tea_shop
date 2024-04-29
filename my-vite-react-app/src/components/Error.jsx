

export default function Error() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-200">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-purple-500">404</h1>
            <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <button className="bg-gradient-to-r from-purple-700 to-blue-200 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
