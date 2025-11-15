import Hero from "@/components/overview/hero/hero";
import { Trending, TopSellers } from "@/components/overview";

export default async function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <Hero />
      <TopSellers />
      <Trending />

      <div className="w-full h-[12rem]" />
    </div>
  );
}
