import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <Container>
      <section className="flex justify-between w-full py-20 ">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="text-4xl text-gray-900 pb-4 capitalize font-bold">
            where to find us ?
          </h1>
          <p className="text-gray-700 max-w-[500px]">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <div className="w-1/2  flex justify-end">
          <Image
            src="/home/map.webp"
            alt="location map"
            width={500}
            height={420}
          />
        </div>
      </section>
    </Container>
  );
};

export default Location;
