"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-4 md:flex-row items-center  relative justify-between w-full pt-20 mx-auto max-w-[1200px]   min-h-[300px]  px-4 ">
      <div className="w-full md:w-1/2 flex flex-col gap-8 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-title text-5xl font-bold capitalize">
            find,book,rent
          </h2>
          <h2 className="text-title text-5xl font-bold capitalize">
            a car quick and
          </h2>
          <h2 className="text-title text-5xl font-bold capitalize">
            super easy!
          </h2>
        </motion.div>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-title font-medium  max-w-[400px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit
          Nulla, eum.
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-title font-medium  max-w-[400px]"
        >
          <Button className="px-8 w-full max-w-[135px] py-3 !px-2">
            Explore cars
          </Button>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={"/hero.webp"}
            alt="car image "
            className="h-[!500px] w-[!500px]"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
      <div className="bg-primary absolute top-0 bottom-0  "></div>
    </section>
  );
};

export default Hero;
