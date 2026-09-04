"use client";

import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
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
                            From AI-powered healthcare platforms to production agentic systems.
                        </p>
                    </div>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY * 12}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {DATA.projects.map((project, id) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: id * 0.08, duration: 0.4 }}
                                className="min-w-0"
                            >
                                <ProjectCard
                                    href={project.href}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    index={id}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </motion.div>
                        ))}
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
