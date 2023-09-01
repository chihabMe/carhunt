import CarsList from "@/components/pages/home/carsList/CarsList";
import CarCard from "@/components/ui/CarCard";
import ICar from "@/interfaces/ICar";
import queryBuilder from "@/lib/searchQueryBuilder";
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
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("unable to fetch data");
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
  let cars: ICar[] = [];
  try {
    cars = camelize(await getCars(searchParams));
  } catch (err) {
    return (
      <main>
        <h1 className="text-red-400 font-bold text-center">error</h1>
      </main>
    );
  }
  return (
    <>
      <section className="w-full max-w-screen-llg mx-auto ">
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cars?.map((item) => (
            <li key={item.id}>
              <CarCard car={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SearchPage;