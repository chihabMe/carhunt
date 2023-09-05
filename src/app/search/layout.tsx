import Filter from "@/components/pages/home/filter/Filter";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen py-4">
      <Filter />
      {children}
    </main>
  );
};

export default layout;
