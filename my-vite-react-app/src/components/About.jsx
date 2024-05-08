import home from "/home.png";
import homePics from "/homePics.jpg";
import homePicss from "/homePicss.jpg";
export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900 font-serif">
      <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Boba milk tea
          </h2>
          <p className="mb-4">
            Welcome to Shoka Boba Milk tea! Explore our delicious menu featuring
            boba milk tea, refreshing fruit tea, and creamy milkshakes.Indulge
            in our premium beverages crafted with quality ingredients. Join us
            and experience the perfect blend of flavor and refreshment!{" "}
          </p>
          <p className="font-semibold mb-4">
            And don't forget to try our delightful boba milk tea!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img
            className="w-full rounded-lg"
            src={home}
            alt="boba milk tea"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <img className="w-full rounded-lg" src={homePics} alt="fruit tea" />
          <img
            className="w-full rounded-lg"
            src={homePicss}
            alt="milk shake"
          />
        </div>
      </div>
    </section>
  );
}
