/* eslint-disable @next/next/no-img-element */
"use client";

import HackathonModal from "@/components/hackathon-modal";
import Reveal from "@/components/v4/reveal";
import { Section, SectionHeading } from "@/components/v4/section-heading";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Medal, Trophy } from "lucide-react";
import { useCallback, useState } from "react";

type Hackathon = (typeof DATA.hackathons)[number];

const isWin = (h: Hackathon) => h.win.toLowerCase().includes("1st");

export default function Hackathons() {
  // Keep the last selection after closing so the modal can play its exit animation.
  const [selected, setSelected] = useState<Hackathon | null>(null);
  const [open, setOpen] = useState(false);
  const show = (h: Hackathon) => {
    setSelected(h);
    setOpen(true);
  };
  const hide = useCallback(() => setOpen(false), []);
  const spotlight = DATA.hackathons.find((h) => h.title.includes("Smart India")) ?? DATA.hackathons[0];
  const rest = DATA.hackathons.filter((h) => h !== spotlight);

  return (
    <Section id="hackathons" label="Hackathons">
      <SectionHeading id="hackathons">Hackathons</SectionHeading>

      <button
        type="button"
        onClick={() => show(spotlight)}
        className="glass group grid w-full overflow-hidden rounded text-left transition duration-300 ease-v4 hover:-translate-y-[5px] md:grid-cols-[1.1fr_1fr]"
      >
        <div className="aspect-[16/10] overflow-hidden bg-card md:aspect-auto">
          <img
            src={spotlight.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-9">
          <p className="flex items-center gap-2 font-mono text-[13px] text-primary">
            <Trophy className="size-4" aria-hidden /> {spotlight.win}
          </p>
          <h3 className="mt-3 text-[clamp(22px,4vw,28px)] font-semibold leading-tight text-foreground group-hover:text-primary">
            {spotlight.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {spotlight.dates} · {spotlight.location}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{spotlight.description}</p>
          <span className="mt-5 font-mono text-[13px] text-primary">View photos →</span>
        </div>
      </button>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {rest.map((h, i) => (
          <li key={h.title}>
            <Reveal delay={(i % 2) * 100} className="h-full">
              <button
                type="button"
                onClick={() => show(h)}
                className="glass group flex h-full w-full flex-col rounded p-7 text-left transition duration-300 ease-v4 hover:-translate-y-[5px]"
              >
                <div className="mb-6 flex items-center justify-between">
                  {isWin(h) ? (
                    <Trophy className="size-8 text-primary" strokeWidth={1.25} aria-hidden />
                  ) : (
                    <Medal className="size-8 text-primary" strokeWidth={1.25} aria-hidden />
                  )}
                  <span className="font-mono text-xs text-muted-foreground">{h.dates}</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary">{h.title}</h3>
                <p className={cn("mt-1.5 font-mono text-[13px]", isWin(h) ? "text-primary" : "text-muted-foreground")}>
                  {h.win}
                </p>
                <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">{h.description}</p>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {selected && <HackathonModal key={selected.title} hackathon={selected} isOpen={open} onClose={hide} />}
    </Section>
  );
}
