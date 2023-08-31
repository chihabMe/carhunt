"use client";
import Button from "@/components/ui/Button";
import { MagnifyingGlassIcon, WrenchIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import FilterList from "./FilterList";
import useSearchContext from "@/context/search.context";
import { usePathname, useRouter } from "next/navigation";
import queryBuilder from "@/lib/searchQueryBuilder";

const Filter = ({ mode }: { mode: "ssr" | "csr" }) => {
  return (
    <div className="flex items-center w-full mx-auto max-w-screen-llg justify-between  gap-2 py-4 ">
      <FilterSearch mode={mode} />
      <FilterFilters />
    </div>
  );
};
const builtYears = ["year", 2001, 2002, 2003];
const engineType = ["engine", "gas", "fuel", "electric"];
const FilterFilters = () => {
  const { year, engine, setEngine, setYear } = useSearchContext();

  return (
    <div className="flex relative gap-2">
      <FilterList selected={year} setSelected={setYear} choices={builtYears} />
      <FilterList
        selected={engine}
        setSelected={setEngine}
        choices={engineType}
      />
    </div>
  );
};
const makes = ["mazda", "toyota", "ferrari"];
const FilterSearch = ({ mode }: { mode: "ssr" | "csr" }) => {
  const router = useRouter();
  const { query, year, engine, search, make, setQuery, setMake } =
    useSearchContext();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newQuery = queryBuilder({
      model: query,
      year,
      //@ts-ignore
      fuel_type: engine == "engine" ? null : engine,
      make: make == "make" ? null : make,
    });
    if (mode == "csr") search();
    else router.push(`/search${newQuery}`);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex py-2  items-center gap-2 bg-gray-100 rounded-full px-8 max-w-[680px]"
    >
      <div className="flex gap-4 items-center">
        <WrenchIcon className="w-5 h-5 text-gray-500" />
        <input
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
