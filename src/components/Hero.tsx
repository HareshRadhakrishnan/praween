import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import HeroBG from "../assets/hero-bg.png";

export const Hero = () => {
  return (
    <section className="">
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroBG}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container text-white mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <h1 className="text-2xl font-bold mb-4 text-gray-300">
              Experience Sri Lanka:{" "}
            </h1>
            <h1 className="text-5xl font-bold mb-4">
              Your Gateway to Unforgettable Adventures in 2024
            </h1>
            <p className="text-sm sm:text-base dark:text-gray-700 text-white">
              Welcome to the ultimate travel destination of 2024! Discover Sri
              Lanka's enchanting beauty and vibrant culture. From pristine
              beaches to lush forests, ancient temples to bustling markets,
              explore every hidden gem with our guide. Whether you seek
              thrilling adventures or serene escapes, Sri Lanka offers an
              unforgettable journey. Start planning your dream vacation today!
            </p>
            <div className="flex mt-8 gap-2">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Get started
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border-2 border-white"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
