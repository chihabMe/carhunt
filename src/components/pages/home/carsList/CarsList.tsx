"use client";
import CarCard from "@/components/ui/CarCard";
import useSearchContext from "@/context/search.context";
import ICar from "@/interfaces/ICar";
import React, { useState } from "react";

const CarsList = () => {
    const {cars} = useSearchContext()
    console.log(cars)
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
