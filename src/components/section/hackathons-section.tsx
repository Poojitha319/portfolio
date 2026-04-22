/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import HackathonModal from "@/components/hackathon-modal";

export default function HackathonsSection() {
  const [selectedHackathon, setSelectedHackathon] = useState<(typeof DATA.hackathons)[number] | null>(null);

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve participated in {DATA.hackathons.length}+ hackathons, winning 3 national-level competitions. Click on any hackathon to see photos and details.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon, index) => (
            <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {hackathon.image ? (
                  <motion.img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedHackathon(hackathon)}
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <motion.div
                className="flex flex-1 flex-col justify-start gap-2 min-w-0 cursor-pointer rounded-lg p-3 -m-3 hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedHackathon(hackathon)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-2">
                  {hackathon.dates && (
                    <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                  )}
                  {hackathon.win && (
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 gap-1 border-yellow-500/30 text-yellow-600">
                      <Trophy className="h-2.5 w-2.5" />
                      {hackathon.win}
                    </Badge>
                  )}
                </div>
                {hackathon.title && (
                  <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                )}
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word line-clamp-2">
                    {hackathon.description}
                  </p>
                )}
                <span className="text-xs text-primary font-medium mt-1">Click to view details and photos</span>
              </motion.div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      {selectedHackathon && (
        <HackathonModal
          hackathon={selectedHackathon}
          isOpen={!!selectedHackathon}
          onClose={() => setSelectedHackathon(null)}
        />
      )}
    </section>
  );
}
