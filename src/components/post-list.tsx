import Link from "next/link";
import { formatIsoDate } from "@/lib/date";

type PostListItem = {
  url: string;
  data: {
    titel: string;
    datum: unknown;
    samenvatting?: string;
  };
};

export function PostList({ posts }: { posts: PostListItem[] }) {
  if (posts.length === 0) {
    return (
      <p style={{ color: "var(--ink-light)", fontStyle: "italic" }}>
        Nog geen teksten. Voeg een bestand toe in{" "}
        <code>src/content/writing</code> en het verschijnt hier.
      </p>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <article key={post.url} className="post-item">
          <time className="post-date" dateTime={formatIsoDate(post.data.datum)}>
            {formatIsoDate(post.data.datum)}
          </time>
          <div>
            <Link href={post.url} className="post-title-link">
              {post.data.titel}
            </Link>
            {post.data.samenvatting && (
              <p className="post-summary-small">{post.data.samenvatting}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
