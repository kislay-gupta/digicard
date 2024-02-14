import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Coming Soon
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
