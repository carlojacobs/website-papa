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

  return (
    <article>
      <header className="article-header">
        <time className="article-date" dateTime={formatIsoDate(page.data.created)}>
          {formatIsoDate(page.data.created)}
        </time>
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
