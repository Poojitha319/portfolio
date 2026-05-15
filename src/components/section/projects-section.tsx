"use client";

import { useRef, useState, useEffect } from "react";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        const amount = 380;
        el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    };

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            From AI-powered healthcare platforms to production agentic systems — drag to explore.
                        </p>
                    </div>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY * 12}>
                    <div className="relative group/carousel">
                        {/* Left arrow */}
                        <button
                            onClick={() => scroll("left")}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 p-2 rounded-full border border-border bg-card shadow-lg transition-all duration-200 cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="size-4" />
                        </button>

                        {/* Right arrow */}
                        <button
                            onClick={() => scroll("right")}
                            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 p-2 rounded-full border border-border bg-card shadow-lg transition-all duration-200 cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="size-4" />
                        </button>

                        {/* Fade edges */}
                        <div className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-[5] pointer-events-none transition-opacity duration-300 ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
                        <div className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-[5] pointer-events-none transition-opacity duration-300 ${canScrollRight ? "opacity-100" : "opacity-0"}`} />

                        {/* Scrollable container */}
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scrollbar-none pb-4 cursor-grab active:cursor-grabbing"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {DATA.projects.map((project, id) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: id * 0.1, duration: 0.4 }}
                                >
                                    <ProjectCard
                                        href={project.href}
                                        title={project.title}
                                        description={project.description}
                                        dates={project.dates}
                                        tags={project.technologies}
                                        index={id}
                                        links={project.links}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll indicator dots */}
                        <div className="flex justify-center gap-1.5 mt-4">
                            {DATA.projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const el = scrollRef.current;
                                        if (!el) return;
                                        el.scrollTo({ left: i * 380, behavior: "smooth" });
                                    }}
                                    className="w-1.5 h-1.5 rounded-full bg-border hover:bg-primary transition-colors cursor-pointer"
                                    aria-label={`Go to project ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
