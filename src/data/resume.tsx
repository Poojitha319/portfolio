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
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Sai Poojitha Sajjavarapu",
  initials: "SP",
  url: "https://github.com/Poojitha319",
  location: "Nuzvid, Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Nuzvid",
  description:
    "Shipping production AI systems end-to-end — from code to cloud.",
  roles: [
    "AI Backend Engineer",
    "Data Engineer",
    "Cloud & DevOps Engineer",
    "Full Stack Developer",
    "Agentic AI Builder",
  ],
  summary:
    "Hi, I'm Poojitha! I'm a B.Tech CS graduate (May 2026) from [IIIT Nuzvid](/#education), currently working as an AI Backend Engineer at [Quantum Gandiva AI](/#work) where I build production Agentic AI systems with FastAPI, AWS, and LLMs. Previously, I worked as an [AI/ML Developer at Parabola9](/#work), developing and deploying generative AI applications. I've won [3 national-level hackathons](/#hackathons) including Smart India Hackathon 2024, and solved [500+ LeetCode problems](https://leetcode.com/u/poojitha_2004/) with a contest rating of 1600+. I believe technology should be accessible to everyone — that's why I build AI products that solve real-world problems for real people.",
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
        { name: "Java", icon: Java },
        { name: "C", icon: null },
        { name: "C++", icon: null },
        { name: "Python", icon: Python },
        { name: "JavaScript", icon: null },
        { name: "TypeScript", icon: Typescript },
        { name: "Dart", icon: null },
      ],
    },
    {
      category: "AI / ML",
      skills: [
        { name: "Agentic AI", icon: null },
        { name: "LLMs", icon: null },
        { name: "Generative AI", icon: null },
        { name: "NLP", icon: null },
        { name: "Machine Learning", icon: null },
        { name: "Deep Learning", icon: null },
        { name: "LangChain", icon: null },
        { name: "TensorFlow", icon: null },
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
        { name: "Flutter", icon: null },
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", icon: null },
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "Postman", icon: null },
        { name: "GitHub Actions", icon: null },
        { name: "CI/CD", icon: null },
        { name: "Redis", icon: null },
        { name: "Terraform", icon: null },
      ],
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MySQL", icon: null },
        { name: "PostgreSQL", icon: Postgresql },
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
      title: "AI Backend Engineer & Data Engineer",
      logoUrl: "/quantum.jpg",
      start: "November 2025",
      end: "Present",
      description:
        "Solely architected and shipped the entire production backend for an Agentic AI platform from scratch — orchestrating 7+ autonomous agents with multi-step reasoning, tool-calling, and memory pipelines\nBuilt FastAPI-based microservices with async request handling, modular API design, and optimized data flow integrating LLM reasoning, agent memory, and dynamic tool-calling workflows — maintaining zero downtime since production launch\nEngineered AWS data pipelines (S3, Lambda, RDS) with Terraform for real-time ingestion and ETL; set up CI/CD, Docker & Kubernetes orchestration, and production monitoring — zero critical failures across the entire infrastructure\nSingle-handedly owned the backend architecture end-to-end: from system design to deployment to monitoring — the sole engineer responsible for the entire backend stack",
    },
    {
      company: "MSM AI",
      href: "#",
      badges: ["Freelance"],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: "",
      start: "September 2025",
      end: "December 2025",
      description:
        "Worked on designing and integrating AI agents and automation pipelines to enhance system intelligence and operational efficiency\nBuilt and deployed end-to-end machine learning and deep learning models integrated with LLMs for intelligent decision-making and workflow automation\nCollaborated with cross-functional teams to develop and optimize scalable, production-ready AI solutions, ensuring seamless deployment and continuous improvement",
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
        "Developed and optimized advanced ML models for generative AI applications and LLM-based systems\nDeployed AI models in production using Docker containers, managing end-to-end deployment lifecycle\nBuilt scalable RESTful APIs with FastAPI and integrated automated testing workflows\nCollaborated with engineers and domain experts to optimize system performance and resolve production bottlenecks",
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
      title: "Tailor-Fit: AI Shopping Platform",
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
          type: "Source",
          href: "https://github.com/Poojitha319/Tailor-Fit-modeldev",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "BloodLink: AI Donor-Bank Matching",
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
          type: "Source",
          href: "https://github.com/Poojitha319/AI-Driven-Blood-Donation-Network",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "MediBuddy: AI Prescription Interpreter",
      href: "https://github.com/Poojitha319/MediBuddy",
      dates: "2025",
      description:
        "A full-stack AI-powered medicine analysis platform. Upload medicine package images and get instant structured analysis including usage, side effects, warnings, and more. Built with accessibility in mind for elderly users. Features JWT authentication, analysis history, and multi-language support.",
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
          type: "Source",
          href: "https://github.com/Poojitha319/MediBuddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "VisualDSA: AI-Powered DSA Animator",
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
          type: "Source",
          href: "https://github.com/Poojitha319/VisualDSA",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "VideoGPT: AI Video Caption Generator",
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
          type: "Source",
          href: "https://github.com/Poojitha319/The-Challangers",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "London RAG Agent",
      href: "https://github.com/Poojitha319/london-rag-agent",
      dates: "2025",
      description:
        "An intelligent RAG (Retrieval-Augmented Generation) agent built with LangChain and vector search for context-aware question answering. Demonstrates production-level agentic AI patterns with document retrieval, embedding pipelines, and LLM orchestration.",
      technologies: [
        "Python",
        "LangChain",
        "RAG",
        "Vector DB",
        "LLMs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Poojitha319/london-rag-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
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
      title: "Smart India Hackathon 2024",
      dates: "December 2024",
      location: "National Level, Government of India",
      description:
        "Mentored a winning team that secured 1st Prize at India's most prestigious national hackathon. Developed an innovative solution for Dynamic Route Rationalization (Problem Statement 1617), optimizing routes efficiently using advanced algorithms and data-driven insights.",
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