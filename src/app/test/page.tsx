import { api } from "@/trpc/server";
import React from "react";

export default async function TestPage() {
  const hello = await api.cars.getAll.query();
  return (
    <main>
      {hello && hello.message}
    </main>
  );
}
