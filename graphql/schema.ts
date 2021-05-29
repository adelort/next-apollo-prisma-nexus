import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { join } from "path";
import { db } from "./db";
import * as types from "./resolvers";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "../generated/schema.graphql"),
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      prismaClient: (ctx) => (ctx.prisma = db),
    }),
  ],
});
