import EngineTypes from "@/types/EngineType";

interface ICar {
  id: string;
  cityMpg: number;
  highwayMpg: number;
  class: string;
  combinationMpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuelType: EngineTypes;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
  image?: string;
}

export default ICar;

// interface ICar {
//   name: string;
//   id: string;
//   cost: number;
//   MPG: number;
//   seats: number;
//   transition: "manual" | "automatic";
//   image: string;
//   builtYear: number;
//   engine: EngineTypes;
// }
