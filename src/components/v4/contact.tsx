import ResumeLink from "@/components/v4/resume-viewer";
import Reveal from "@/components/v4/reveal";
import { sectionNumber } from "@/components/v4/section-heading";
import { DATA } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="mx-auto mb-24 max-w-[600px] py-24 text-center md:py-32">
      <Reveal>
        <h2 className="font-mono text-base text-primary">{sectionNumber("contact")}. What&apos;s Next?</h2>
        <p className="mt-5 text-[clamp(40px,5vw,60px)] font-semibold leading-tight text-foreground">Get In Touch</p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{DATA.contactMessage}</p>
        <a href={`mailto:${DATA.contact.email}`} className="btn-outline btn-lg mt-12">
          Say Hello
        </a>
        <p className="mt-8 font-mono text-[13px] text-muted-foreground">
          or{" "}
          <ResumeLink className="link-underline">view my résumé</ResumeLink>
        </p>
      </Reveal>
    </section>
  );
}
