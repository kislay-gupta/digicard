import LaptopView from "@/components/LaptopView";
import UserCard from "@/components/card/UserCard";
import { getUserById } from "@/lib/action/user.action";

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getUserById("65b616c17f0d9deec4b15eea");
  console.log(result, "test");
  return (
    <div className="grid grid-cols-1 content-center md:h-screen">
      <UserCard data={result.user} />
      <LaptopView />
    </div>
  );
}
