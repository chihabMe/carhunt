import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initialReviews = [
  {
    user: "adam",
    body: "ipsum  amet sit dolor sit amet .. ",
    image: "/accounts/ceo.png",
  },
  {
    user: "mike",
    body: "Lorem ipsum dolor sit amet .. ",
    image: "/accounts/ceo.png",
  },
  {
    user: "stiven",
    body: "ipsum  dolor sit amet .. ",
    image: "/accounts/ceo.png",
  },
];

const LoginReviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reviewsInterval = setInterval(() => {
      setCurrent((prev) => (prev < initialReviews.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(reviewsInterval);
  }, []);

  const review = initialReviews[current];

  return (
    <div className="">
      <AnimatePresence>
        <motion.div
          key={`idx${current}`}
          className="flex gap-4 items-center"
          initial={{ y: 20, opacity: 0 }}
          exit={{ y: -20, opacity: 0, transition: { duration: 0 } }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={review.image}
            alt={`${review.user} image`}
            width={54}
            height={54}
          />
          <div className="min-w-[300px] ">
            <h2 className="text-white  capitalize font-bold">
              {review.user}
            </h2>
            <p className="text-white ">
              {review.body}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoginReviews;
