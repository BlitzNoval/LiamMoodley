export type Project = {
  title: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  tech?: string[];
  links?: { label: string; href: string }[];
  stat?: { label: string; icon: 'download' | 'star' };
};

export const projects: Project[] = [
  {
    title: 'Skewed Lenses — GAI Dyslexia Detection',
    href: 'https://skewed-lenses.vercel.app/',
    description:
      'Research-driven web application that explores how visual perception patterns can help detect dyslexia, built as an interactive Gen AI experience.',
    image: '/images/projects/skewed-lenses.png',
    imageAlt: 'Skewed Lenses dyslexia detection project preview',
    tech: ['React', 'Next.js', 'AI', 'Accessibility'],
    links: [
      { label: 'Live Site', href: 'https://skewed-lenses.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/BlitzNoval/Web-Application-AI-Bias-Detector' },
    ],
  },
  {
    title: 'Subtrakt — Subscription Tracking App',
    href: 'https://www.figma.com/community/file/1512157818958257619/subtrakt-app',
    description:
      'Mobile-friendly app for tracking recurring subscriptions in one place. Surfaces upcoming charges, total monthly spend, and price changes so people actually notice what they are being billed for.',
    image: '/images/projects/subtrakt.png',
    imageAlt: 'Subtrakt subscription tracking app preview',
    tech: ['React', 'TypeScript', 'UI/UX', 'Figma'],
    links: [
      {
        label: 'Figma Community',
        href: 'https://www.figma.com/community/file/1512157818958257619/subtrakt-app',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/BlitzNoval/Application-Subtrakt-Subscription-Manager',
      },
    ],
  },
  {
    title: 'Buquoy — Brand Book',
    href: '/buquoy-brand-guide.pdf',
    description:
      'Full brand book for Buquoy: identity, typography system, colour palette, voice, and application guidelines.',
    image: '/images/projects/buquoy.png',
    imageAlt: 'Buquoy brand book cover',
    tech: ['Brand Design', 'Identity', 'Typography', 'UX'],
    links: [{ label: 'Brand Guide (PDF)', href: '/buquoy-brand-guide.pdf' }],
  },
  {
    title: 'Cohort — LMS in Google Apps Script',
    href: 'https://github.com/BlitzNoval/Learning-Management-System---Google-Apps-Script-',
    description:
      'Lightweight Learning Management System built entirely inside the Google Workspace ecosystem using Apps Script. Handles course structure, assignments, and student progress without needing external hosting.',
    image: '/images/projects/cohort.png',
    imageAlt: 'Cohort LMS project preview',
    tech: ['Google Apps Script', 'JavaScript', 'Education'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/BlitzNoval/Learning-Management-System---Google-Apps-Script-',
      },
    ],
  },
];
