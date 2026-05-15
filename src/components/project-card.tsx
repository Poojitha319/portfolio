"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  index: number;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  index,
  links,
  className,
}: Props) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col justify-between border border-border rounded-2xl p-6 w-[320px] md:w-[360px] h-[280px] shrink-0 select-none",
        "bg-card transition-all duration-300",
        "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Number watermark */}
      <span className="absolute top-4 right-5 text-5xl font-black text-primary/[0.06] tabular-nums leading-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="space-y-3 relative">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="font-semibold text-base group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>
            <time className="text-xs text-muted-foreground mt-0.5 block">{dates}</time>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {links?.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                {link.icon}
              </Link>
            ))}
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <ArrowUpRight className="size-3.5" />
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[10px] font-medium px-2 py-0 border-border group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 group-hover:bg-primary/40 transition-all duration-500" />
    </motion.div>
  );
}
