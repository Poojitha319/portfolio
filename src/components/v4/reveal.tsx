"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// Fades its children up once when they scroll into view. Content is visible
// before hydration and stays visible if it is already on screen, so nothing
// is ever hidden from no-JS readers or crawlers. `delay` (ms) staggers siblings.
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setHidden(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay && !hidden ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-v4",
        hidden && "translate-y-5 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
