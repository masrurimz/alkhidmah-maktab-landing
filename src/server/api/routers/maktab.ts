import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const maktabRouter = createTRPCRouter({
  findAll: publicProcedure
    .input(
      z.object({
        query: z.string().optional(),
        page: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      const take = 10;
      const skip = input.page * take;

      const query = input.query?.toLowerCase().trim();

      if (query) {
        return ctx.prisma.maktab.findMany({
          take,
          skip,
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
      }

      return ctx.prisma.maktab.findMany({
        take,
        skip,
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
  checkinById: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const maktab = await ctx.prisma.maktab.findUnique({
        where: {
          id: input,
        },
      });

      if (!maktab) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Maktab with id:${input} could not be found`,
        });
      }

      const { id, checkInAt, ...data } = maktab;
      return ctx.prisma.maktab.update({
        where: {
          id: input,
        },
        data: {
          ...data,
          checkInAt: new Date(),
        },
      });
    }),
});
