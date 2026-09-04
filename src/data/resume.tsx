import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Sai Poojitha Sajjavarapu",
  initials: "SP",
  url: "https://sai-poojitha-portfolio.vercel.app",
  location: "Visakhapatnam, Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Visakhapatnam",
  description:
    "Shipping production AI systems end-to-end — from code to cloud.",
  roles: ["Backend Engineer"],
  summary:
    "I'm a B.Tech CS student at [IIIT Nuzvid](/#education) (graduating May 2026) and a backend engineer at [Quantum Gandiva AI](/#work), where I own the production backend for an AI platform — FastAPI, Redis Streams, AWS, and distributed services. Before that I was an [AI/ML Developer at Parabola9](/#work). I've won [3 national-level hackathons](/#hackathons) including Smart India Hackathon 2024, and solved [500+ LeetCode problems](https://leetcode.com/u/poojitha_2004/) at a 1600+ contest rating. I write about [shipping agents in production](/blog/work-orchestration-agentic-ai). I keep stretching the backend stack as I go — that's how I want to keep growing.",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume.pdf", icon: FileTextIcon, label: "Resume" },
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
      email: {
        name: "Send Email",
        url: "mailto:saipoojithasajjavarapu@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Quantum Gandiva AI",
      href: "https://quantumgandiva.com",
      badges: ["Current"],
      location: "Visakhapatnam, India",
      title: "Backend Engineer",
      logoUrl: "/quantum.jpg",
      start: "November 2025",
      end: "Present",
      description:
        "Built the production backend from scratch and still own it — APIs, services, and the path from design to deploy\nUsed Redis Streams to run a distributed event flow so work moves reliably between services under load\nTook ownership of core backend features end-to-end — design, implementation, and production\nKeep exploring new backend tools as the system grows — FastAPI, AWS, Docker, Kubernetes, and Terraform",
    },
    {
      company: "Parabola9",
      badges: [],
      href: "https://parabola9.com",
      location: "Nuzvid, Eluru, India",
      title: "AI/ML Developer",
      logoUrl: "/parabola9.jpg",
      start: "December 2024",
      end: "May 2025",
      description:
        "Built and tuned generative AI / LLM models that powered the product after the VideoGPT hackathon win\nContainerized those models with Docker and owned the path from notebook to a running service\nWrote FastAPI REST endpoints around the models and added automated tests so deploys stayed reliable\nWorked with engineers and domain experts to fix production bottlenecks as usage grew",
    },
  ],
  education: [
    {
      school: "IIIT Nuzvid (RGUKT)",
      href: "https://www.rguktn.ac.in",
      degree: "Bachelor of Technology in Computer Science, CGPA: 8.5",
      logoUrl: "/iiit.jpg",
      start: "2022",
      end: "May 2026",
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
  projects: [
    {
      title: "MediBuddy: AI Prescription Interpreter",
      image: "/projects/medibuddy.png",
      video: "",
      href: "https://github.com/Poojitha319/MediBuddy",
      dates: "2025",
      description:
        "Full-stack AI app that reads a medicine pack photo and explains usage, dosage, side effects, and warnings in plain language. JWT auth, saved analysis history, and an accessible UI built for elderly users.",
      technologies: [
        "React.js",
        "FastAPI",
        "PostgreSQL",
        "Gemini API",
        "JWT",
        "Docker",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Poojitha319/MediBuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "BloodLink: AI Donor-Bank Matching",
      image: "/projects/bloodlink.png",
      video: "",
      href: "https://github.com/Poojitha319/AI-Driven-Blood-Donation-Network",
      dates: "2024",
      description:
        "An AI-driven blood donation platform integrating FastAPI and Flutter for real-time donor-blood bank connectivity. Implemented intelligent matching using Vertex AI, LangChain, and FAISS vector search. Integrated Google Maps API with geofencing and smart alerts for location-aware donor mobilization.",
      technologies: [
        "FastAPI",
        "Flutter",
        "Firebase",
        "Vertex AI",
        "LangChain",
        "FAISS",
        "Google Cloud",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Poojitha319/AI-Driven-Blood-Donation-Network",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Tailor-Fit: AI Shopping Platform",
      image: "/projects/tailorfit.png",
      video: "",
      href: "https://github.com/Poojitha319/Tailor-Fit-modeldev",
      dates: "2024",
      description:
        "Built the ML/CV pipeline and backend for a fashion-tech platform. Developed 3D body reconstruction from single images using PiHuD, automated body measurement extraction via cross-sectional geometry on SMPL meshes, and integrated virtual try-on with HR-VITON. Achieved 35% simulated return-rate reduction. Team project — owned model development and backend.",
      technologies: [
        "Python",
        "PyTorch",
        "PiHuD",
        "Open3D",
        "MediaPipe",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Poojitha319/Tailor-Fit-modeldev",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "VisualDSA: AI-Powered DSA Animator",
      image: "",
      video: "/projects/visualdsa.mp4",
      href: "https://github.com/Poojitha319/VisualDSA",
      dates: "2025",
      description:
        "Describe any DSA concept and watch it come alive as a step-by-step animation. Uses Groq's LLaMA 3 to generate Manim animation code, renders it into MP4 videos, and displays them in a Streamlit interface. From confusion to clarity in one click.",
      technologies: [
        "Python",
        "Groq API",
        "LLaMA 3",
        "Manim",
        "Streamlit",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Poojitha319/VisualDSA",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "VideoGPT: AI Video Caption Generator",
      image: "",
      video: "",
      href: "https://github.com/Poojitha319/The-Challangers",
      dates: "2024",
      description:
        "A deep learning-based tool for automated video caption generation. Reduces and eliminates redundant frames, processes optimized frames through InternV2 model, and generates summarized captions. Built with a production-ready web interface. Won 1st Prize at IIIT Hackathon, leading to an internship at Parabola9.",
      technologies: [
        "Python",
        "Deep Learning",
        "InternV2",
        "NLP",
        "Jupyter",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Poojitha319/The-Challangers",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2024",
      dates: "December 2024",
      location: "National Level, Government of India",
      description:
        "Built the core machine learning model for the team that won 1st Prize at India's most prestigious national hackathon. Tackled Dynamic Route Rationalization (Problem Statement 1617) to prevent bus bunching — using ML and data-driven optimization to predict demand and rationalize bus routes in real time.",
      image: "/hackathons/sih-winner.jpeg",
      win: "1st Prize - National Winner",
      gallery: [
        "/hackathons/sih-team.jpeg",
        "/hackathons/sih-event.jpeg",
        "/hackathons/sih-certificate.jpeg",
        "/hackathons/sih-selfie.jpeg",
        "/hackathons/sih-venue.jpeg",
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
        "Won 1st Prize for developing VideoGPT, a deep learning-based tool for automated video caption generation using frame-level optimization. This win led to an internship at Parabola9 as an AI/ML Developer.",
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