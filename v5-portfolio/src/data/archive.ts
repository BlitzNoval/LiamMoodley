export type Archived = {
  year: string;
  title: string;
  type?: string;
  tech: string[];
  href?: string;
  linkLabel?: string;
  githubOnly?: boolean;
};

export const archive: Archived[] = [
  {
    year: '2026',
    title: 'Buquoy Chiropractic',
    type: 'Website',
    tech: ['Web Design', 'Development', 'Healthcare'],
    href: 'https://www.buquoy.co.za/',
    linkLabel: 'buquoy.co.za',
  },
  {
    year: '2025',
    title: 'Fractional Marketing Agency',
    type: 'Website',
    tech: ['Web Development', 'SEO', 'Marketing'],
    href: 'https://www.fractionalagency.co.za/',
    linkLabel: 'fractionalagency.co.za',
  },
  {
    year: '2024',
    title: 'Africa Matters Initiative',
    type: 'Website',
    tech: ['Web Design', 'Development', 'Youth Development'],
    href: 'https://www.africamattersinitiative.com/',
    linkLabel: 'africamattersinitiative.com',
  },
  {
    year: '2024',
    title: 'CROW Wildlife',
    type: 'Website',
    tech: ['UI/UX', 'Web Design', 'Conservation'],
    href: 'https://crowkzn.co.za/',
    linkLabel: 'crowkzn.co.za',
  },
  {
    year: '2025',
    title: 'Skewed Lenses',
    type: 'GAI Dyslexia Detection',
    tech: ['React', 'Next.js', 'AI', 'Accessibility'],
    href: 'https://skewed-lenses.vercel.app/',
    linkLabel: 'skewed-lenses.vercel.app',
  },
  {
    year: '2025',
    title: 'Subtrakt',
    type: 'Subscription Tracking App',
    tech: ['React', 'TypeScript', 'UI/UX', 'Figma'],
    href: 'https://www.figma.com/design/3YW2fEunvcTjelUyutu3tf/Subtrakt-App--Community-?node-id=13-315&p=f&t=BRYiI7UBTWI4M7Ki-0',
    linkLabel: 'figma.com',
  },
  {
    year: '2026',
    title: 'Buquoy',
    type: 'Brand Book',
    tech: ['Brand Design', 'Identity', 'Typography', 'UX'],
    href: '/Buquoy-Brand-Guide-Web-Optimized.pdf',
    linkLabel: 'Brand Guide (PDF)',
  },
  {
    year: '2024',
    title: 'Absa Home Loan',
    type: 'Design Project',
    tech: ['UX', 'UI', 'Interface Design', 'Figma'],
    href: 'https://www.figma.com/design/JqpyjAPbojUNQFsfZCcdzZ/Liam_Moodley_Absa_HomeLoan?node-id=0-1&p=f&t=bohIr6tSyJwobz0C-0',
    linkLabel: 'figma.com',
  },
  {
    year: '2024',
    title: 'Cohort',
    type: 'LMS in Google Apps Script',
    tech: ['Google Apps Script', 'JavaScript', 'Education'],
    href: 'https://github.com/BlitzNoval/Learning-Management-System---Google-Apps-Script-',
    linkLabel: 'GitHub',
    githubOnly: true,
  },
];
