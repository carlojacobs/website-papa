import { z } from "zod";
import { defineConfig, defineCollections } from "fumadocs-mdx/config";

const dateLike = z.union([
  z.string(),
  z.date(),
]);

const writingFrontmatterSchema = z.object({
  titel: z.string().optional().default("Untitled"),
  datum: dateLike,
  samenvatting: z.string().optional().default(""),
  concept: z.boolean().optional().default(false),
  bijgewerkt: dateLike.optional(),
}).transform((d) => ({ ...d, title: d.titel }));

export const writing = defineCollections({
  type: "doc",
  dir: "ARTIKELEN",
  schema: writingFrontmatterSchema,
});

export const pages = defineCollections({
  type: "doc",
  dir: "src/content/pages",
  schema: z.object({
    titel: z.string().optional().default(""),
    beschrijving: z.string().optional().default(""),
  }).transform((d) => ({ ...d, title: d.titel, description: d.beschrijving })),
});

export default defineConfig();
