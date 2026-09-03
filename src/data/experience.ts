export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: "Education" | "Experience" | "Certification" | "Milestone";
}

export const experience: ExperienceItem[] = [
  {
    id: "milestone-1",
    title: "Cybersecurity Engineer & Developer",
    organization: "Independent",
    date: "Present",
    description: "Building enterprise-grade B2B security solutions from the ground up, focusing on VAPT, automation, and API security tooling.",
    category: "Experience"
  },
  {
    id: "edu-1",
    title: "TODO: Education / Degree",
    organization: "TODO: University Name",
    date: "TODO: Date",
    description: "TODO: Add relevant coursework or achievements.",
    category: "Education"
  }
];
