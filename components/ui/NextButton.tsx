import Link from "next/link";
import React from "react";

interface Props {
  lnk: string;
}
const NextButton = ({ lnk }: Props) => {
  return (
    <div className="flex gap-1">
      <Link
        className="group   relative bg-primary-500 inline-flex items-center overflow-hidden rounded px-8 py-3 text-dark-600 focus:outline-none focus:ring active:text-dark-500"
        href={`#${lnk}`}
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
        <span className="text-sm font-medium transition-all group-hover:me-4">
          {" "}
          Next{" "}
        </span>
      </Link>
      <p className="max-sm:hidden my-auto ml-2 small-bold text-zinc-50">
        press <strong>Enter ↵ </strong>{" "}
      </p>
    </div>
  );
};

export default NextButton;
