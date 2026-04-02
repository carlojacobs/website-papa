import { z } from "zod";
import { defineConfig, defineCollections } from "fumadocs-mdx/config";

const dateLike = z.union([
  z.string(),
  z.date(),
]);

const writingFrontmatterSchema = z.object({
  title: z.string().optional().default("Untitled"),
  created: dateLike,
  summary: z.string().optional().default(""),
  draft: z.boolean().optional().default(false),
  updated: dateLike.optional(),
});

export const writing = defineCollections({
  type: "doc",
  dir: "src/content/writing",
  schema: writingFrontmatterSchema,
});

export const pages = defineCollections({
  type: "doc",
  dir: "src/content/pages",
  schema: z.object({
    title: z.string().optional().default(""),
    description: z.string().optional().default(""),
  }),
});

export default defineConfig();
