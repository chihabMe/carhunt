import { carsRouter } from "./routers/cars";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  cars: carsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
