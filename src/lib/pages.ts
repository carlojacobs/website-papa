import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { pages } from "fumadocs-mdx:collections/server";

export const pagesSource = loader({
  baseUrl: "/",
  source: toFumadocsSource(pages, []),
});
