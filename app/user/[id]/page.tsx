import OtherCard from "@/components/card/OtherCard";
import UserCard from "@/components/card/UserCard";
import { getUserById } from "@/lib/action/user.action";

import { Suspense } from "react";
interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
export default async function Page({ params, searchParams }: URLProps) {
  
  const result = await getUserById({ userId: params.id });
  
  return (
    <div className="grid overflow-auto grid-cols-1 content-center md:h-screen">
      <OtherCard data={result.user} />
    </div>
  );
}
