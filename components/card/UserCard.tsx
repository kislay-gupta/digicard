import Image from "next/image";
import React from "react";
interface Props {
  data: any;
}
const UserCard = ({ data }: Props) => {
  return (
    <>
      <div className="">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm mx-auto"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-col items-center space-y-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                <Image
                  src={data.photo}
                  width={100}
                  height={100}
                  alt="profile pic"
                  className="rounded"
                />
              </span>
            </span>
            <div className="text-center">
              <h3 className="whitespace-nowrap tracking-tight text-lg font-bold">
                {data.fullName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Email: {data.email}
              </p>
            </div>
          </div>
          <div className="p-6 flex flex-col space-y-2">
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Personal Phone: 123-456-7890
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                <path d="M12 18h.01" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Personal Whatsapp: 123-456-7890
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                <rect width={7} height={5} x={7} y={7} rx={1} />
                <rect width={7} height={5} x={10} y={12} rx={1} />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Company: Company Name
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Company Phone: 123-456-7890
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                <path d="M12 18h.01" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Company Whatsapp: 123-456-7890
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Instagram: @company
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Facebook: facebook.com/company
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path d="M2 20h.01" />
                <path d="M7 20v-4" />
                <path d="M12 20v-8" />
                <path d="M17 20V8" />
                <path d="M22 4v16" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Telegram: t.me/company
              </span>
            </div>
            <div className="flex items-center">
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
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                Website: www.company.com
              </span>
            </div>
          </div>
          <div className="items-center p-6 flex justify-center">
            <button className="inline-flex bg-primary-500 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
