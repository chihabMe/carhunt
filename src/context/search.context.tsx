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

const SearchContext = createContext<SearchContextState | undefined>(undefined); // Remove default value

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [year, setYear] = useState<number | null>(null);
  const [fuel, setFuel] = useState<FuelType | null>(null);
  const [query, setQuery] = useState<string>("");
  const [make, setMake] = useState<string>("make");
  const [cars, setCars] = useState<ICar[]>(initialCars);
  const [isLoading, setIsLoading] = useState(false);

  const params = useSearchParams();

  // Simulated search function
  const search = () => {
    setIsLoading(true);
    if (query.trim() === "") {
      setCars(initialCars);
    } else {
      setCars(initialCars.filter((item) => item.model.includes(query)));
    }
    setIsLoading(false);
  };

  // Sync params with state
  useEffect(() => {
    const model = params.get("model");
    const year = params.get("year");
    const make = params.get("make");
    const fuel = params.get("fuel") as FuelType;

    if (model) setQuery(model);
    if (year) setYear(parseInt(year));
    if (make) setMake(make);
    if (fuel) setFuel(fuel);
  }, [params]);

  const value = {
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
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchContextProvider");
  }
  return context;
};
