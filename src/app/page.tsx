import Companies from "@/components/pages/home/Companies";
import Hero from "@/components/pages/home/Hero";
import Introduction from "@/components/pages/home/Introduction";
import Location from "@/components/pages/home/Location";
import Filter from "@/components/pages/home/filter/Filter";

export default function Home() {
  return (
    <main className="flex pt-4 min-h-screen flex-col items-center justify-between  ">
      <Hero />
      <Filter />
      <Introduction />
      <Companies />
      <Location />
    </main>
  );
}
