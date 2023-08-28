import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Container } from "postcss";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-4 md:flex-row items-center  relative justify-between w-full pt-20 mx-auto max-w-[1200px]   min-h-[300px]  px-4 ">
      <div className="w-full md:w-1/2 flex flex-col gap-8 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-title text-5xl font-bold capitalize">
            find,book,rent
          </h2>
          <h2 className="text-title text-5xl font-bold capitalize">
            a car quick and
          </h2>
          <h2 className="text-title text-5xl font-bold capitalize">
            super easy!
          </h2>
        </div>
        <p className="text-title font-medium  max-w-[400px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit
          Nulla, eum.
        </p>
        <Button className="max-w-[135px] py-3 !px-2">Explore cars</Button>
      </div>
      <div>
        <div className="">
          <Image
            src={"/hero.png"}
            alt="car image "
            className=""
            width={700}
            height={700}
          />
        </div>
        <div className="bg-primary absolute top-0 bottom-0  "></div>
      </div>
    </section>
  );
};

export default Hero;
