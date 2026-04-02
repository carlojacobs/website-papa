import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import Link from "next/link";
import { IM_Fell_English, Cormorant_Garamond, Courier_Prime, Caveat } from "next/font/google";
import { siteConfig } from "@/lib/site";

const bodyFont = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const monoFont = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const scriptFont = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-script",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} ${scriptFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <RootProvider>
          <div className="site-wrapper">
            <header className="site-header">
              <Link href="/" className="site-name">
                {siteConfig.name}
              </Link>
              <nav className="site-nav">
                <Link href="/about" className="nav-link">Over</Link>
                <Link href="/" className="nav-link">Schrijfsels</Link>
              </nav>
            </header>
            <hr className="header-rule" />

            <main>{children}</main>

            <footer className="site-footer">
              Nauwkeurig gedateerd. Helder geschreven.
            </footer>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
