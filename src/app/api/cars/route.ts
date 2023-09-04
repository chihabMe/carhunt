import ICar from "@/interfaces/ICar";
import { getCars } from "@/services/cars";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: Request) => {
  const data = await getCars();
  console.log(data);
  return NextResponse.json(data);
};
