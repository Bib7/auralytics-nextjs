import { postRouter } from "auralyticsnextjs/server/api/routers/post";
import { createTRPCRouter } from "auralyticsnextjs/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
