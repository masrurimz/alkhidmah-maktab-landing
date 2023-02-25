import { maktab } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const maktabRouter = createTRPCRouter({
  findAll: publicProcedure
    .input(
      z.object({
        query: z.string().optional(),
        limit: z.number(),
        cursor: z.string().nullish(),
        skip: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { limit, skip, cursor } = input;

      let items: maktab[] = [];
      const query = input.query?.toLowerCase().trim();

      if (query) {
        items = await ctx.prisma.maktab.findMany({
          take: limit + 1,
          skip: skip,
          cursor: cursor ? { id: cursor } : undefined,
          orderBy: {
            id: "asc",
          },
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
      } else {
        items = await ctx.prisma.maktab.findMany({
          take: limit + 1,
          skip: skip,
          cursor: cursor ? { id: cursor } : undefined,
          orderBy: {
            id: "asc",
          },
        });
      }

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        // return the last item from the array
        // and also remove it from items array
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }
      return {
        items,
        nextCursor,
      };
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
