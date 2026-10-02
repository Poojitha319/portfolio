import { Icons } from "@/components/icons";
import Reveal from "@/components/v4/reveal";
import { DATA } from "@/data/resume";
import { ExternalLink, Folder } from "lucide-react";

export default function ProjectGrid() {
  const others = DATA.projects.filter((p) => !p.featured);
  return (
    <div className="mt-32">
      <h3 className="text-center text-[clamp(24px,5vw,32px)] font-semibold text-foreground">Other Noteworthy Projects</h3>
      <a
        href={DATA.contact.social.GitHub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline mx-auto mt-3 block w-fit font-mono text-[13px]"
      >
        view everything on GitHub
      </a>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((p, i) => (
          <li key={p.title} className="group relative">
            <Reveal delay={(i % 3) * 100} className="h-full">
              <div className="glass flex h-full flex-col rounded px-7 py-8 transition duration-300 ease-v4 group-focus-within:-translate-y-[7px] group-hover:-translate-y-[7px]">
                <header className="mb-9 flex items-center justify-between">
                  <Folder className="size-10 text-primary" strokeWidth={1} aria-hidden />
                  <div className="relative z-10 -mr-2.5 flex items-center text-foreground">
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="p-2 hover:text-primary"
                    >
                      <Icons.github className="size-5" />
                    </a>
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live`}
                        className="p-2 hover:text-primary"
                      >
                        <ExternalLink className="size-5" />
                      </a>
                    )}
                  </div>
                </header>
                <h4 className="mb-2.5 text-[22px] font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                  <a
                    href={p.links.live ?? p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="before:absolute before:inset-0 before:z-0"
                  >
                    {p.title}
                  </a>
                </h4>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-6 font-mono text-xs text-muted-foreground">
                  {p.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
