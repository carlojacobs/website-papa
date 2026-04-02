import Link from "next/link";
import { formatIsoDate, formatLongDate } from "@/lib/date";

type PostListItem = {
  url: string;
  data: {
    title: string;
    created: unknown;
    summary?: string;
  };
};

export function PostList({ posts }: { posts: PostListItem[] }) {
  if (posts.length === 0) {
    return (
      <p className="page-intro">
        Nog geen teksten. Voeg een bestand toe in <code>src/content/writing</code> en
        het verschijnt hier.
      </p>
    );
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <article key={post.url} className="post-row">
          <time className="date-stamp" dateTime={formatIsoDate(post.data.created)}>
            {formatLongDate(post.data.created)}
          </time>

          <div className="space-y-2">
            <Link href={post.url} className="post-link">
              {post.data.title}
            </Link>
            {post.data.summary ? (
              <p className="post-summary">{post.data.summary}</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
