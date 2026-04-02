import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { pagesSource } from "@/lib/pages";

export default function AboutPage() {
  const page = pagesSource.getPage(["about"]);
  if (!page) notFound();

  const MDX = page.data.body;
  return (
    <section className="paper-panel">
      <p className="meta-label mb-3">About</p>
      <h1 className="page-title mb-5">{page.data.title || "About"}</h1>
      <div className="article-body">
        <MDX components={getMDXComponents()} />
      </div>
    </section>
  );
}
