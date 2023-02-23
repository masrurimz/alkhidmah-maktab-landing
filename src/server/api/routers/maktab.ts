import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const maktabRouter = createTRPCRouter({
  findAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.maktab.findMany({
      take: 20,
    });
  }),
  findByContingent: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      const query = input.toLocaleLowerCase();

      return ctx.prisma.maktab.findMany({
        where: {
          OR: [
            {
              contingentAddress: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              contingentCoordinatorName: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              contingentCoordinatorPhone: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
      });
    }),
});
