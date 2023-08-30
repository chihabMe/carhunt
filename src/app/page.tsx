import Hero from "@/components/pages/home/Hero";
import CarsList from "@/components/pages/home/carsList/CarsList";
import Filter from "@/components/pages/home/filter/Filter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <Hero />
      <Filter />
      <CarsList/>
    </main>
  );
}
