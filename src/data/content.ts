// Home-page content as plain data with no imports, so `node --test` can check it.
// Edit freely: this is the copy recruiters read.

export type Job = {
  tab: string;
  title: string;
  company: string;
  href: string;
  start: string;
  end: string;
  // Roles held at this company, newest first (e.g. intern → full-time).
  progression?: readonly { title: string; start: string; end: string }[];
  bullets: readonly string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: readonly string[];
  featured: boolean;
  image?: string;
  architecture?: string;
  links: { github: string; live?: string };
};

const work: readonly Job[] = [
  {
    tab: "Quantum Gandiva",
    title: "Backend Engineer",
    company: "Quantum Gandiva AI",
    href: "https://www.linkedin.com/company/quantum-gandiva-ai/",
    start: "Nov 2025",
    end: "Present",
    progression: [
      { title: "Backend Engineer", start: "Jun 2026", end: "Present" },
      { title: "AI Backend and Data Engineer Intern", start: "Nov 2025", end: "May 2026" },
    ],
    bullets: [
      "Own the backend architecture of a production multi-agent AI platform for a UK enterprise client — from system design through deployment — orchestrating 8+ services and multi-tool agent workflows.",
      "Designed an event-driven architecture on Redis Streams with consumer groups for async inter-service messaging and agent coordination, decoupling services so each scales and fails independently.",
      "Built third-party app integrations and MCP (Model Context Protocol) server integrations so agents can act inside external tools through one standard interface, handling auth, rate limits, and failures from APIs outside our control.",
      "Tuned FastAPI microservices with async request handling and service-level optimizations, cutting API latency by ~40% under production workloads.",
      "Run the platform on AWS (EC2, S3, Lambda, RDS) with Docker and CI/CD on GitHub Actions, and own production end to end — deploys, monitoring, debugging, and live incidents.",
    ],
  },
  {
    tab: "Parabola9",
    title: "AI/ML Intern",
    company: "Parabola9",
    href: "https://parabola9.com",
    start: "Dec 2024",
    end: "May 2025",
    bullets: [
      "Trained and evaluated LLM-based and generative-AI models, owning data preparation, model integration, and evaluation; improved task accuracy through systematic tuning and cleaner training data.",
      "Optimized model inference through performance tuning and efficient serving, reducing response time on target workloads.",
      "Partnered with engineers and domain experts to integrate models end to end into application workflows.",
      "Earned the internship by winning the IIIT Hackathon with VideoGPT.",
    ],
  },
  {
    tab: "IIIT Nuzvid",
    title: "B.Tech, Computer Science",
    company: "IIIT Nuzvid",
    href: "https://www.rguktn.ac.in",
    start: "Sep 2022",
    end: "Apr 2026",
    bullets: [
      "Computer Science at RGUKT Nuzvid with a CGPA of 8.5.",
      "National winner at Smart India Hackathon 2024 as the team's ML mentor, plus first prizes at Teczite Mega Expo 2025 and the IIIT Hackathon 2024.",
      "Solved 535 LeetCode problems (83 hard) with a contest rating of 1,703 — peak 1,767, top 14% globally.",
    ],
  },
];

const projects: readonly Project[] = [
  {
    title: "Aidra",
    featured: true,
    image: "/projects/aidra.svg",
    architecture: "query → router → specialist agent → human review",
    description:
      "A triage-style medical assistant. A LangGraph router sends every question to the right specialist agent, answers are grounded in hybrid search over Qdrant, and anything diagnostic waits for a human before it reaches the user.",
    technologies: ["FastAPI", "LangGraph", "Qdrant", "PostgreSQL", "Redis", "Docker"],
    links: { github: "https://github.com/Poojitha319/Aidra" },
  },
  {
    title: "habitd",
    featured: true,
    image: "/projects/habitd.svg",
    architecture: "context → rules → habit.due → reminder",
    description:
      "A habit reminder driven by context events like \"arrived home\", not the clock. Three Redis Streams and two consumer groups, no database: every view is derived from the streams, and \"done in the last 3 hours?\" is a single XREVRANGE on stream IDs.",
    technologies: ["Go", "Redis Streams", "Consumer groups", "macOS"],
    links: { github: "https://github.com/Poojitha319/habitd" },
  },
  {
    title: "MediBuddy",
    featured: true,
    image: "/projects/medibuddy.png",
    description:
      "Reads a photo of a medicine pack and explains usage, dosage, side effects and warnings in plain language. JWT auth, saved history, and a UI designed for elderly users.",
    technologies: ["FastAPI", "PostgreSQL", "React", "Gemini API", "Docker"],
    links: { github: "https://github.com/Poojitha319/MediBuddy" },
  },
  {
    title: "BloodLink",
    featured: false,
    description: "Real-time donor and blood-bank matching with FAISS vector search, demand forecasting, and geofenced donor alerts.",
    technologies: ["FastAPI", "FAISS", "Vertex AI", "Flutter"],
    links: { github: "https://github.com/Poojitha319/blood-donation-network" },
  },
  {
    title: "MLOps Recommender",
    featured: false,
    description: "Hybrid anime recommender with DVC data versioning, Comet ML experiment tracking, and training and inference pipelines.",
    technologies: ["TensorFlow", "DVC", "Comet ML", "GCP"],
    links: { github: "https://github.com/Poojitha319/MLOPS" },
  },
  {
    title: "VisualDSA",
    featured: false,
    description: "Describe a DSA concept and get a step-by-step animation: LLaMA 3 writes the Manim code, which renders to video.",
    technologies: ["Groq", "LLaMA 3", "Manim", "Streamlit"],
    links: { github: "https://github.com/Poojitha319/VisualDSA" },
  },
  {
    title: "Tailor-Fit",
    featured: false,
    description: "3D body reconstruction and measurement extraction from a single photo, powering virtual try-on.",
    technologies: ["PyTorch", "Open3D", "MediaPipe", "Node.js"],
    links: { github: "https://github.com/Poojitha319/Tailor-Fit-modeldev" },
  },
  {
    title: "VideoGPT",
    featured: false,
    description: "Video captioning that removes redundant frames, then runs InternVL2 with frame sampling and dynamic tiling. Won the IIIT hackathon that led to Parabola9.",
    technologies: ["Python", "InternVL2", "NLP"],
    links: { github: "https://github.com/Poojitha319/The-Challangers" },
  },
];

export const CONTENT = {
  hero: {
    greeting: "Hi, my name is",
    name: "Sai Poojitha.",
    line: "I love building systems that don't break.",
    intro:
      "I'm a backend engineer at Quantum Gandiva AI, where I own the backend of a production multi-agent AI platform for a UK enterprise client — from system design to live incidents.",
  },
  sections: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "hackathons", label: "Hackathons" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Contact" },
  ],
  recentTech: ["Python", "Go", "FastAPI", "Redis Streams", "PostgreSQL", "AWS", "Docker", "LangGraph"],
  work,
  projects,
  contactMessage:
    "I'm open to backend and agentic AI roles. Whether it's a role, a system design chat, or just hi — my inbox is open, and I'll get back to you.",
} as const;
