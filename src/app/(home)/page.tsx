import Link from "next/link";
import { PostList } from "@/components/post-list";
import { siteConfig } from "@/lib/site";
import { getPublishedPosts } from "@/lib/writing";

export default function HomePage() {
  const posts = getPublishedPosts();

  return (
    <section className="space-y-6">
      <div className="paper-panel">
        <p className="meta-label mb-3">Home</p>
        <h1 className="page-title">Recent posts and dated notes</h1>
        <p className="page-intro mt-4">
          A plain home page, a readable archive, and room for the small
          observations that are worth keeping.
        </p>
      </div>

      <aside className="paper-panel quote-card">
        <p className="quote-mark">"</p>
        <blockquote className="quote-text mt-2">{siteConfig.homeQuote.text}</blockquote>
        <p className="quote-attribution mt-4">{siteConfig.homeQuote.attribution}</p>
      </aside>

      <div className="paper-panel">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="meta-label mb-2">Blog posts</p>
            <h2 className="page-title">Latest writing</h2>
          </div>
          <Link href="/about" className="nav-link">
            About this site
          </Link>
        </div>

        <PostList posts={posts} />
      </div>
    </section>
  );
}
