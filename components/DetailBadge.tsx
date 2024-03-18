import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  detail?: string;
  icon: ReactNode;
  detailLink: string;
}
const DetailBadge = ({ detail, detailLink, icon }: Props) => {
  return (
    <div className="flex  items-center text-wrap">
      <Link href={`${detailLink}`} target="_blank" className="ml-2 ">
        <span className="border  bg-[#B70A4C] dark:bg-black dark:border-primary-500 text-primary-100  border-current  flex justify-center h-8 w-8 rounded-full">
          {icon}
        </span>
      </Link>
    </div>
  );
};

export default DetailBadge;
