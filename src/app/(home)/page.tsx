import Link from "next/link";
import { getPublishedPosts } from "@/lib/writing";
import { formatIsoDate } from "@/lib/date";

export default function HomePage() {
  const posts = getPublishedPosts();
  const featured = posts[0] ?? null;
  const archive = posts.slice(1);

  return (
    <>
      {featured && (
        <section className="featured-section">
          <p className="featured-meta">
            <span className="section-label-inline">Meest recent</span>
            <span className="featured-meta-sep"> — </span>
            <time dateTime={formatIsoDate(featured.data.created)}>
              {formatIsoDate(featured.data.created)}
            </time>
          </p>
          <Link href={featured.url} className="featured-title">
            {featured.data.title}
          </Link>
          {featured.data.summary && (
            <p className="featured-summary">{featured.data.summary}</p>
          )}
        </section>
      )}

      {archive.length > 0 && (
        <>
          <div className="ornament">· · ·</div>
          <section>
            <p className="section-label">Archief</p>
            <div className="post-list">
              {archive.map((post) => (
                <article key={post.url} className="post-item">
                  <time className="post-date" dateTime={formatIsoDate(post.data.created)}>
                    {formatIsoDate(post.data.created)}
                  </time>
                  <div>
                    <Link href={post.url} className="post-title-link">
                      {post.data.title}
                    </Link>
                    {post.data.summary && (
                      <p className="post-summary-small">{post.data.summary}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
