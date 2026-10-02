"use client";

import { useEffect, useRef } from "react";

// A soft glow that follows the cursor (desktop only). Writes straight to the
// element's style so mouse moves never trigger a React re-render.
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden transition duration-300 lg:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 20%) var(--y, 10%), oklch(0.55 0.12 250 / 12%), transparent 80%)",
      }}
    />
  );
}
