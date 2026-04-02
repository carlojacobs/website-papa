import { PostList } from "@/components/post-list";
import { getPublishedPosts } from "@/lib/writing";

export default function WritingIndexPage() {
  const posts = getPublishedPosts();

  return (
    <section className="paper-panel">
      <p className="meta-label mb-3">Archive</p>
      <h1 className="page-title">All blog posts</h1>
      <p className="page-intro mt-4">
        Everything in one place, ordered by date and easy to scan.
      </p>

      <div className="mt-8">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
