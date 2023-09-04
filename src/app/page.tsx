import Hero from "@/components/pages/home/Hero";
import Filter from "@/components/pages/home/filter/Filter";

export default function Home() {
  return (
    <main className="flex pt-4 min-h-screen flex-col items-center justify-between  ">
      <Hero />
      <Filter />
    </main>
  );
}
