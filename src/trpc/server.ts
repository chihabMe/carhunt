import "server-only";

import {
  createTRPCProxyClient,
  loggerLink,
  TRPCClientError,
} from "@trpc/client";
import { callProcedure } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import { type TRPCErrorResponse } from "@trpc/server/rpc";
import { headers } from "next/headers";
import { cache } from "react";
import { transformer } from "./shred";

import { type AppRouter, appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

export const api = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    /**
     * Custom RSC link that lets us invoke procedures without using http requests. Since Server
     * Components always run on the server, we can just call the procedure as a function.
     */
    () => ({ op }) =>
      observable((observer) => {
        createContext()
          .then((ctx) => {
            return callProcedure({
              procedures: appRouter._def.procedures,
              path: op.path,
              rawInput: op.input,
              ctx,
              type: op.type,
            });
          })
          .then((data) => {
            observer.next({ result: { data } });
            observer.complete();
          })
          .catch((cause: TRPCErrorResponse) => {
            observer.error(TRPCClientError.from(cause));
          });
      }),
  ],
});
