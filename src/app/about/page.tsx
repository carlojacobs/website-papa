import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { pagesSource } from "@/lib/pages";

export default function AboutPage() {
  const page = pagesSource.getPage(["about"]);
  if (!page) notFound();

  const MDX = page.data.body;
  return (
    <article>
      <header className="article-header">
        <h1 className="article-title">{page.data.titel || "Over"}</h1>
        {page.data.beschrijving && (
          <p className="article-summary">{page.data.beschrijving}</p>
        )}
      </header>
      <div className="article-body">
        <MDX components={getMDXComponents()} />
      </div>
    </article>
  );
}
