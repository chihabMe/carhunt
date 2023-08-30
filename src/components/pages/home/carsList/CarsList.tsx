"use client";
import CarCard from "@/components/ui/CarCard";
import ICar from "@/interfaces/ICar";
import React, { useState } from "react";

const initialCars: ICar[] = [
  {
    id: "1",
    name: "toyota hilix",
    cost: 50,
    image: "/hero.png",
    MPG: 22,
    seats: 4,
    transition: "manual",
  },
  {
    id: "2",
    name: "honda accord",
    cost: 44,
    image: "/hero.png",
    MPG: 20,
    seats: 4,
    transition: "automatic",
  },
  {
    id: "3",
    name: "toyota prius",
    cost: 55,
    image: "/hero.png",
    MPG: 24,
    seats: 5,
    transition: "automatic",
  },
  {
    id: "4",
    name: "ferrari",
    cost: 85,
    image: "/hero.png",
    MPG: 30,
    seats: 2,
    transition: "automatic",
  },
  {
    id: "5",
    name: "toyota hilix",
    cost: 50,
    image: "/hero.png",
    MPG: 22,
    seats: 4,
    transition: "manual",
  },
  {
    id: "6",
    name: "honda accord",
    cost: 44,
    image: "/hero.png",
    MPG: 20,
    seats: 4,
    transition: "automatic",
  },
  {
    id: "7",
    name: "toyota prius",
    cost: 55,
    image: "/hero.png",
    MPG: 24,
    seats: 5,
    transition: "automatic",
  },
  {
    id: "8",
    name: "ferrari",
    cost: 85,
    image: "/hero.png",
    MPG: 30,
    seats: 2,
    transition: "automatic",
  },
];

const CarsList = () => {
  const [cars, setCars] = useState<ICar[]>(initialCars);
  return (
    <section className="w-full max-w-screen-llg mx-auto ">
      <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map((item) => (
          <li key={item.id}>
            <CarCard car={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CarsList;
