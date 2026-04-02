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
        <h1 className="page-title">Recente stukken en notities</h1>
        <p className="page-intro mt-4">
          Een persoonlijke pagina, een leesbaar archief, en ruimte voor de
          kleine observaties die het waard zijn om bij te houden.
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
            <p className="meta-label mb-2">Schrijfsels</p>
            <h2 className="page-title">Nieuwste teksten</h2>
          </div>
          <Link href="/about" className="nav-link">
            Over Patrick
          </Link>
        </div>

        <PostList posts={posts} />
      </div>
    </section>
  );
}
