export type Job = {
  range: string;
  rangeLabel: string;
  title: string;
  company: string;
  href: string;
  subRoles?: string[];
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

export const experience: Job[] = [
  {
    range: 'May 2026 — Present',
    rangeLabel: 'May 2026 to Present',
    title: 'Digital & AI Intern',
    company: 'Redflank Consulting',
    href: 'https://www.redflank.co.za/',
    description:
      'Work across AI, machine learning, automation, and internal digital tools. Led the development of a RAG-based AI knowledge assistant from early concept through Azure architecture, development, testing, and deployment, culminating in a live demonstration to industry stakeholders in Cape Town. Also contribute to internal automation, data workflows, and experimentation with applied AI.',
    tech: ['Python', 'Azure', 'RAG', 'LLMs', 'Machine Learning', 'React'],
  },
  {
    range: '2026 — Present',
    rangeLabel: '2026 to Present',
    title: 'Tutor & Teaching Assistant',
    company: 'University of the Witwatersrand',
    href: 'https://www.wits.ac.za/',
    description:
      'Teach and support undergraduate Digital Arts students across interactive media and theory courses. Help students work through technical and conceptual problems, provide feedback on projects, and translate complex ideas across programming, design, interactive media, and academic research.',
    tech: ['C#', 'Unity', 'Interactive Media', 'Teaching', 'Research'],
  },
  {
    range: 'Jul 2025 — Aug 2026',
    rangeLabel: 'July 2025 to August 2026',
    title: 'Web Developer & SEO',
    company: 'Fractional Agency',
    href: 'https://fractionalagency.co.za/',
    subRoles: ['Client work via NIAEXE'],
    description:
      'Delivered web development and SEO work for Fractional Agency across a year-long engagement, contributing to client sites and improving discoverability. Engagement ran through NIAEXE.',
    tech: ['JavaScript', 'React', 'HTML & CSS', 'SEO', 'WordPress'],
  },
  {
    range: 'Jan — Jul 2025',
    rangeLabel: 'January to July 2025',
    title: 'UI/UX Redesign',
    company: 'CROW South Africa',
    href: 'https://crowkzn.co.za/',
    subRoles: ['Client work via NIAEXE'],
    description:
      'Led the UI/UX redesign for CROW, a Durban-based wildlife rehabilitation NPO. Rethought the site structure and visual language to make their research, rescue work, and donation flows clearer for a general audience.',
    tech: ['UI/UX', 'Figma', 'Web Design', 'NPO'],
  },
  {
    range: '2023 — Present',
    rangeLabel: '2023 to Present',
    title: 'Founder & Full-Stack Developer',
    company: 'NIAEXE',
    href: '#',
    description:
      'Design, build, and manage websites and digital platforms for organisations across healthcare, marketing, conservation, and youth development. Work across the full development process, from UI/UX and visual design through frontend development, backend functionality, deployment, and ongoing maintenance.',
    tech: ['JavaScript', 'React', 'HTML & CSS', 'WordPress', 'UI/UX', 'Full-Stack Development'],
  },
];
