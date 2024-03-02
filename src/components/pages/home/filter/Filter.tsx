"use client";
import { MagnifyingGlassIcon, WrenchIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import FilterList from "./FilterList";
import { useSearchContext } from "@/context/search.context";
import { useRouter } from "next/navigation";
import queryBuilder from "@/lib/searchQueryBuilder";
import InputList from "@/components/ui/InputList";
import carsMakes from "@/data/makes.json";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const Filter = () => {
  return (
    <Container>
      <motion.div
        initial={{ y: 10, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <div className="flex  items-center w-full mx-auto max-w-screen-llg justify-between  gap-2 py-14   flex-wrap px-4 ">
          <FilterSearch />
          <FilterFilters />
        </div>
      </motion.div>
    </Container>
  );
};
const builtYears: any[] = ["year"];
for (let i = 0; i <= 23; i++) builtYears.push(2000 + i);
const fuelTypes = ["fuel", "gas", "fuel", "electric"];
const FilterFilters = () => {
  const { year, fuel, setFuel, setYear } = useSearchContext();
  return (
    <div className="flex relative gap-2">
      <FilterList
        selected={year}
        setSelected={setYear}
        choices={builtYears}
      />
      <FilterList selected={fuel} setSelected={setFuel} choices={fuelTypes} />
    </div>
  );
};
const FilterSearch = () => {
  const router = useRouter();
  const { query, year, fuel, search, make, setQuery, setMake } =
    useSearchContext();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    const a = 3;
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
      className="flex flex-col sm:flex-row py-2  items-center gap-2 bg-gray-100 rounded-lg sm:rounded-full px-2.5  sm:px-8 w-full max-w-[620px]   "
    >
      <div className="flex gap-4 items-center w-full">
        <WrenchIcon className="w-5 h-5 text-gray-500" />
        <input
          value={query}
          onChange={handleNameChange}
          type="text"
          name="query"
          placeholder="Car Name.."
          className="outline-none w-full h-10 sm:h-auto bg-transparent font-medium text-text  sm:w-44 lg:w-64"
        />
        <SearchButton />
      </div>
      <div className="flex gap-4 items-center w-full">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car image"
          className=""
        />
        <InputList
          selected={make}
          setItem={setMake}
          items={["make", ...carsMakes.makes]}
        />
      </div>
    </form>
  );
};
const SearchButton = () => {
  return (
    <Button
      name="search button"
      className="  !px-3 !py-3 !bg-light-bg  dark:!bg-dark-bg  !rounded-full group hover:!bg-primary transition-all duration-200"
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-white font-bold group-hover:text-white transition-all duration-200 " />
    </Button>
  );
};

export default Filter;
