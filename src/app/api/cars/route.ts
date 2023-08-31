import ICar from "@/interfaces/ICar";
import { getCars } from "@/services/cars";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: Request) => {
  const data = await getCars();
  console.log(data);
  return NextResponse.json(data);
};

// const getCars = async () => {
//   const cars: ICar[] = [
//     {
//       id: "1",
//       name: "toyota hilix",
//       cost: 50,
//       image: "/hero.png",
//       MPG: 22,
//       seats: 4,
//       transition: "manual",
//       builtYear: 2002,
//       engine: "fuel",
//     },
//     {
//       id: "2",
//       name: "honda accord",
//       cost: 44,
//       image: "/hero.png",
//       MPG: 20,
//       seats: 4,
//       transition: "automatic",
//       builtYear: 2022,
//       engine: "fuel",
//     },
//     {
//       id: "3",
//       name: "tesla model x",
//       cost: 55,
//       image: "/hero.png",
//       MPG: 20,
//       seats: 5,
//       transition: "automatic",
//       builtYear: 2022,
//       engine: "electric",
//     },
//     {
//       id: "4",
//       name: "ferrari",
//       cost: 85,
//       image: "/hero.png",
//       MPG: 30,
//       seats: 2,
//       transition: "automatic",
//       builtYear: 2015,
//       engine: "gas",
//     },
//     {
//       id: "5",
//       name: "toyota hilix",
//       cost: 50,
//       image: "/hero.png",
//       MPG: 22,
//       seats: 4,
//       transition: "manual",
//       builtYear: 2015,
//       engine: "gas",
//     },
//     {
//       id: "6",
//       name: "honda accord",
//       cost: 44,
//       image: "/hero.png",
//       MPG: 20,
//       seats: 4,
//       transition: "automatic",
//       builtYear: 2015,
//       engine: "gas",
//     },
//     {
//       id: "7",
//       name: "toyota prius",
//       cost: 55,
//       image: "/hero.png",
//       MPG: 24,
//       seats: 5,
//       transition: "automatic",
//       builtYear: 2015,
//       engine: "gas",
//     },
//     {
//       id: "8",
//       name: "ferrari",
//       cost: 85,
//       image: "/hero.png",
//       MPG: 30,
//       seats: 2,
//       transition: "automatic",
//       builtYear: 2015,
//       engine: "gas",
//     },
//   ];
//   return cars;
// };
