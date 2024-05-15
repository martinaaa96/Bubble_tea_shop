import pageabout from "/pageabout.jpg";
import about_page from "/about_page.jpg";
import aboutpage1 from "/aboutpage1.jpg";
export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900 font-serif">
      <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-32 lg:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:col-span-1">
          <img
            className="w-full rounded-lg"
            src={about_page}
            alt="fruit tea"
            style={{ clipPath: "circle(50% at 50% 50%)" }}
          />
          <img className="w-full rounded-lg" src= {pageabout} alt="milk shake" />
          <img
            className="w-full rounded-lg"
            src={aboutpage1}
            alt="boba milk tea"
            style={{ clipPath: "circle(50% at 50% 50%)" }}
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:col-span-1">
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
      </div>
    </section>
  );
}
