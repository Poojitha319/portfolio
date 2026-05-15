"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isDecimal) {
        setDisplay(current.toFixed(1) + suffix);
      } else {
        setDisplay(Math.floor(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {display}
    </motion.span>
  );
}
