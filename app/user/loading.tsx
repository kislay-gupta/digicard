import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />

        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default Loading;
