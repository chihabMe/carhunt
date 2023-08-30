import ICar from "@/interfaces/ICar";
import React from "react";
import Button from "./Button";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
interface Props {
  car: ICar;
}
const CarCard = (props: Props) => {
  return (
    <div className="rounded-2xl cursor-pointer py-6 px-4 bg-gray-100">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg capitalize text-title">
          {props.car.name}
        </h3>
        <Button className="bg-transparent transition-all duration-150 active:!ring-red-400 group !p-1 rounded-full">
          <HeartIcon className="w-6 h-6  transition-all duration-150  group-active:text-red-400 text-gray-400" />
        </Button>
      </div>
      <div className="text-text text-sm flex items-center font-medium">
        <span>$</span>
        <span className="text-title font-bold text-2xl">{props.car.cost}</span>
        <span>/day</span>
      </div>
      <div className="w-full flex justify-center py-2">
        <Image
          alt={`${props.car.name} image`}
          className="object-contain"
          width={200}
          height={200}
          src={props.car.image}
        />
      </div>
      <div className="flex justify-around gap-2 text-title text-sm py-4 font-medium capitalize">
        <div className="flex flex-col gap-2">
          <span>{props.car.seats} seats</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>{props.car.transition}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>{props.car.MPG}MPG</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
