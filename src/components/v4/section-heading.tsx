import Reveal from "@/components/v4/reveal";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

// "01", "02", ... from the order in DATA.sections, so headings always match the nav.
export function sectionNumber(id: string): string {
  return String(DATA.sections.findIndex((s) => s.id === id) + 1).padStart(2, "0");
}

export function Section({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-label={label} className={cn("mx-auto max-w-[1000px] py-24 md:py-28", className)}>
      <Reveal>{children}</Reveal>
    </section>
  );
}

export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-center whitespace-nowrap text-[clamp(24px,5vw,32px)] font-semibold text-foreground after:ml-5 after:block after:h-px after:w-full after:max-w-[300px] after:bg-secondary">
      <span className="mr-2.5 font-mono text-[clamp(16px,3vw,20px)] font-normal text-primary">
        {sectionNumber(id)}.
      </span>
      {children}
    </h2>
  );
}
