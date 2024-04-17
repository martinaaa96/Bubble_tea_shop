export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-1rem)]">
      <div className="bg-cover bg-[url('/home.png')] bg-center bg-no-repeat h-full w-full">
        <div className="container mx-auto flex flex-col my-auto align-middle h-full">
          <div className="my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5">
            <h1 className="text-7xl mb-4">
              <span className="text-violet-500">Bubble</span> milk tea
            </h1>
            <p className="text-2xl mb-8">Our ...fsfsfff.fr.rf..rf.rghght</p>
            <div className="flex items-center">
              <button className="rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600">
                Share your story
              </button>
              <img className="pl-4 pr-2" src="" />
              <p> Watch highlights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
