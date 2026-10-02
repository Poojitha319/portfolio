import { DATA } from "@/data/resume";

const LINE = "after:mx-auto after:mt-5 after:block after:h-[90px] after:w-px after:bg-muted-foreground";

// Fixed socials on the left and vertical email on the right (md and up).
export default function SideRails() {
  const socials = Object.values(DATA.contact.social);
  return (
    <>
      <div style={{ animationDelay: "1s" }} className="fade-in fixed bottom-0 left-6 z-10 hidden w-10 text-muted-foreground md:block lg:left-10">
        <ul className={`flex flex-col items-center ${LINE}`}>
          {socials.map((s) => (
            <li key={s.name} className="last-of-type:mb-5">
              <a
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="block p-2.5 transition duration-200 ease-v4 hover:-translate-y-[3px] hover:text-primary focus-visible:text-primary"
              >
                <s.icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ animationDelay: "1s" }} className="fade-in fixed bottom-0 right-6 z-10 hidden w-10 md:block lg:right-10">
        <div className={`flex flex-col items-center ${LINE}`}>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="my-5 p-2.5 font-mono text-xs tracking-[0.1em] text-muted-foreground transition duration-200 ease-v4 [writing-mode:vertical-rl] hover:-translate-y-[3px] hover:text-primary"
          >
            {DATA.contact.email}
          </a>
        </div>
      </div>
    </>
  );
}
