"use client";

import { Section, SectionHeading } from "@/components/v4/section-heading";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { nextTabIndex } from "@/lib/v4-logic";
import { useRef, useState } from "react";

// Tabs are 160px wide on mobile and 42px tall on desktop; the indicator classes below use the same numbers.

export default function Jobs() {
  const jobs = DATA.work;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const next = nextTabIndex(active, e.key, jobs.length);
    if (next === active) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <Section id="experience" label="Work experience" className="max-w-[700px]">
      <SectionHeading id="experience">Where I&apos;ve Worked</SectionHeading>
      <div className="flex flex-col sm:flex-row">
        <div
          role="tablist"
          aria-label="Experience"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="relative -mx-6 flex overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:block sm:w-max sm:shrink-0 sm:overflow-visible sm:px-0"
        >
          {jobs.map((job, i) => (
            <button
              key={job.company}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`job-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`job-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "flex h-[42px] w-[160px] shrink-0 items-center justify-center whitespace-nowrap border-b-2 border-secondary px-5 font-mono text-[13px] transition-colors duration-200 ease-v4 hover:bg-card hover:text-primary focus-visible:bg-card focus-visible:text-primary sm:w-full sm:justify-start sm:border-b-0 sm:border-l-2",
                active === i ? "text-primary" : "text-muted-foreground"
              )}
            >
              {job.tab}
            </button>
          ))}
          <span
            aria-hidden
            style={{ "--i": active } as React.CSSProperties}
            className="pointer-events-none absolute bottom-0 left-6 h-0.5 w-[160px] translate-x-[calc(var(--i)*160px)] rounded bg-primary transition-transform duration-300 ease-v4 sm:bottom-auto sm:left-0 sm:top-0 sm:h-[42px] sm:w-0.5 sm:translate-x-0 sm:translate-y-[calc(var(--i)*42px)]"
          />
        </div>

        <div className="w-full pt-6 sm:pl-8 sm:pt-0.5">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              role="tabpanel"
              id={`job-panel-${i}`}
              aria-labelledby={`job-tab-${i}`}
              hidden={active !== i}
              tabIndex={0}
              className={cn(active === i && "fade-up")}
            >
              <h3 className="text-[22px] font-medium leading-snug text-foreground">
                {job.title}{" "}
                <span className="text-primary">
                  @&nbsp;
                  <a href={job.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {job.company}
                  </a>
                </span>
              </h3>
              {job.progression ? (
                <ol className="mb-6 mt-2 space-y-1 border-l border-secondary pl-4 font-mono text-[13px]">
                  {job.progression.map((role, r) => (
                    <li key={role.title} className="relative">
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-background",
                          r === 0 ? "bg-primary" : "bg-secondary"
                        )}
                      />
                      <span className={r === 0 ? "text-foreground" : "text-muted-foreground"}>{role.title}</span>
                      <span className="block text-muted-foreground sm:inline">
                        <span className="hidden sm:inline"> · </span>
                        {role.start} — {role.end}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mb-6 mt-1 font-mono text-[13px] text-muted-foreground">
                  {job.start} — {job.end}
                </p>
              )}
              <ul className="text-[17px] leading-relaxed text-muted-foreground">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative mb-2.5 pl-7 before:absolute before:left-0 before:text-primary before:content-['▹']"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
