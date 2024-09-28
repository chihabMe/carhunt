import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
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
  if (params.model.trim().length == 0) params.model = encodeURIComponent(" ");
  const query = queryBuilder({
    ...params,
    limit: 10,
  });
  const url = `https://api.api-ninjas.com/v1/cars${query}`;
    const response = await fetch(url, { ...options, cache: "no-store" });
    return response.json() as Promise<ICar[]>;
};
interface SearchProps {
  searchParams: Record<string, string>;
}
const SearchPage = async ({ searchParams }: SearchProps) => {
  let cars: ICar[] = [];
  try {
    cars = camelize(await getCars(searchParams));
  } catch (err) {
    return <h1 className="text-red-400 font-bold text-center">error</h1>;
  }
  return (
    <>
      <Container>
        <section className="w-full max-w-screen-llg mx-auto px-2 ">
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cars?.map((item) => (
              <li key={item.id}>
                <CarCard car={item} />
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
};

export default SearchPage;
