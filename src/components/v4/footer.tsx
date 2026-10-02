import { DATA } from "@/data/resume";

export default function Footer() {
  const socials = Object.values(DATA.contact.social);
  return (
    <footer
      id="site-footer"
      className="flex flex-col items-center gap-3 px-6 pb-8 pt-4 text-center font-mono text-xs text-muted-foreground"
    >
      <ul className="flex gap-6 md:hidden">
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              aria-label={s.name}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block p-1 hover:text-primary"
            >
              <s.icon className="size-5" />
            </a>
          </li>
        ))}
      </ul>
      <p>Designed &amp; built by Sai Poojitha</p>
    </footer>
  );
}
