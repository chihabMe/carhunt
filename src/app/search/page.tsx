import CarsList from "@/components/pages/home/carsList/CarsList";
import Filter from "@/components/pages/home/filter/Filter";
import FilterList from "@/components/pages/home/filter/FilterList";
import CarCard from "@/components/ui/CarCard";
import ICar from "@/interfaces/ICar";
import queryBuilder from "@/lib/searchQueryBuilder";
import EngineTypes from "@/types/EngineType";
import camelize from "camelize-ts";
import React from "react";
const getCars = async (params: Record<string, string>): Promise<ICar[]> => {
  const options = {
    headers: {
      "X-Api-Key": process.env.NINJASCARKEY ?? "",
    },
  };
  const query = queryBuilder({ limit: 10, model: " ", ...params });
  const url = `https://api.api-ninjas.com/v1/cars${query}`;
  console.log(options);
  console.log(url);
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
interface SearchProps {
  searchParams: Record<string, string>;
}
const SearchPage = async ({ searchParams }: SearchProps) => {
  const cars = camelize(await getCars(searchParams));
  return (
    <main className="py-4">
      <Filter mode="ssr" />
      <section className="w-full max-w-screen-llg mx-auto ">
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cars?.map((item) => (
            <li key={item.id}>
              <CarCard car={item} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default SearchPage;
