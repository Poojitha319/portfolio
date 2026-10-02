import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { nextNavState, nextTabIndex, latest, opensResumeInline } from "./v4-logic.ts";
import { CONTENT } from "../data/content.ts";

const shown = { hidden: false, scrolled: true };

test("nav stays visible near the top of the page", () => {
  assert.deepEqual(nextNavState(shown, 10, 60, false), { hidden: false, scrolled: true });
  assert.deepEqual(nextNavState(shown, 0, 0, false), { hidden: false, scrolled: false });
});

test("nav hides on scroll down and shows on scroll up", () => {
  assert.equal(nextNavState(shown, 400, 500, false).hidden, true);
  assert.equal(nextNavState({ hidden: true, scrolled: true }, 500, 420, false).hidden, false);
});

test("nav ignores tiny scroll jitter", () => {
  const hidden = { hidden: true, scrolled: true };
  assert.equal(nextNavState(hidden, 500, 497, false).hidden, true);
});

test("nav never hides while the mobile menu is open", () => {
  assert.equal(nextNavState(shown, 400, 900, true).hidden, false);
});

test("tab keys move and wrap", () => {
  assert.equal(nextTabIndex(0, "ArrowDown", 3), 1);
  assert.equal(nextTabIndex(2, "ArrowRight", 3), 0);
  assert.equal(nextTabIndex(0, "ArrowUp", 3), 2);
  assert.equal(nextTabIndex(1, "ArrowLeft", 3), 0);
  assert.equal(nextTabIndex(2, "Home", 3), 0);
  assert.equal(nextTabIndex(0, "End", 3), 2);
  assert.equal(nextTabIndex(1, "a", 3), 1);
});

test("latest sorts newest first and limits", () => {
  const posts = [
    { id: "a", publishedAt: "2024-01-01" },
    { id: "b", publishedAt: "2025-06-01" },
    { id: "c", publishedAt: "2025-01-01" },
  ];
  assert.deepEqual(latest(posts, 2).map((p) => p.id), ["b", "c"]);
});

test("latest puts invalid dates last", () => {
  const posts = [
    { id: "bad", publishedAt: "not a date" },
    { id: "none" },
    { id: "ok", publishedAt: "2024-01-01" },
  ];
  assert.equal(latest(posts, 3)[0].id, "ok");
});

const OWN = "https://github.com/Poojitha319/";
// Forks with no own copy; allowed on purpose.
const ALLOWED_FORKS = ["The-Challangers"];
const KNOWN_FORKS = ["AI-Driven-Blood-Donation-Network", "Tailor-Fit", "Tailor-Fit-modeldev2", ...ALLOWED_FORKS];

test("sections are the six agreed ids in order", () => {
  assert.deepEqual(
    CONTENT.sections.map((s) => s.id),
    ["about", "experience", "work", "hackathons", "writing", "contact"]
  );
});

test("exactly three featured projects", () => {
  assert.equal(CONTENT.projects.filter((p) => p.featured).length, 3);
});

test("project links point at Poojitha's own repos, not forks", () => {
  for (const p of CONTENT.projects) {
    assert.ok(p.links.github.startsWith(OWN), `${p.title}: ${p.links.github}`);
    const repo = p.links.github.slice(OWN.length);
    if (KNOWN_FORKS.includes(repo)) assert.ok(ALLOWED_FORKS.includes(repo), `${p.title} links a fork`);
  }
});

test("featured projects without image have an architecture line", () => {
  for (const p of CONTENT.projects.filter((p) => p.featured && !p.image)) {
    assert.ok(p.architecture && p.architecture.length > 0, p.title);
  }
});

test("every job has a tab label and at least two bullets", () => {
  assert.equal(CONTENT.work.length, 3);
  for (const j of CONTENT.work) {
    assert.ok(j.tab.length > 0 && j.tab.length <= 16, `${j.company} tab label too long for 160px tab`);
    assert.ok(j.bullets.length >= 2, j.company);
  }
});

test("every project image exists in public/", () => {
  for (const p of CONTENT.projects.filter((p) => p.image)) {
    assert.ok(existsSync(new URL(`../../public${p.image}`, import.meta.url)), `${p.title}: ${p.image} missing`);
  }
});

test("Quantum Gandiva shows the intern to full-time conversion, newest first", () => {
  const qg = CONTENT.work.find((j) => j.company === "Quantum Gandiva AI");
  assert.deepEqual(
    qg.progression.map((r) => [r.title, r.start, r.end]),
    [
      ["Backend Engineer", "Jun 2026", "Present"],
      ["AI Backend and Data Engineer Intern", "Nov 2025", "May 2026"],
    ]
  );
});

test("Quantum Gandiva bullets cover third-party and MCP integrations", () => {
  const text = CONTENT.work.find((j) => j.company === "Quantum Gandiva AI").bullets.join(" ");
  assert.match(text, /third-party/i);
  assert.match(text, /MCP/);
});

test("experience matches the résumé (poojitha_sde.pdf)", () => {
  const byCo = Object.fromEntries(CONTENT.work.map((j) => [j.company, j]));
  assert.equal(byCo["Parabola9"].title, "AI/ML Intern");
  assert.equal(byCo["IIIT Nuzvid"].start, "Sep 2022");
  assert.equal(byCo["IIIT Nuzvid"].end, "Apr 2026");
  const qg = byCo["Quantum Gandiva AI"].bullets.join(" ");
  assert.match(qg, /UK enterprise client/);
  assert.match(qg, /40%/);
  const iiit = byCo["IIIT Nuzvid"].bullets.join(" ");
  assert.match(iiit, /535 LeetCode/);
  assert.match(iiit, /1,703/);
});

test("VideoGPT names the right model (InternVL2)", () => {
  const v = CONTENT.projects.find((p) => p.title === "VideoGPT");
  assert.ok(v.technologies.includes("InternVL2"));
  assert.match(v.description, /InternVL2/);
});

const plainClick = { button: 0, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false };

test("résumé opens inline on a plain desktop click", () => {
  assert.equal(opensResumeInline(plainClick, true), true);
});

test("résumé keeps normal link behaviour for modified or middle clicks", () => {
  for (const mod of ["metaKey", "ctrlKey", "shiftKey", "altKey"]) {
    assert.equal(opensResumeInline({ ...plainClick, [mod]: true }, true), false, mod);
  }
  assert.equal(opensResumeInline({ ...plainClick, button: 1 }, true), false);
});

test("résumé opens the PDF directly on phones", () => {
  assert.equal(opensResumeInline(plainClick, false), false);
});

test("Quantum Gandiva links to its LinkedIn company page", () => {
  const qg = CONTENT.work.find((j) => j.company === "Quantum Gandiva AI");
  assert.equal(qg.href, "https://www.linkedin.com/company/quantum-gandiva-ai/");
});
