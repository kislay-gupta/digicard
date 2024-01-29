import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  detail: string;
  icon: ReactNode;
  detailLink: string;
}
const DetailBadge = ({ detail, detailLink, icon }: Props) => {
  return (
    <div className="flex items-center ">
      <span className="border bg-primary-100 dark:bg-black dark:border-primary-500 dark:text-primary-100  border-accent  flex justify-center h-8 w-8 rounded-full">
        {icon}
      </span>

      <Link href={`${detailLink}`} target="_blank" className="ml-2">
        {detail}
      </Link>
    </div>
  );
};

export default DetailBadge;
