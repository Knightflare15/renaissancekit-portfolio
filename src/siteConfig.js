export const siteConfig = {
  brandName: "Renaissance Kit",
  domain: "renaissancekit.in",
  domainUrl: "https://www.renaissancekit.in",
  instagramHandle: "renaissance_kit",
  instagramUrl: "https://instagram.com/renaissance_kit",
  status: "Portfolio atelier",
  hero: {
    title: "Crafted software with a sharp edge and a quiet finish.",
    summary:
      "Renaissance Kit is a home for elegant interfaces, realtime systems, AI-native products, and projects that balance technical depth with strong visual identity.",
    primaryLabel: "Explore Projects",
    secondaryLabel: "Visit Instagram",
  },
  intro:
    "Inspired by your logo, the site leans into ivory paper, ink-black geometry, and restrained motion instead of generic startup gradients.",
  approach: [
    {
      label: "Design language",
      value: "Classical editorial meets digital precision",
    },
    {
      label: "Frontend",
      value: "React + Vite with editable content config",
    },
    {
      label: "Deployment",
      value: "Static and domain-ready for renaissancekit.in",
    },
    {
      label: "Editing",
      value: "Update links and copy in one file",
    },
  ],
  contactText:
    "The links below are meant to stay easy to swap. Update this config file whenever your GitHub, trailer, or production URLs change.",
  contactLinks: [
    {
      label: "renaissancekit.in",
      href: "https://tmason.azurewebsites.net/",
      style: "primary",
    },
    {
      label: "@renaissance_kit",
      href: "https://instagram.com/renaissance_kit",
      style: "ghost",
    },
  ],
  projects: [
    {
      key: "quattro",
      category: "Realtime game systems",
      title: "Quattro",
      summary:
        "A server-authoritative co-op Tetris project built around realtime play, social systems, and a product-grade multiplayer backend.",
      href: "",
      cta: "Open Tetris project",
      stats: ["React", "TypeScript", "Node.js", "Socket.IO"],
      accent: "obsidian",
    },
    {
      key: "investigation-room",
      category: "Retrieval-backed experience",
      title: "Investigation Room",
      summary:
        "A dossier-style AI investigation platform that blends authored cases, retrieval, dialogue, and grounded archive discovery.",
      href: "https://example.com/replace-with-rag-project-link",
      cta: "Open RAG project",
      stats: ["FastAPI", "RAG", "React", "Ollama"],
      accent: "parchment",
    },
    {
      key: "the-script",
      category: "Trailer showcase",
      title: "The Script",
      summary:
        "A Unity project card reserved for the trailer and the strongest visual slice of the world you are building.",
      href: "https://example.com/replace-with-unity-trailer-link",
      cta: "Watch trailer",
      stats: ["Unity", "C#", "Gameplay", "Trailer"],
      accent: "compass",
    },
  ],
};
