// Pure helpers for the v4 home page. No imports, so `node --test` can load this file directly.

export type NavState = { hidden: boolean; scrolled: boolean };

const TOP_ZONE = 80; // px from the top where the nav is always shown
const JITTER = 6; // ignore scroll deltas smaller than this

export function nextNavState(prev: NavState, prevY: number, y: number, menuOpen: boolean): NavState {
  const scrolled = y > 8;
  if (menuOpen || y < TOP_ZONE) return { hidden: false, scrolled };
  const delta = y - prevY;
  if (Math.abs(delta) < JITTER) return { hidden: prev.hidden, scrolled };
  return { hidden: delta > 0, scrolled };
}

export function nextTabIndex(current: number, key: string, count: number): number {
  switch (key) {
    case "ArrowDown":
    case "ArrowRight":
      return (current + 1) % count;
    case "ArrowUp":
    case "ArrowLeft":
      return (current - 1 + count) % count;
    case "Home":
      return 0;
    case "End":
      return count - 1;
    default:
      return current;
  }
}

function time(value?: string): number {
  const t = value ? Date.parse(value) : NaN;
  return Number.isNaN(t) ? -Infinity : t;
}

export function latest<T extends { publishedAt?: string }>(items: readonly T[], n: number): T[] {
  return [...items].sort((a, b) => time(b.publishedAt) - time(a.publishedAt)).slice(0, n);
}

export type ClickInfo = { button: number; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean; altKey: boolean };

// Open the résumé in the in-page viewer only for a plain left click on a wide screen.
// Modified/middle clicks keep normal link behaviour (new tab, save), and phones get the
// PDF directly because mobile browsers render embedded PDFs poorly.
export function opensResumeInline(click: ClickInfo, wideScreen: boolean): boolean {
  if (!wideScreen) return false;
  if (click.button !== 0) return false;
  return !(click.metaKey || click.ctrlKey || click.shiftKey || click.altKey);
}
