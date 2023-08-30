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
  year: number;
  engine: EngineTypes;
  query: string;
  model: string;
  cars: ICar[];
  setYear: (value: number) => void;
  setEngine: (value: EngineTypes) => void;
  setQuery: (value: string) => void;
  setModel: (value: string) => void;
  isLoading: boolean;
  search: (value: string) => void;
}

const initialCars: ICar[] = [
  {
    id: "1",
    name: "toyota hilix",
    cost: 50,
    image: "/hero.png",
    MPG: 22,
    seats: 4,
    transition: "manual",
    builtYear: 2002,
    engine: "fuel",
  },
  {
    id: "2",
    name: "honda accord",
    cost: 44,
    image: "/hero.png",
    MPG: 20,
    seats: 4,
    transition: "automatic",
    builtYear: 2022,
    engine: "fuel",
  },
  {
    id: "3",
    name: "tesla model x",
    cost: 55,
    image: "/hero.png",
    MPG: 20,
    seats: 5,
    transition: "automatic",
    builtYear: 2022,
    engine: "electric",
  },
  {
    id: "4",
    name: "ferrari",
    cost: 85,
    image: "/hero.png",
    MPG: 30,
    seats: 2,
    transition: "automatic",
    builtYear: 2015,
    engine: "gas",
  },
  {
    id: "5",
    name: "toyota hilix",
    cost: 50,
    image: "/hero.png",
    MPG: 22,
    seats: 4,
    transition: "manual",
    builtYear: 2015,
    engine: "gas",
  },
  {
    id: "6",
    name: "honda accord",
    cost: 44,
    image: "/hero.png",
    MPG: 20,
    seats: 4,
    transition: "automatic",
    builtYear: 2015,
    engine: "gas",
  },
  {
    id: "7",
    name: "toyota prius",
    cost: 55,
    image: "/hero.png",
    MPG: 24,
    seats: 5,
    transition: "automatic",
    builtYear: 2015,
    engine: "gas",
  },
  {
    id: "8",
    name: "ferrari",
    cost: 85,
    image: "/hero.png",
    MPG: 30,
    seats: 2,
    transition: "automatic",
    builtYear: 2015,
    engine: "gas",
  },
];

const initialState: SearchContextState = {
  engine: "fuel",
  model: "Model",
  query: "",
  year: 0,
  cars: initialCars,
  setYear: () => {},
  setEngine: () => {},
  setQuery: () => {},
  setModel: () => {},
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
  const [model, setModel] = useState(initialState.model);
  const [cars, setCars] = useState(initialState.cars);
  const [isLoading, setIsLoading] = useState(false);
  const search = () => {
    setCars((prev) => prev.filter((item) => item.name.includes(query)));
  };
  const handleChangeYear = () => {
    setCars((prev) => prev.filter((item) => item.builtYear == year));
  };
  const handleChangeEngine = () => {
    setCars((prev) => prev.filter((item) => item.engine == engine));
  };
  useEffect(() => {
    handleChangeYear();
  }, [year, setYear]);

  useEffect(() => {
    handleChangeEngine();
  }, [engine, setEngine]);

  const value:SearchContextState = {
    year,
    engine,
    query,
    model,
    setYear,
    setEngine,
    setQuery,
    setModel,
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
