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
    id: 'vulnradar',
    title: 'VulnRadar',
    year: '2026',
    genre: 'Security Tools • VAPT',
    logline: 'Automated vulnerability scanner for rapid assessment and reporting.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    build: [
      'Uses asynchronous Python to orchestrate multiple scanning engines simultaneously.',
      'Aggregating results into a central PostgreSQL database.',
    ],
    features: [
      'Automated scanning',
      'Rapid assessment reporting',
      'Async Python orchestration',
      'PostgreSQL aggregation',
    ],
    metrics: [
      { value: 'Fast', label: 'Scanning Speed' },
      { value: 'Async', label: 'Architecture' },
      { value: 'Central', label: 'Database' },
      { value: 'Python', label: 'Engine' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'secureflow',
    title: 'SecureFlow',
    year: '2026',
    genre: 'Cloud Infrastructure • Security',
    logline: 'API security gateway middleware designed for enterprise deployments.',
    stack: ['Python', 'FastAPI', 'Redis'],
    build: [
      'Implements high-performance rate limiting and WAF rules at the API gateway layer.',
      'Uses Redis for distributed state.',
    ],
    features: [
      'API gateway middleware',
      'Rate limiting',
      'WAF rules',
      'Redis distributed state',
    ],
    metrics: [
      { value: 'High', label: 'Performance' },
      { value: 'WAF', label: 'Rules' },
      { value: 'Redis', label: 'State' },
      { value: 'Enterprise', label: 'Scale' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'threatboard',
    title: 'ThreatBoard',
    year: '2026',
    genre: 'Security Tools • Intelligence',
    logline: 'Threat intelligence dashboard aggregating data from various OSINT sources.',
    stack: ['Python', 'React', 'OSINT APIs'],
    build: [
      'A React frontend consuming a Python backend.',
      'Normalizes data from 10+ different OSINT feeds.',
    ],
    features: [
      'Threat intelligence',
      'OSINT data aggregation',
      'React dashboard',
      'Python normalization backend',
    ],
    metrics: [
      { value: '10+', label: 'OSINT feeds' },
      { value: 'React', label: 'Frontend' },
      { value: 'Python', label: 'Backend' },
      { value: 'Real-time', label: 'Intelligence' },
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
    id: 'cyber',
    title: 'Security Tools Developer',
    org: 'Independent',
    detail: 'Building enterprise-grade tools like VulnRadar and SecureFlow.',
    laurel: 'Engineering',
  }
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
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
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'PostgreSQL', mono: 'Pg' },
    ],
  }
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['VulnRadar', 'SecureFlow', 'ThreatBoard', 'AutoRecon'],
  FastAPI: ['VulnRadar', 'SecureFlow'],
  PostgreSQL: ['VulnRadar'],
  'Offensive Security': ['VAPT'],
  'Defensive Security': ['Security Automation'],
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
  { label: 'Security Tools', title: 'VulnRadar', detail: 'Automated vulnerability scanner', palette: crimson },
  { label: 'Cloud Infra', title: 'SecureFlow', detail: 'API security gateway middleware', palette: ocean },
  { label: 'Threat Intel', title: 'ThreatBoard', detail: 'OSINT dashboard', palette: amber },
  { label: 'Recon', title: 'AutoRecon', detail: 'Automation suite', palette: violet },
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
    lines: ['VulnRadar, SecureFlow, ThreatBoard', 'Building next-gen enterprise security solutions'],
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
