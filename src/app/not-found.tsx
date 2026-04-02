import Link from "next/link";

export default function NotFound() {
  return (
    <section className="paper-panel">
      <p className="meta-label mb-3">404</p>
      <h1 className="page-title">Page not found</h1>
      <p className="page-intro mt-4">
        The page you were looking for is not in the archive.
      </p>
      <div className="mt-6">
        <Link href="/" className="nav-link">
          Return home
        </Link>
      </div>
    </section>
  );
}
