import { z } from 'zod';
import { publicProcedure, router } from '../trpc';


const demoObject = z.object({
    name: z.string(),
});

export const demoRouter = router({
    demo: publicProcedure.input(demoObject).query(({ input }) => {
        return `Hello ${input.name}`;
    }),
});