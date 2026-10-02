import { cn } from "@/lib/utils";

// "SP" in an amber outlined rounded square.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="SP" className={cn("size-10 md:size-11", className)}>
      <rect x="3" y="3" width="42" height="42" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="16"
        fontWeight="500"
        fill="currentColor"
      >
        SP
      </text>
    </svg>
  );
}
