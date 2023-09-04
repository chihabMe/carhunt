"use client";
import { Next13ProgressBar } from "next13-progressbar";
import React, { ReactNode } from "react";

const ProgressBarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Next13ProgressBar color="#2c5aff" showOnShallow />

      {children}
    </>
  );
};

export default ProgressBarProvider;
