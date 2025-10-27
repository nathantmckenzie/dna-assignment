import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative flex h-screen items-center justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="mb-4 text-6xl font-light tracking-wide md:text-7xl">DNA Bistro</h1>
          <p className="text-xl font-light tracking-wide md:text-2xl">
            Globally Inspired. Locally Crafted.
          </p>
        </div>
      </section>

      {/* Eat & Drink Section */}
      <section className="flex min-h-screen flex-col md:flex-row">
        <div
          className="h-[50vh] w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80')",
          }}
        ></div>
        <div className="flex w-full items-center justify-center bg-white p-12 md:w-1/2 md:p-16">
          <div className="max-w-lg">
            <h2 className="mb-6 text-4xl font-light tracking-wide md:text-5xl">Eat & Drink</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Instead of just one chef, we have a team of celebrated culinary experts bringing you
              an experience you can't get anywhere else. We believe in handcrafted, locally and
              globally inspired menu offerings.
            </p>
            <Link
              to="/menu"
              className="inline-block border-2 border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen flex-col md:flex-row-reverse">
        <div
          className="h-[50vh] w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')",
          }}
        ></div>
        <div className="flex w-full items-center justify-center bg-gray-50 p-12 md:w-1/2 md:p-16">
          <div className="max-w-lg">
            <h2 className="mb-6 text-4xl font-light tracking-wide md:text-5xl">Locations</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              With restaurants across Vancouver, each DNA Bistro is unique, but they all have plenty
              in common showcasing unparalleled excellence in restaurant design and a world-class
              hospitality experience.
            </p>
            <Link
              to="/locations"
              className="inline-block border-2 border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white"
            >
              Find Your DNA
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section
        className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl px-6 text-white">
          <h2 className="mb-6 text-4xl font-light tracking-wide md:text-5xl">Make a Reservation</h2>
          <p className="mb-8 text-xl font-light tracking-wide">
            Discover globally inspired dishes and experience unparalleled hospitality
          </p>
          <a
            href="#contact"
            className="inline-block bg-white px-10 py-4 text-sm uppercase tracking-wider text-black hover:bg-gray-200"
          >
            Reserve Now
          </a>
        </div>
      </section>
    </>
  );
}
