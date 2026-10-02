/* eslint-disable @next/next/no-img-element */
import { Section, SectionHeading } from "@/components/v4/section-heading";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

export default function About() {
  return (
    <Section id="about" label="About me">
      <SectionHeading id="about">About Me</SectionHeading>
      <div className="grid gap-14 md:grid-cols-[3fr_2fr]">
        <div className="text-[17px] leading-relaxed text-muted-foreground">
          <div className="prose prose-invert max-w-none text-[17px] text-muted-foreground prose-p:mb-4 prose-p:mt-0 prose-a:font-normal prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <Markdown>{DATA.summary}</Markdown>
          </div>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="mt-5 grid grid-cols-[repeat(2,minmax(140px,200px))] gap-x-2.5 font-mono text-[13px]">
            {DATA.recentTech.map((t) => (
              <li
                key={t}
                className="relative mb-2.5 pl-5 before:absolute before:left-0 before:text-sm before:leading-[1.4] before:text-primary before:content-['▹']"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="group relative mx-auto w-[70%] max-w-[300px] self-start md:mx-0 md:mt-2 md:w-full">
          <div className="relative z-10 rounded bg-primary transition duration-300 ease-v4 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <img
              src={DATA.avatarUrl}
              alt="Portrait of Sai Poojitha"
              className="relative aspect-square w-full rounded object-cover mix-blend-multiply grayscale transition duration-300 ease-v4 group-hover:mix-blend-normal group-hover:grayscale-0"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 translate-x-5 translate-y-5 rounded border-2 border-primary transition duration-300 ease-v4 group-hover:translate-x-4 group-hover:translate-y-4"
          />
        </div>
      </div>
    </Section>
  );
}
