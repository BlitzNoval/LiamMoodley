export type Project = {
  title: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  tech?: string[];
  stat?: { label: string; icon: 'download' | 'star' };
};

export const projects: Project[] = [
  {
    title: 'Skewed Lenses — Dyslexia Detection',
    href: '#',
    description:
      'Research-driven tool exploring how visual perception patterns can be used to help detect dyslexia. Built as an interactive experience that guides the user through calibration tasks and surfaces indicators worth flagging for follow-up.',
    image: '/images/projects/skewed-lenses.png',
    imageAlt: 'Skewed Lenses dyslexia detection project preview',
    tech: ['Research', 'Interactive Media', 'Accessibility'],
  },
  {
    title: 'Subtrakt — Subscription Tracking App',
    href: '#',
    description:
      'Mobile-friendly app for tracking recurring subscriptions in one place. Surfaces upcoming charges, total monthly spend, and price changes so people actually notice what they are being billed for.',
    image: '/images/projects/subtrakt.png',
    imageAlt: 'Subtrakt subscription tracking app preview',
    tech: ['React', 'TypeScript', 'UI/UX'],
  },
  {
    title: 'Buquoy — Brand Book',
    href: '#',
    description:
      'Full brand book for Buquoy: identity, typography system, colour palette, voice, and application guidelines. Built to give the team a single reference for keeping the brand consistent across surfaces.',
    image: '/images/projects/buquoy.png',
    imageAlt: 'Buquoy brand book cover',
    tech: ['Brand Design', 'Identity', 'Typography'],
  },
  {
    title: 'Cohort — LMS in Google Apps Script',
    href: '#',
    description:
      'Lightweight Learning Management System built entirely inside the Google Workspace ecosystem using Apps Script. Handles course structure, assignments, and student progress without needing external hosting.',
    image: '/images/projects/cohort.png',
    imageAlt: 'Cohort LMS project preview',
    tech: ['Google Apps Script', 'JavaScript', 'Education'],
  },
];
