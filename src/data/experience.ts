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
    title: "B.E. Computer Science and Engineering (3rd Year)",
    organization: "V.S.B. College of Engineering Technical Campus",
    date: "2024 - 2028",
    description: "Currently pursuing a degree in Computer Science, focusing on software engineering, algorithms, and cybersecurity.",
    category: "Education"
  }
];
