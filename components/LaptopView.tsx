import Link from "next/link";
import React from "react";

const LaptopView = () => {
  return (
    <div className="hidden xl:block">
      <main className="relative h-screen overflow-hidden bg-white dark:bg-black">
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container px-6 py-4 mx-auto md:px-12">
            <div className="items-center justify-between md:flex">
              <div className="flex items-center justify-between">
                <div className="md:hidden">
                  <button className="text-gray-800 focus:outline-none">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden space-x-4 md:flex md:items-center md:justify-end"></div>
            </div>
          </nav>
        </header>
        <div className="container z-10 flex items-center justify-between h-screen px-6 pt-32 mx-auto md:pt-0">
          <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
            <div className="w-full mb-16 text-center md:mb-8 lg:text-left">
              <h1 className="mt-12 text-dark300_light900 font-sans text-xl font-light text-center text-gray-700 lg:text-left lg:text-5xl md:mt-0">
                Sorry, this page isn&#39;t available for laptop, <br /> please
                open in mobile
              </h1>
              <div className="mt-16">
                <Link
                  href="/"
                  className="px-4 py-2  text-base font-light transition duration-200 ease-in bg-primary-100 dark:text-dark-100  border-2 border-gray-700 dark:border-black dark:bg-primary-500 hover:bg-primary-500 focus:outline-none"
                >
                  Go back home
                </Link>
              </div>
            </div>
            <div className="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl">
              <img src="/1.svg" alt="bg image" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LaptopView;
