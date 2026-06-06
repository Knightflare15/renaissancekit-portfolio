export const siteConfig = {
  brandName: "Renaissance Kit",
  domain: "renaissancekit.in",
  domainUrl: "https://www.renaissancekit.in",
  instagramHandle: "renaissance_kit",
  instagramUrl: "https://instagram.com/renaissance_kit",
  status: "Still Becoming.",
  hero: {
    title: "Software, games, and AI projects.",
    summary: "Fun projects trying to spin boring concepts into fun games to keep myself engaged and learn.",
    primaryLabel: "Explore Projects",
    secondaryLabel: "Visit Instagram",
  },
  intro:
    "Have a look for yourself",
  approach: [
    {
      label: "Built with",
      value: "React, Vite, plain CSS",
    },
    {
      label: "Hosted on",
      value: "Azure Static Web Apps",
    },
    {
      label: "Edit links in",
      value: "src/siteConfig.js",
    },
    {
      label: "Domain",
      value: "renaissancekit.in",
    },
  ],
  contactText:
    "Project links, socials, and domain details all live in one config file, so updating this site later should stay painless.",
  contactLinks: [
    {
      label: "renaissancekit.in",
      href: "https://www.renaissancekit.in",
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
        "A server-authoritative co-op puzzle game focused on realtime multiplayer, clean game feel, and a backend that does the heavy lifting.",
      href: "https://tmason.azurewebsites.net",
      cta: "Open project",
      stats: ["React", "TypeScript", "Node.js", "Socket.IO"],
      accent: "obsidian",
    },
    {
      key: "investigation-room",
      category: "Retrieval-backed experience",
      title: "Investigation Room",
      summary:
        "A case-based investigation app that combines retrieval, dialogue, and authored content in a format that feels more like a dossier than a chatbot.",
      href: "https://example.com/replace-with-rag-project-link",
      cta: "Open project",
      stats: ["FastAPI", "RAG", "React", "Ollama"],
      accent: "parchment",
    },
    {
      key: "the-script",
      category: "Trailer showcase",
      title: "The Script",
      summary:
        "A Unity project still taking shape. This link is meant for the trailer once you have the strongest visual slice ready to show publicly.",
      href: "https://example.com/replace-with-unity-trailer-link",
      cta: "Watch trailer",
      stats: ["Unity", "C#", "Gameplay", "Trailer"],
      accent: "compass",
    },
  ],
};
