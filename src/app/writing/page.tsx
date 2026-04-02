import { PostList } from "@/components/post-list";
import { getPublishedPosts } from "@/lib/writing";

export default function WritingIndexPage() {
  const posts = getPublishedPosts();

  return (
    <section className="paper-panel">
      <p className="meta-label mb-3">Archief</p>
      <h1 className="page-title">Alle teksten</h1>
      <p className="page-intro mt-4">
        Alles op één plek, gesorteerd op datum.
      </p>

      <div className="mt-8">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
