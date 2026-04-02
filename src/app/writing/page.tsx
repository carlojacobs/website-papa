import { PostList } from "@/components/post-list";
import { getPublishedPosts } from "@/lib/writing";

export default function WritingIndexPage() {
  const posts = getPublishedPosts();

  return (
    <section>
      <h1 className="page-heading">Schrijfsels</h1>
      <p className="page-tagline">Alles op één plek, gesorteerd op datum.</p>
      <PostList posts={posts} />
    </section>
  );
}
