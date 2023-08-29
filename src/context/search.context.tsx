"use client";
import { ReactNode, useContext, useState, createContext } from "react";
type EngineTypes = "gas" | "fuel" | "electric"
interface SearchContextState {
  year: number;
  engine: EngineTypes;
  query: string;
  model: string;
  setYear: (value: string) => void;
  setEngine: (value: EngineTypes) => void;
  setQuery: (value: string) => void;
  setModel: (value: string) => void;
}

const initialState: SearchContextState = {
  engine: "fuel",
  model: "Model",
  query: "",
  year: 0,
  setYear: () => {},
  setEngine: () => {},
  setQuery: () => {},
  setModel: () => {},
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
  const value = {
    year,
    engine,
    query,
    model,
    setYear,
    setEngine,
    setQuery,
    setModel,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
export default useSearchContext;
