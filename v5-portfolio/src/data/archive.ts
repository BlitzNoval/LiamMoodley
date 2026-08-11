export type Archived = {
  year: string;
  title: string;
  tech: string[];
  href?: string;
  linkLabel?: string;
  githubOnly?: boolean;
};

export const archive: Archived[] = [
  {
    year: '2025',
    title: 'Skewed Lenses — GAI Dyslexia Detection',
    tech: ['React', 'Next.js', 'AI', 'Accessibility'],
    href: 'https://skewed-lenses.vercel.app/',
    linkLabel: 'skewed-lenses.vercel.app',
  },
  {
    year: '2025',
    title: 'Subtrakt — Subscription Tracking App',
    tech: ['React', 'TypeScript', 'UI/UX', 'Figma'],
    href: 'https://www.figma.com/community/file/1512157818958257619/subtrakt-app',
    linkLabel: 'figma.com',
  },
  {
    year: '2026',
    title: 'Buquoy — Brand Book',
    tech: ['Brand Design', 'Identity', 'Typography', 'UX'],
    href: '/buquoy-brand-guide.pdf',
    linkLabel: 'Brand Guide (PDF)',
  },
  {
    year: '2024',
    title: 'Absa Home Loan — Design Project',
    tech: ['UX', 'UI', 'Interface Design', 'Figma'],
    href: 'https://www.figma.com/design/JqpyjAPbojUNQFsfZCcdzZ/Liam_Moodley_Absa_HomeLoan?node-id=0-1&p=f&t=bohIr6tSyJwobz0C-0',
    linkLabel: 'figma.com',
  },
  {
    year: '2024',
    title: 'Cohort — LMS in Google Apps Script',
    tech: ['Google Apps Script', 'JavaScript', 'Education'],
    href: 'https://github.com/BlitzNoval/Learning-Management-System---Google-Apps-Script-',
    linkLabel: 'GitHub',
    githubOnly: true,
  },
];
