import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <Container>
      <section className="flex w-full   justify-between  py-20   ">
        <div className="flex gap-2  flex-col">
          <h1 className="text-gray-900  font-bold py-4 capitalize text-4xl">
            we only choose the best cars
            <br />
            for you
          </h1>
          <p className="text-gray-700 max-w-[500px]">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          </p>
          <p className="text-gray-700 max-w-[500px]">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint

            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          </p>
        </div>
        <div className="relative  h-[300px]  w-1/2 max-w-[400px]">
          <Image
            className="absolute top-1 right-1"
            width={100}
            height={100}
            alt="manufacture 1 image"
            src="/home/manufacture1.webp"
          />
          <Image
            className="absolute bottom-1 left-1"
            width={100}
            height={100}
            alt="manufacture 2 image"
            src="/home/manufacture2.webp"
          />
          <Image
            className="absolute bottom-1 right-1"
            width={100}
            height={100}
            alt="manufacture 3 image"
            src="/home/manufacture3.webp"
          />
          <Image
            className="absolute top-1 left-1 "
            width={100}
            height={100}
            alt="manufacture 4 image"
            src="/home/manufacture4.webp"
          />
          <Image
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            width={100}
            height={100}
            alt="manufacture 5 image"
            src="/home/manufacture5.webp"
          />
        </div>
      </section>
    </Container>
  );
};

export default Companies;
