import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { writingSource } from "@/lib/writing";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { formatIsoDate, formatLongDate } from "@/lib/date";
import { siteConfig } from "@/lib/site";

export default async function WritingPostPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  const page = writingSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="paper-panel">
      <header className="mb-8 border-b border-[var(--line-soft)] pb-5">
        <p className="meta-label mb-3">Blog post</p>
        <time className="date-stamp" dateTime={formatIsoDate(page.data.created)}>
          {formatLongDate(page.data.created)}
        </time>
        <h1 className="page-title mt-3">{page.data.title}</h1>
        {page.data.summary ? (
          <p className="page-intro mt-4">{page.data.summary}</p>
        ) : null}
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
