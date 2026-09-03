export type ProjectCategory = "Security Tools" | "Startup Initiatives" | "Cloud Infrastructure" | "Open Source";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes?: string;
}

export const projects: Project[] = [
  {
    id: "vulnradar",
    title: "VulnRadar",
    description: "Automated vulnerability scanner for rapid assessment and reporting.",
    category: "Security Tools",
    techStack: ["Python", "FastAPI", "PostgreSQL"],
    architectureNotes: "Uses asynchronous Python to orchestrate multiple scanning engines simultaneously, aggregating results into a central PostgreSQL database."
  },
  {
    id: "secureflow",
    title: "SecureFlow",
    description: "API security gateway middleware designed for enterprise deployments.",
    category: "Cloud Infrastructure",
    techStack: ["Python", "FastAPI", "Redis"],
    architectureNotes: "Implements high-performance rate limiting and WAF rules at the API gateway layer using Redis for distributed state."
  },
  {
    id: "threatboard",
    title: "ThreatBoard",
    description: "Threat intelligence dashboard aggregating data from various OSINT sources.",
    category: "Security Tools",
    techStack: ["Python", "React", "OSINT APIs"],
    architectureNotes: "A React frontend consuming a Python backend that normalizes data from 10+ different OSINT feeds."
  },
  {
    id: "autorecon",
    title: "AutoRecon",
    description: "Reconnaissance automation suite for red team operations.",
    category: "Security Tools",
    techStack: ["Python", "Bash", "Amass"],
    architectureNotes: "Chains multiple command-line utilities (like Amass) into a unified Python-driven pipeline for continuous asset discovery."
  }
];
