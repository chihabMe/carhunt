import EngineTypes from "@/types/EngineType";

interface ICar {
  name: string;
  id: string;
  cost:number;
  MPG:number;
  seats:number;
  transition:"manual"|"automatic"
  image:string;
  builtYear:number;
  engine:EngineTypes
}
export default ICar;
