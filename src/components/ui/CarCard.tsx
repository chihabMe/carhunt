import ICar from "@/interfaces/ICar";
import React from "react";
import Button from "./Button";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import calculateDailyCarRentalCost from "@/utils/calculateCarCost";
import CarDetailsModal from "@/components/modals/CarDetailsModal";
interface Props {
  car: ICar;
}
const CarCard = (props: Props) => {
  const dailyCost = calculateDailyCarRentalCost(
    50,
    props.car.year,
    (props.car.cityMpg + props.car.highwayMpg) / 2,
  ).toFixed(0);
  return (
    <div className="rounded-2xl cursor-pointer py-6 px-4 bg-gray-100 group hover:bg-light-bg  transition-all duration-300 hover:shadow-md  ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold  capitalize text-title">
          {props.car.make} {props.car.model}
        </h3>
        <Button className="bg-transparent transition-all duration-300 active:!ring-red-400 group !p-1 rounded-full">
          <HeartIcon className="w-6 h-6  transition-all duration-300  group-active:text-red-400 text-gray-400" />
        </Button>
      </div>
      <div className="text-text text-sm flex items-center font-medium">
        <span>$</span>
        <span className="text-title font-bold text-2xl">{dailyCost}</span>
        <span>/day</span>
      </div>
      <div className="w-full flex justify-center py-2">
        <Image
          alt={`${props.car.model} image`}
          className="w-[190px] h-[130px]"
          width={200}
          height={200}
          src={props.car.image ?? "/hero.png"}
        />
      </div>
      <div className="min-h-[40px]">
        <div className="flex  justify-around gap-2 text-title text-xs font-medium py-4  capitalize md:group-hover:hidden transition-all duration-300">
          <div className="flex flex-col gap-2 items-center justify-center ">
            <span className="font-bold">built year</span>
            <span>{props.car.year}</span>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center ">
            <span className="font-bold">transition</span>
            <span>{props.car.transmission}</span>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center ">
            <span className="font-bold">city/highway</span>
            <span>
              {props.car.cityMpg}/{props.car.highwayMpg}
            </span>
          </div>
        </div>
        <div className="w-full justify-center md:hidden group-hover:flex transition-all duration-300 py-2.5">
          <CarDetailsModal car={props.car} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
