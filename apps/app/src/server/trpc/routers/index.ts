import { router } from '../trpc';
import { demoRouter } from './demo';

export const appRouter = router({
  demo: demoRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
