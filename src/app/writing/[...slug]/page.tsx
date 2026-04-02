import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { writingSource } from "@/lib/writing";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { formatIsoDate } from "@/lib/date";
import { siteConfig } from "@/lib/site";

export default async function WritingPostPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = writingSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const wordCount = page.data.structuredData.contents
    .map((c: { content: string }) => c.content)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <article>
      <header className="article-header">
        <div className="article-date-row">
          <time className="article-date" dateTime={formatIsoDate(page.data.created)}>
            {formatIsoDate(page.data.created)}
          </time>
          <span className="marginalia">gelezen in ~{readMinutes} min</span>
        </div>
        <h1 className="article-title">{page.data.title}</h1>
        {page.data.summary && (
          <p className="article-summary">{page.data.summary}</p>
        )}
      </header>
      <div className="article-body">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(writingSource, page),
          })}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return writingSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = writingSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.summary || siteConfig.description,
  };
}
