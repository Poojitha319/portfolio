/* eslint-disable @next/next/no-img-element */
import Reveal from "@/components/v4/reveal";
import { Section, SectionHeading } from "@/components/v4/section-heading";
import { formatDate } from "@/lib/utils";
import { latest } from "@/lib/v4-logic";
import { allPosts } from "content-collections";
import Link from "next/link";

export default function Writing() {
  const posts = latest(allPosts, 3);
  return (
    <Section id="writing" label="Writing">
      <SectionHeading id="writing">Things I&apos;ve Written</SectionHeading>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => {
          const slug = post._meta.path.replace(/\.mdx$/, "");
          return (
            <li key={slug} className="group relative">
              <Reveal delay={(i % 3) * 100} className="h-full">
                <article className="glass flex h-full flex-col overflow-hidden rounded transition duration-300 ease-v4 group-focus-within:-translate-y-[7px] group-hover:-translate-y-[7px]">
                  <div className="aspect-video overflow-hidden bg-card">
                    {post.image && (
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover opacity-80 transition duration-300 ease-v4 group-hover:scale-[1.03] group-hover:opacity-100"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs text-primary">{formatDate(post.publishedAt)}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      <Link href={`/blog/${slug}`} className="before:absolute before:inset-0">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 text-center">
        <Link href="/blog" className="btn-outline">
          View all posts
        </Link>
      </div>
    </Section>
  );
}
