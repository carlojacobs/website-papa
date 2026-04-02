import Link from "next/link";

export default function NotFound() {
  return (
    <section className="paper-panel">
      <p className="meta-label mb-3">404</p>
      <h1 className="page-title">Pagina niet gevonden</h1>
      <p className="page-intro mt-4">
        De pagina die u zocht bevindt zich niet in het archief.
      </p>
      <div className="mt-6">
        <Link href="/" className="nav-link">
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
