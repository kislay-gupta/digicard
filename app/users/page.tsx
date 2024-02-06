import { getAllUser } from "@/lib/action/user.action";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const results = await getAllUser({});
  console.log(results, "all user");
  return (
    <div className="flex flex-col gap-2 mt-11">
      {results.users.toReversed().map((data) => (
        <Link href={`/user/${data._id}`} key={data._id}>
          {data.fullName}
        </Link>
      ))}
    </div>
  );
};

export default Page;
