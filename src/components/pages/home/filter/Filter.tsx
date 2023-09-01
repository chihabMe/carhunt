"use client";
import Button from "@/components/ui/Button";
import { MagnifyingGlassIcon, WrenchIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import FilterList from "./FilterList";
import { useSearchContext } from "@/context/search.context";
import { usePathname, useRouter } from "next/navigation";
import queryBuilder from "@/lib/searchQueryBuilder";

const Filter = () => {
  return (
    <div className="flex items-center w-full mx-auto max-w-screen-llg justify-between  gap-2 py-4 ">
      <FilterSearch />
      <FilterFilters />
    </div>
  );
};
const builtYears: any[] = ["year"];
for (let i = 0; i <= 23; i++) builtYears.push(2000 + i);
const fuelTypes = ["fuel", "gas", "fuel", "electric"];
const FilterFilters = () => {
  const { year, fuel, setFuel, setYear } = useSearchContext();

  return (
    <div className="flex relative gap-2">
      <FilterList selected={year} setSelected={setYear} choices={builtYears} />
      <FilterList selected={fuel} setSelected={setFuel} choices={fuelTypes} />
    </div>
  );
};
const makes = ["mazda", "toyota", "ferrari"];
const FilterSearch = () => {
  const router = useRouter();
  const { query, year, fuel, search, make, setQuery, setMake } =
    useSearchContext();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newQuery = queryBuilder({
      model: query.trim() == "" ? " " : query,
      year,
      //@ts-ignore
      fuel_type: fuel == "fuel" ? null : fuel,
      make: make == "make" ? null : make,
    });
    router.push(`/search${newQuery}`);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex py-2  items-center gap-2 bg-gray-100 rounded-full px-8 max-w-[680px]"
    >
      <div className="flex gap-4 items-center">
        <WrenchIcon className="w-5 h-5 text-gray-500" />
        <input
          value={query}
          onChange={handleNameChange}
          type="text"
          name="query"
          placeholder="Car Name.."
          className="outline-none bg-transparent font-medium text-text"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car image"
          className=""
        />
        <FilterList
          className="bg-transparent outline-none  shadow-none"
          choices={makes}
          selected={make}
          setSelected={setMake}
        />

        <SearchButton />
      </div>
    </form>
  );
};
const SearchButton = () => {
  return (
    <Button className="  !px-2.5 !py-2.5 !bg-light-bg  dark:!bg-dark-bg  !rounded-full group hover:!bg-primary transition-all duration-200">
      <MagnifyingGlassIcon className="w-5 h-5 text-primary font-bold group-hover:text-white transition-all duration-200 " />
    </Button>
  );
};

export default Filter;
