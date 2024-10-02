// Import necessary components and libraries
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define initial data for the login reviews section

const initialReviews = [
  {
    user: "Aaliyah",
    body:
      "Smooth ride, great fuel efficiency! Highly recommend the Toyota Camry.",
    image: "/accounts/ceo.png",
  },
  {
    user: "Ethan",
    body:
      "Honda Civic is a solid choice. Responsive handling and infotainment system make it a winner!",
    image: "/accounts/ceo.png",
  },
  {
    user: "Lily",
    body:
      "Used car review: Great condition, low mileage. Previous owner was kind to the vehicle.",
    image: "/accounts/ceo.png",
  },
  {
    user: "Noah",
    body:
      "Subaru Outback is a great choice for rough roads. All-wheel drive system is impressive!",
    image: "/accounts/ceo.png",
  },
  {
    user: "Olivia",
    body:
      "Impressive features, unbeatable price! Worth considering the Subaru Outback.",
    image: "/accounts/ceo.png",
  },
  {
    user: "Ava",
    body:
      "Recall history matters! Double-check before buying, and save yourself from costly mistakes.",
    image: "/accounts/ceo.png",
  },
];

// LoginReviews component
const LoginReviews = () => {
  // State for the current review index
  const [current, setCurrent] = useState(0);

  // Use effect to change the review every 3 seconds
  useEffect(() => {
    const reviewsInterval = setInterval(() => {
      setCurrent((prev) => (prev < initialReviews.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(reviewsInterval);
  }, []);

  // Get the current review
  const review = initialReviews[current];

  return (
    <div className="flex flex-col items-center justify-between">
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
          <div className="min-w-[300px]">
            <h2 className="text-white capitalize font-bold">{review.user}</h2>
            <p className="text-white">{review.body}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoginReviews;