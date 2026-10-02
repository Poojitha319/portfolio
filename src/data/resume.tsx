import React from "react";
import { Icons } from "@/components/icons";
import { Code } from "lucide-react";
import { CONTENT } from "./content";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  ...CONTENT,
  name: "Sai Poojitha Sajjavarapu",
  initials: "SP",
  url: "https://sai-poojitha-portfolio.vercel.app",
  location: "Visakhapatnam, Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Visakhapatnam",
  description:
    "Backend engineer who loves building systems that don't break. I own the backend of a production multi-agent AI platform, from system design to live incidents.",
  roles: ["Backend Engineer"],
  summary:
    "Hi! I'm Poojitha, a backend engineer who enjoys the part of software nobody sees until it breaks. I like asking the uncomfortable questions early: what happens when a service restarts mid-request, when a message arrives twice, or when an API we don't control goes quiet?\n\nI found my way here through hackathons. In college I spent weekends turning rough ideas into working systems, and one of them ended in a national win at [Smart India Hackathon 2024](#hackathons). Building under a deadline taught me to keep designs simple enough to reason about, and honest about their trade-offs.\n\nRight now I own the backend end to end at an early-stage AI startup, so those uncomfortable questions aren't hypothetical — I answer them in production every week. Lately I'm going deeper on system design: idempotency, retries, durable timers, event-driven architecture. I learn by building small systems end to end, like [habitd](https://github.com/Poojitha319/habitd), [writing](#writing) about what breaks, and keeping a steady [LeetCode](https://leetcode.com/u/poojitha_2004/) practice.",
  avatarUrl: "/me.jpg",
  stats: [
    { value: "3x", label: "Hackathon Winner", sublabel: "Including SIH 2024" },
    { value: "500+", label: "LeetCode Problems", sublabel: "1600+ Contest Rating" },
    { value: "2+", label: "AI Systems Shipped", sublabel: "In Production" },
    { value: "8.5", label: "CGPA", sublabel: "IIIT Nuzvid" },
  ],
  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: Python },
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript", icon: null },
        { name: "SQL", icon: null },
      ],
    },
    {
      category: "AI / ML",
      skills: [
        { name: "Agentic AI", icon: null },
        { name: "LLMs", icon: null },
        { name: "LangChain", icon: null },
        { name: "LangGraph", icon: null },
        { name: "TensorFlow", icon: null },
        { name: "NLP", icon: null },
      ],
    },
    {
      category: "Web & Backend",
      skills: [
        { name: "FastAPI", icon: Python },
        { name: "Django", icon: Python },
        { name: "REST APIs", icon: null },
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Node.js", icon: Nodejs },
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "GitHub Actions", icon: null },
        { name: "Terraform", icon: null },
        { name: "CI/CD", icon: null },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Redis", icon: null },
        { name: "Redis Streams", icon: null },
        { name: "AWS", icon: null },
        { name: "GCP", icon: null },
      ],
    },
  ],
  contact: {
    email: "saipoojithasajjavarapu@gmail.com",
    tel: "+918790076017",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Poojitha319",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sai-poojitha-sajjavarapu-b14906252/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/poojitha_2004/",
        icon: Code,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:saipoojithasajjavarapu@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "IIIT Nuzvid (RGUKT)",
      href: "https://www.rguktn.ac.in",
      degree: "Bachelor of Technology in Computer Science, CGPA: 8.5",
      logoUrl: "/iiit.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "RGUKT Nuzvid (Pre-University Course)",
      href: "https://www.rguktn.ac.in",
      degree: "Pre-University Course (PUC), CGPA: 9.8",
      logoUrl: "/iiit.jpg",
      start: "2020",
      end: "2022",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2024",
      dates: "December 2024",
      location: "National Level, Government of India",
      description:
        "ML mentor for the six-member team that won 1st Prize at India's largest hackathon, tackling bus bunching in Delhi bus services. Built the Conv1D + BiLSTM + Attention delay-prediction model (tuned with Keras Tuner) that the Flask and Kafka backend served to the driver app.",
      image: "/hackathons/sih-venue.jpeg",
      win: "1st Prize - National Winner",
      gallery: [
        "/hackathons/sih-winner.jpeg",
        "/hackathons/sih-team.jpeg",
        "/hackathons/sih-event.jpeg",
        "/hackathons/sih-certificate.jpeg",
        "/hackathons/sih-selfie.jpeg",
      ],
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
    {
      title: "Teczite Mega Expo",
      dates: "March 2025",
      location: "National Level, RGUKT Nuzvid",
      description:
        "Secured 1st Prize at a national-level technical expo by developing an AI-powered security surveillance system integrating gesture recognition, YOLO-based anomaly detection, and real-time video captioning.",
      image: "/hackathons/teczite-logo.jpg",
      win: "1st Prize Winner",
      gallery: [] as string[],
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
    {
      title: "IIIT Hackathon - Parabola9",
      dates: "November 2024",
      location: "IIIT Nuzvid, India",
      description:
        "Won 1st Prize for VideoGPT, a video captioning tool. Built the video-analysis module running InternVL2 inference with frame sampling and dynamic aspect-ratio tiling after redundant-frame elimination. This win led to an internship at Parabola9 as an AI/ML Developer.",
      image: "/hackathons/parabola9-team.jpeg",
      win: "1st Prize Winner",
      gallery: [] as string[],
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Poojitha319/The-Challangers",
        },
      ],
    },
    {
      title: "Google Girl Hackathon 2025",
      dates: "February 2025",
      location: "National Level, Google India",
      description:
        "Selected for Phase 2 in a competitive national hackathon organized by Google India, focusing on impactful AI/ML solutions and collaborative team development. Solved DSA challenges in a timed coding environment.",
      image: "/hackathons/google-girl-mail.jpeg",
      win: "Phase 2 Qualifier",
      gallery: [
        "/hackathons/google-girl-welcome.jpeg",
        "/hackathons/google-girl-speaker.jpeg",
      ],
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
    {
      title: "Hacker Ramp WeForShe 2024",
      dates: "August 2024",
      location: "National Level, Myntra",
      description:
        "Reached the finals in Myntra's national hackathon. Built an immersive e-commerce platform with AR/VR for virtual try-ons, enabling users to try clothes digitally. Added AI-based recommendations to personalize shopping journeys and improve decision-making.",
      image: "/hackathons/myntra-logo.jpg",
      win: "Finalist",
      gallery: [
        "/hackathons/myntra-certificate.jpeg",
      ],
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
  ],
} as const;