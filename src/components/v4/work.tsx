/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/icons";
import ProjectGrid from "@/components/v4/project-grid";
import ProjectPlaceholder from "@/components/v4/project-placeholder";
import Reveal from "@/components/v4/reveal";
import { Section, SectionHeading } from "@/components/v4/section-heading";
import type { Project } from "@/data/content";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

function FeaturedProject({ project: p, flip }: { project: Project; flip: boolean }) {
  const href = p.links.live ?? p.links.github;
  return (
    <li>
      <Reveal className="relative grid grid-cols-12 items-center gap-2.5">
        <div
          className={cn(
            "relative z-10 col-span-full row-start-1 p-6 sm:p-10 md:col-span-7 md:p-0",
            flip ? "md:col-start-1 md:text-left" : "md:col-start-6 md:text-right"
          )}
        >
          <p className="my-2.5 font-mono text-[13px] text-primary">Featured Project</p>
          <h3 className="mb-5 text-[clamp(24px,5vw,28px)] font-semibold text-foreground">
            <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              {p.title}
            </a>
          </h3>
          <div className="glass rounded text-[17px] leading-relaxed text-muted-foreground md:bg-card/85 max-md:border-0 max-md:bg-transparent max-md:shadow-none max-md:backdrop-blur-none md:p-6">
            {p.description}
          </div>
          <ul
            className={cn(
              "mt-6 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px] text-muted-foreground",
              flip ? "md:justify-start" : "md:justify-end"
            )}
          >
            {p.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div
            className={cn(
              "-ml-2.5 mt-2.5 flex items-center text-foreground",
              flip ? "md:justify-start" : "md:-mr-2.5 md:ml-0 md:justify-end"
            )}
          >
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} on GitHub`}
              className="p-2.5 hover:text-primary"
            >
              <Icons.github className="size-5" />
            </a>
            {p.links.live && (
              <a
                href={p.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} live`}
                className="p-2.5 hover:text-primary"
              >
                <ExternalLink className="size-5" />
              </a>
            )}
          </div>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className={cn(
            "group col-span-full row-start-1 h-full max-md:opacity-25 md:col-span-7",
            flip ? "md:col-start-6" : "md:col-start-1"
          )}
        >
          {p.image ? (
            <div className="h-full overflow-hidden rounded bg-primary md:aspect-[16/10] md:h-auto">
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="h-full w-full rounded object-cover object-top mix-blend-multiply grayscale brightness-90 transition duration-300 ease-v4 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:brightness-100"
              />
            </div>
          ) : (
            <div className="h-full md:aspect-[16/10] md:h-auto">
              <ProjectPlaceholder title={p.title} architecture={p.architecture} />
            </div>
          )}
        </a>
      </Reveal>
    </li>
  );
}

export default function Work() {
  const featured = DATA.projects.filter((p) => p.featured);
  return (
    <Section id="work" label="Projects">
      <SectionHeading id="work">Some Things I&apos;ve Built</SectionHeading>
      <ul className="flex flex-col gap-24 md:gap-32">
        {featured.map((p, i) => (
          <FeaturedProject key={p.title} project={p} flip={i % 2 === 1} />
        ))}
      </ul>
      <ProjectGrid />
    </Section>
  );
}
