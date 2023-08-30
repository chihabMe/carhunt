"use client";
import Button from "@/components/ui/Button";
import { MagnifyingGlassIcon, WrenchIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import FilterList from "./FilterList";
import useSearchContext from "@/context/search.context";

const Filter = () => {
  return (
    <div className="flex items-center w-full mx-auto max-w-screen-llg justify-between  gap-2 py-4 ">
      <FilterSearch />
      <FilterFilters />
    </div>
  );
};
const FilterFilters = () => {
  const builtYears = [2001, 2002, 2003];
  const engineType = ["gas", "fuel", "electric"];
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
const models = ["mazda", "toyota", "ferrari"];
const FilterSearch = () => {
  const { query, search, model, setQuery, setModel } = useSearchContext();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("r")
    search();
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
          name="name"
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
          choices={models}
          selected={model}
          setSelected={setModel}
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
