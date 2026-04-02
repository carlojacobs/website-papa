import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import Link from "next/link";
import { Courier_Prime, Newsreader, Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/lib/site";

const bodyFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
});

const monoFont = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${bodyFont.variable} ${monoFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--paper-base)] text-[var(--ink-strong)]">
        <RootProvider>
          <div className="paper-grain min-h-screen">
            <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-6 sm:px-6 sm:py-10">
              <header className="paper-frame mb-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="space-y-2">
                    <Link href="/" className="site-title">
                      {siteConfig.name}
                    </Link>
                    <p className="site-tagline">{siteConfig.tagline}</p>
                  </div>

                  <nav className="flex flex-wrap gap-3 text-sm">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                    <Link href="/writing" className="nav-link">
                      Schrijfsels
                    </Link>
                    <Link href="/about" className="nav-link">
                      Over
                    </Link>
                  </nav>
                </div>
              </header>

              <main className="flex-1">{children}</main>

              <footer className="mt-8 border-t border-[var(--line-soft)] pt-4 text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                Nauwkeurig gedateerd. Helder geschreven.
              </footer>
            </div>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
