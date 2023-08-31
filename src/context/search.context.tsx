"use client";
import ICar from "@/interfaces/ICar";
import EngineTypes from "@/types/EngineType";
import {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";
interface SearchContextState {
  year: number|null;
  engine: EngineTypes|null;
  query: string;
  make: string;
  cars: ICar[];
  setYear: (value: number) => void;
  setEngine: (value: EngineTypes) => void;
  setQuery: (value: string) => void;
  setMake: (value: string) => void;
  isLoading: boolean;
  search: () => void;
}

const initialCars: ICar[] = [];

const initialState: SearchContextState = {
  engine: null,
  make: "make",
  query: "",
  year: null,
  cars: initialCars,
  setYear: () => {},
  setEngine: () => {},
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
  const [engine, setEngine] = useState(initialState.engine);
  const [query, setQuery] = useState(initialState.query);
  const [make, setMake] = useState(initialState.make);
  const [cars, setCars] = useState(initialState.cars);
  const [isLoading, setIsLoading] = useState(false);
  const search = () => {
    if (query.trim() == "") setCars(initialState.cars);
    else setCars((prev) => initialCars.filter((item) => item.name.includes(query)));
  };
  const handleChangeYear = () => {
    setCars((prev) => initialCars.filter((item) => item.builtYear == year));
  };
  const handleChangeEngine = () => {
    setCars((prev) => initialCars.filter((item) => item.engine == engine));
  };
//   useEffect(() => {
//     handleChangeYear();
//   }, [year, setYear]);

//   useEffect(() => {
//     handleChangeEngine();
//   }, [engine, setEngine]);

  const value: SearchContextState = {
    year,
    engine,
    query,
    make,
    setYear,
    setEngine,
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
export default useSearchContext;
