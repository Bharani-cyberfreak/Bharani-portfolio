export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Bharanidharan',
  displayName: 'Bharanidharan',
  firstName: 'BHARANIDHARAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A CYBERSECURITY ORIGINAL',
  role: 'Cybersecurity Engineer',
  tagline: ['Cybersecurity Engineer', 'Ethical Hacker', 'Developer'],
  intro: 'Building enterprise-grade B2B security solutions. Specializing in VAPT, automation, and API security tooling.',
  location: 'Security Builder',
  email: 'cyberfreak833@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/bharanidharan-d/',
    github: 'https://github.com/Bharani-cyberfreak',
  },
  resumePdf: '/Bharanidharan_Resume.pdf',
  portrait: {
    src: '/headshot.jpg',
    srcSet: '/headshot.jpg',
    alt: 'Portrait of Bharani',
  },
  interests: ['Red Teaming', 'Blue Teaming', 'API Security'],
};

export const education = [
  {
    school: 'V.S.B. College of Engineering Technical Campus',
    place: 'Coimbatore',
    degree: 'B.E. Computer Science and Engineering',
    period: '2024 – 2028',
    score: '3rd Year',
  },
];

export const experience = [
  {
    company: 'Independent',
    role: 'Cybersecurity Engineer & Developer',
    place: 'Remote',
    period: 'Present',
    points: [
      'Building enterprise-grade B2B security solutions from the ground up, focusing on VAPT, automation, and API security tooling.',
      'Actively building next-gen security solutions.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'cyber-rag',
    title: 'Personal Cybersecurity Knowledge RAG',
    year: '2026',
    genre: 'AI • Cybersecurity',
    logline: 'Retrieval-augmented generation application delivering context-aware cybersecurity answers.',
    stack: ['Flask', 'ChromaDB', 'Claude API'],
    build: [
      'Built from scratch with a Flask backend and ChromaDB vector store.',
      'Integrated Claude API to deliver source-grounded answers over a curated knowledge base.',
    ],
    features: [
      'Retrieval-Augmented Generation',
      'Context-aware AI answers',
      'Custom dark-themed terminal UI',
      'Vector DB integration',
    ],
    metrics: [
      { value: 'AI', label: 'Powered' },
      { value: 'Claude', label: 'LLM' },
      { value: 'ChromaDB', label: 'Vector Store' },
      { value: 'Flask', label: 'Backend' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'password-analyzer',
    title: 'Password Strength Analyzer',
    year: '2026',
    genre: 'Security Tools • Analysis',
    logline: 'OOP-based architecture evaluating password strength using the zxcvbn library.',
    stack: ['Python', 'Streamlit', 'ReportLab'],
    build: [
      'Designed an interactive Streamlit interface for password evaluation.',
      'Implemented automated PDF report generation with ReportLab.',
    ],
    features: [
      'zxcvbn strength evaluation',
      'Interactive UI',
      'Automated PDF reports',
      'OOP architecture',
    ],
    metrics: [
      { value: 'zxcvbn', label: 'Engine' },
      { value: 'PDF', label: 'Reporting' },
      { value: 'Streamlit', label: 'Frontend' },
      { value: 'Python', label: 'Backend' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'network-scanner',
    title: 'Network Vulnerability Scanner',
    year: '2026',
    genre: 'Offensive Security • Tools',
    logline: 'Python-based scanner leveraging Nmap to identify open ports and vulnerabilities.',
    stack: ['Python', 'Nmap', 'Metasploitable2'],
    build: [
      'Developed a Python tool automating Nmap scans for target hosts.',
      'Tested and validated detection logic against a Metasploitable2 environment.',
    ],
    features: [
      'Automated port scanning',
      'Vulnerability identification',
      'Metasploitable2 validated',
      'Nmap integration',
    ],
    metrics: [
      { value: 'Nmap', label: 'Core' },
      { value: 'Validated', label: 'Accuracy' },
      { value: 'Python', label: 'Automation' },
      { value: 'Offensive', label: 'Security' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: '100days',
    title: '100 Days Badge',
    org: 'LeetCode',
    detail: 'Solved 100+ consecutive days of problems on LeetCode (Java)',
    laurel: 'Problem Solving',
  },
  {
    id: 'publication',
    title: 'Research Publication',
    org: 'IJDDT',
    detail: 'Efficient Verifiable Search over Encrypted IoT Data with Merkle Tree-Based Integrity and Pattern Privacy',
    laurel: 'Research',
  }
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Infosys Springboard', name: 'Data Structures & Algorithms using Python', link: '#' },
  { issuer: 'Infosys Springboard', name: 'SQL Developer', link: '#' },
  { issuer: 'Infosys Springboard', name: 'Python Foundation', link: '#' },
  { issuer: 'Infosys Springboard', name: 'Cloud Computing', link: '#' },
  { issuer: 'Hackviser', name: 'Certified Cybersecurity Foundation', link: '#' },
  { issuer: 'Cappriciosec University', name: 'Certified Ethical Hacking & Penetration Testing (CEHPT)', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Offensive & Defensive',
    skills: [
      { name: 'Offensive Security', mono: 'Os' },
      { name: 'Defensive Security', mono: 'Ds' },
      { name: 'Cloud Security', mono: 'Cs' },
      { name: 'Identity Security', mono: 'Is' },
      { name: 'VAPT', mono: 'Va' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Infra',
    subtitle: 'Building block tooling',
    skills: [
      { name: 'Linux', mono: 'Lx' },
      { name: 'Nmap', mono: 'Nm' },
      { name: 'Burp Suite', mono: 'Bs' },
      { name: 'Security Automation', mono: 'Sa' },
    ],
  },
  {
    id: 'dev',
    title: 'Development',
    subtitle: 'Software Engineering',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Ja' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'FastAPI', mono: 'Fa' },
    ],
  }
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Cyber RAG', 'Password Analyzer', 'Network Scanner'],
  Flask: ['Cyber RAG'],
  'Offensive Security': ['Network Scanner'],
  'Defensive Security': ['Password Analyzer'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette; };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[]; };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2024 – 2028',
    synopsis: 'B.E. Computer Science and Engineering at V.S.B. College of Engineering Technical Campus.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Currently pursuing a degree in Computer Science, focusing on software engineering, algorithms, and cybersecurity.',
        tags: ['B.E.', 'CSE'],
        runtime: '2024 – 2028',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Builder',
    period: 'Present',
    synopsis: 'Building enterprise-grade B2B security solutions.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Cybersecurity Engineer',
        description: 'Building VAPT, automation, and API security tooling from the ground up.',
        tags: ['VAPT', 'API Security'],
        runtime: 'Present',
        palette: crimson,
      },
    ],
  }
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'AI & Security', title: 'Cyber RAG', detail: 'Knowledge retrieval app', palette: crimson },
  { label: 'Tooling', title: 'Password Analyzer', detail: 'Strength evaluation engine', palette: ocean },
  { label: 'Offensive', title: 'Network Scanner', detail: 'Nmap vulnerability automation', palette: amber },
  { label: 'Problem Solving', title: 'LeetCode 100', detail: '100 Days Badge', palette: violet },
  { label: 'Engineering', title: 'Python', detail: 'Primary development language', palette: jade },
  { label: 'Core Skill', title: 'VAPT', detail: 'Vulnerability Assessment & Penetration Testing', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. CSE',
    lines: ['V.S.B. College of Engineering Technical Campus', '3rd Year (2024 - 2028)'],
    chips: ['CSE'],
  },
  {
    kicker: 'Skills',
    title: 'Security First.',
    lines: ['Offensive Security, Defensive Security, Cloud Security', 'Python, FastAPI, PostgreSQL, Linux, Nmap, Burp Suite'],
    chips: ['Security', 'Python', 'FastAPI'],
  },
  {
    kicker: 'Projects',
    title: 'Security Tools',
    lines: ['Cybersecurity RAG, Password Analyzer, Network Scanner', 'Building next-gen enterprise security solutions'],
  },
];

export type ProfileId = 'bharani' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'bharani',
    name: 'Bharanidharan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
