import { createTRPCRouter, publicProcedure } from "../trpc";

export const carsRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return { message: "success" };
  }),
});
