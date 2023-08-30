import ICar from "@/interfaces/ICar";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const getCars = async () => {
  const cars: ICar[] = [
    { id: "1", name: "toyota hilix" },
    { id: "2", name: "honda" },
    { id: "3", name: "acord" },
    { id: "4", name: "toyota pruis" },
  ];
  return cars;
};

export const GET = async (req: NextApiRequest) => {
  const data = await getCars();
  const response = new NextResponse();
  return JSON.stringify(data)
};
