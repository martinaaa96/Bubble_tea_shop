export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh)]">
      <div className="bg-cover bg-[url('/homePics.jpg')] bg-center bg-no-repeat h-full w-full">
        <div className="container mx-auto flex flex-col my-auto align-middle h-full">
          <div className="my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5">
            <h1 className="text-7xl mb-4">
              <span className="text-purple-700">Bubble</span>
              <span className="text-white"> milk </span>tea
            </h1>
            <p className="text-2xl mb-8">Our ...fsfsfff.fr.rf..rf.rghght</p>
            <div className="flex items-center">
              <button className="rounded px-10 py-3 text-white bg-purple-700 hover:bg-purple-500">
                Look our boba menu
              </button>
              <img className="pl-4 pr-2" src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
