"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface TypingRolesProps {
  roles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingRoles({
  roles,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypingRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="text-primary"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
