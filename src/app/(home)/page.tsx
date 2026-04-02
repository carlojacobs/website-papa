import Link from "next/link";
import { getPublishedPosts } from "@/lib/writing";
import { formatIsoDate, formatLongDate } from "@/lib/date";

export default function HomePage() {
  const posts = getPublishedPosts();
  const featured = posts[0] ?? null;
  const archive = posts.slice(1);

  return (
    <>
      {featured && (
        <Link href={featured.url} className="featured-section featured-block">
          <span className="marginalia featured-flare">nieuwste stuk →</span>
          <p className="featured-meta">
            <span className="section-label-inline">Meest recent</span>
            <span className="featured-meta-sep"> — </span>
            <time dateTime={formatIsoDate(featured.data.datum)}>
              {formatLongDate(featured.data.datum)}
            </time>
          </p>
          <span className="featured-title">
            {featured.data.titel}
          </span>
          {featured.data.samenvatting && (
            <p className="featured-summary">{featured.data.samenvatting}</p>
          )}
        </Link>
      )}

      {archive.length > 0 && (
        <>
          <section style={{ marginTop: "1.4rem" }}>
            <p className="section-label section-label-plain">AL HET SCHRIJFSEL</p>
            <div className="post-list">
              {archive.map((post) => (
                <Link key={post.url} href={post.url} className="post-item post-item-link">
                  <time className="post-date" dateTime={formatIsoDate(post.data.datum)}>
                    {formatLongDate(post.data.datum)}
                  </time>
                  <div>
                    <span className="post-title-link">
                      {post.data.titel}
                    </span>
                    {post.data.samenvatting && (
                      <p className="post-summary-small">{post.data.samenvatting}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
