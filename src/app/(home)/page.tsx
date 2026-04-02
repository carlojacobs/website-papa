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
          <p className="featured-meta">
            <span className="section-label-inline">Meest recent</span>
            <span className="featured-meta-sep"> — </span>
            <time dateTime={formatIsoDate(featured.data.created)}>
              {formatLongDate(featured.data.created)}
            </time>
          </p>
          <span className="featured-title">
            {featured.data.title}
          </span>
          {featured.data.summary && (
            <p className="featured-summary">{featured.data.summary}</p>
          )}
        </Link>
      )}

      {archive.length > 0 && (
        <>
          <div className="ornament">· · ·</div>
          <section>
            <p className="section-label">Archief</p>
            <div className="post-list">
              {archive.map((post) => (
                <Link key={post.url} href={post.url} className="post-item post-item-link">
                  <time className="post-date" dateTime={formatIsoDate(post.data.created)}>
                    {formatLongDate(post.data.created)}
                  </time>
                  <div>
                    <span className="post-title-link">
                      {post.data.title}
                    </span>
                    {post.data.summary && (
                      <p className="post-summary-small">{post.data.summary}</p>
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
