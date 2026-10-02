import { DATA } from "@/data/resume";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 sm:py-20">
      <Link
        href="/"
        className="group mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
        {DATA.name}
      </Link>
      {children}
    </div>
  );
}
