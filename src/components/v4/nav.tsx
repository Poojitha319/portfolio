"use client";

import Logo from "@/components/v4/logo";
import ResumeLink from "@/components/v4/resume-viewer";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { nextNavState, type NavState } from "@/lib/v4-logic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const num = (i: number) => `${String(i + 1).padStart(2, "0")}.`;

export default function Nav() {
  const [state, setState] = useState<NavState>({ hidden: false, scrolled: false });
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const prevY = lastY.current;
      const y = window.scrollY;
      lastY.current = y;
      setState((prev) => nextNavState(prev, prevY, y, open));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Drawer side effects: blur the page, trap focus, Esc closes, desktop width closes.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;

    drawerRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = [buttonRef.current, ...Array.from(drawerRef.current?.querySelectorAll<HTMLElement>("a") ?? [])].filter(
        (el): el is HTMLElement => el !== null
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onWide = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onWide);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-[70px] items-center justify-between px-6 transition-[transform,background-color,box-shadow,height] duration-300 ease-v4 sm:px-10 md:h-[90px] md:px-12",
          state.scrolled && !open && "glass border-x-0 border-t-0 bg-background/80 md:h-[70px]",
          state.hidden && !open && "-translate-y-full"
        )}
      >
        <Link
          href="/"
          aria-label="Home"
          className="fade-down text-primary transition-transform duration-200 ease-v4 hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center font-mono text-[13px] md:flex">
          <ol className="flex">
            {DATA.sections.map((s, i) => (
              <li key={s.id} className="fade-down mx-[5px]" style={{ animationDelay: `${100 + i * 75}ms` }}>
                <a href={`/#${s.id}`} className="block p-2.5 text-foreground transition-colors hover:text-primary">
                  <span className="mr-1 text-primary">{num(i)}</span>
                  {s.label}
                </a>
              </li>
            ))}
            <li className="fade-down mx-[5px]" style={{ animationDelay: `${100 + DATA.sections.length * 75}ms` }}>
              <Link href="/blog" className="block p-2.5 text-foreground transition-colors hover:text-primary">
                Blog
              </Link>
            </li>
          </ol>
          <ResumeLink
            className="fade-down btn-outline btn-sm ml-4"
            style={{ animationDelay: `${175 + DATA.sections.length * 75}ms` }}
          >
            Résumé
          </ResumeLink>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="fade-down relative -mr-2 flex size-11 items-center justify-center text-primary md:hidden"
        >
          <span className="relative block h-0.5 w-7">
            <span
              className={cn(
                "absolute right-0 h-0.5 w-7 rounded bg-current transition duration-300 ease-v4",
                open ? "top-0 rotate-45" : "-top-2.5"
              )}
            />
            <span
              className={cn(
                "absolute right-0 top-0 h-0.5 w-7 rounded bg-current transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute right-0 h-0.5 rounded bg-current transition duration-300 ease-v4",
                open ? "top-0 w-7 -rotate-45" : "top-2.5 w-[80%]"
              )}
            />
          </span>
        </button>
      </header>

      {open && (
        // Tapping the blurred page closes the menu (keyboard users have Esc and the X).
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={close}
          className="fixed inset-0 z-30 cursor-default md:hidden"
        />
      )}

      <aside
        ref={drawerRef}
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "glass fixed inset-y-0 right-0 z-40 flex w-[min(75vw,400px)] flex-col items-center justify-center bg-card/90 transition-transform duration-300 ease-v4 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col items-center font-mono">
          <ol className="text-center">
            {DATA.sections.map((s, i) => (
              <li key={s.id} className="mb-5">
                <a href={`/#${s.id}`} onClick={close} className="block px-5 py-1.5 text-lg text-foreground hover:text-primary">
                  <span className="mb-1 block text-sm text-primary">{num(i)}</span>
                  {s.label}
                </a>
              </li>
            ))}
            <li className="mb-5">
              <Link href="/blog" onClick={close} className="block px-5 py-1.5 text-lg text-foreground hover:text-primary">
                Blog
              </Link>
            </li>
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-outline btn-lg mt-4"
          >
            Résumé
          </a>
        </nav>
      </aside>
    </>
  );
}
