/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Briefcase, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  const initial = alt.charAt(0).toUpperCase();

  if (!src || imageError) {
    return (
      <div className="size-10 md:size-12 border rounded-xl shadow-sm ring-2 ring-border bg-muted flex-none flex items-center justify-center">
        <span className="text-sm md:text-base font-bold text-muted-foreground">{initial}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 md:size-12 p-1 border rounded-xl shadow-sm ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {DATA.work.map((work, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={work.company}
            className={cn(
              "border rounded-xl overflow-hidden transition-all duration-300",
              isOpen
                ? "border-primary/20 shadow-md shadow-primary/5"
                : "border-border hover:border-primary/10"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full p-4 md:p-5 flex items-center gap-4 text-left cursor-pointer group"
            >
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                    {work.company}
                  </h3>
                  {work.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant="outline"
                      className={cn(
                        "text-[10px] px-1.5 py-0 font-medium",
                        badge === "Current" && "border-green-500/30 text-green-600 dark:text-green-400",
                        badge === "Freelance" && "border-blue-500/30 text-blue-600 dark:text-blue-400"
                      )}
                    >
                      {badge === "Current" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{work.title}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="size-3" />
                    {work.start} - {work.end ?? "Present"}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {work.location}
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown className="size-4 text-muted-foreground" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                    <div className="border-t border-border pt-4">
                      <ul className="space-y-2.5">
                        {work.description.split("\n").filter(Boolean).map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.3 }}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="text-primary mt-1.5 shrink-0">
                              <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
                            </span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
