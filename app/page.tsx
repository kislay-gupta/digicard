import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <>
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <a className="flex items-center justify-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
              <span className="sr-only">Acme Inc</span>
            </a>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                About
              </a>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Contact
              </a>
            </nav>
          </header>
          <main className="flex-1 ">
            <section className="w-full h-screen py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container flex flex-col items-center px-4 md:px-6 text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Create your Digital Card
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Beautifully designed digital cards that you can share with
                    your friends and family. Accessible. Customizable. Open
                    Source.
                  </p>
                </div>
                <div>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/sign-up"
                  >
                    Get your digicard
                  </Link>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <img
                  src="/placeholder.svg"
                  width={550}
                  height={310}
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      Collaboration
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Faster iteration. More innovation.
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      The platform for rapid progress. Let your team focus on
                      shipping features instead of managing infrastructure with
                      automated CI/CD, built-in testing, and integrated
                      collaboration.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-300"
                      href="#"
                    >
                      Contact Sales
                    </a>
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-300"
                      href="#"
                    >
                      Tour the Platform
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Experience the workflow the best frontend teams love.
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Let your team focus on shipping features instead of managing
                    infrastructure with automated CI/CD.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <button
                      className="inline-flex bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sign up to get notified when we launch.
                    <a className="underline underline-offset-2" href="#">
                      Terms &amp; Conditions
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Acme Inc. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <a
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </a>
            </nav>
          </footer>
        </div>
      </>
    </main>
  );
}
