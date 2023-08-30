interface ICar {
  name: string;
  id: string;
  cost:number;
  MPG:number;
  seats:number;
  transition:"manual"|"automatic"
  image:string;
}
export default ICar;
