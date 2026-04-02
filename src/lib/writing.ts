import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { writing } from "fumadocs-mdx:collections/server";
import { toMillis } from "@/lib/date";

export const writingSource = loader({
  baseUrl: "/writing",
  source: toFumadocsSource(writing, []),
});

export function getPublishedPosts() {
  return writingSource
    .getPages()
    .filter((page) => !page.data.draft)
    .sort((a, b) => toMillis(b.data.created) - toMillis(a.data.created));
}
