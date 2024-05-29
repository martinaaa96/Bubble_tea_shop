import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh)]">
      <div className="bg-cover bg-[url('/picsHome.jpg')] bg-center bg-no-repeat h-full w-full style={{ backgroundSize: 'contain' }}">
        <div className="container mx-auto flex flex-col my-auto align-middle h-full text-right">
          <div className="my-auto mx-auto lg:mx-0 w-10/12 lg:w-2/5">
            <h1 className="text-7xl mb-7 animate-jump-in">
              <span className="text-purple-700 ">Bubble</span>
              <span className="text-white"> Milk </span>tea
            </h1>
            <p className="text-2xl mb-8 text-white animate-jump-in ">
              So delicious
            </p>
            <div className="flex">
              <Link
                to="/menu"
                className="rounded px-10 py-3 text-white bg-purple-700 hover:scale-110 duration-700"
              >
                Check our menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
