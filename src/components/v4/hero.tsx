import { DATA } from "@/data/resume";

export default function Hero() {
  const { hero } = DATA;
  const items = [
    <p key="greeting" className="mb-5 ml-1 font-mono text-sm text-primary md:text-base">
      {hero.greeting}
    </p>,
    <h1 key="name" className="text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-foreground">
      {hero.name}
    </h1>,
    <p key="line" className="mt-1 text-[clamp(40px,8vw,80px)] font-semibold leading-[1.05] text-muted-foreground">
      {hero.line}
    </p>,
    <p key="intro" className="mt-6 max-w-[540px] text-lg leading-relaxed text-muted-foreground">
      {hero.intro}
    </p>,
    <a key="cta" href="#writing" className="btn-outline btn-lg mt-12">
      Read my writing
    </a>,
  ];

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="mx-auto flex min-h-dvh max-w-[1000px] flex-col items-start justify-center py-28"
    >
      {items.map((item, i) => (
        <div key={item.key} className="fade-up" style={{ animationDelay: `${100 + i * 100}ms` }}>
          {item}
        </div>
      ))}
    </section>
  );
}
