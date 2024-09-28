import Header from "@/components/layout/Header";
import Filter from "@/components/pages/home/filter/Filter";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen py-4">
        <Filter />
        {children}
      </main>
    </>
  );
};

export default layout;
