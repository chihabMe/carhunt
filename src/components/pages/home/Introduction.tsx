"use client";
import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const infos = [
  {
    title: "We Check Car History",
    description:
      "Ensuring transparency by examining past accidents, repairs, and more.",
    image: "/home/info1.webp",
  },
  {
    title: "We Verify Previous Owners",
    description:
      "Providing insights into ownership history for informed decisions.",
    image: "/home/info2.webp",
  },
  {
    title: "We Assess Oil Quality",
    description:
      "Evaluating types and conditions of oils used for optimal performance.",
    image: "/home/info3.webp",
  },
  {
    title: "We Inspect Car Components",
    description:
      "Thorough examination of mechanical, electrical, and structural parts.",
    image: "/home/info4.webp",
  },
];
const Introduction = () => {
  return (
    <Container>
      <section className="">
        <div className="py-2 w-full max-w-screen-md mx-auto text-center flex flex-col gap-4">
          <h1 className="text-gray-700 py-4 capitalize font-bold text-4xl">
            We provide you with the best deals
          </h1>
          <p className=" text-gray-600  font-medium">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit sunt velit enim. Voluptate laboris sint cupidatat
            ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div className="grid grid-cols-2 pt-8 w-full max-w-screen-lg mx-auto gap-2 ">
          {infos.map((item, idx) => (
            <motion.div
              key={"info_" + idx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <InfoItem
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};
const InfoItem = (
  { title, description, image }: {
    title: string;
    description: string;
    image: string;
  },
) => {
  return (
    <li className="h-60 relative shadow shadow-sm  rounded-md list-none p-4  flex flex-col gap-2">
      <h1 className="text-gray-900 font-bold text-lg">
        {title}
      </h1>
      <p className="text-gray-700  max-w-[250px] ">
        {description}
      </p>
      <div className=" absolute bottom-0 right-0">
        <Image alt={`${title} image`} width={240} height={240} src={image} />
      </div>
    </li>
  );
};

export default Introduction;
