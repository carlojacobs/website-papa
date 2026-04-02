import Image from "next/image";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { pagesSource } from "@/lib/pages";

export default function AboutPage() {
  const page = pagesSource.getPage(["about"]);
  if (!page) notFound();

  const MDX = page.data.body;
  return (
    <article>
      <div className="article-body">
        <Image
          src="/patrick-jacobs.jpg"
          alt="Portret van Patrick Jacobs"
          width={120}
          height={154}
          className="about-portrait"
          priority
        />
        <MDX components={getMDXComponents()} />
      </div>
    </article>
  );
}
