"use client";
import ICar from "@/interfaces/ICar";
import FuelType from "@/types/FuelType";
import { useSearchParams } from "next/navigation";
import {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";
interface SearchContextState {
  year: number | null;
  fuel: FuelType | null;
  query: string;
  make: string;
  cars: ICar[];
  setYear: (value: number) => void;
  setFuel: (value: FuelType) => void;
  setQuery: (value: string) => void;
  setMake: (value: string) => void;
  isLoading: boolean;
  search: () => void;
}

const initialCars: ICar[] = [];

const initialState: SearchContextState = {
  fuel: null,
  make: "make",
  query: "",
  year: null,
  cars: initialCars,
  setYear: () => {},
  setFuel: () => {},
  setQuery: () => {},
  setMake: () => {},
  isLoading: false,
  search: () => {},
};

export const SearchContext = createContext(initialState); // Remove the type argument

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [year, setYear] = useState(initialState.year);
  const [fuel, setFuel] = useState(initialState.fuel);
  const [query, setQuery] = useState(initialState.query);
  const [make, setMake] = useState(initialState.make);
  const [cars, setCars] = useState(initialState.cars);
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();

  const search = () => {
    if (query.trim() == "") setCars(initialState.cars);
    else
      setCars((prev) =>
        initialCars.filter((item) => item.model.includes(query)),
      );
  };

  useEffect(() => {
    const model = params.get("model");
    const year = params.get("year");
    const make = params.get("make");
    const fuel = params.get("fuel") as FuelType;
    if (model) setQuery(model);
    if (year) setYear(parseInt(year));
    if (make) setMake(make);
    if (fuel) setFuel(fuel);
  }, [params, setQuery, setYear, setMake, setFuel]);
  const value: SearchContextState = {
    year,
    fuel,
    query,
    make,
    setYear,
    setFuel,
    setQuery,
    setMake,
    search,
    cars,
    isLoading,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
