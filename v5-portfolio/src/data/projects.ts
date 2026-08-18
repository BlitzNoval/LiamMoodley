export type Project = {
  title: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  tech?: string[];
  links?: { label: string; href: string }[];
  stat?: { label: string; icon: 'download' | 'star' | 'eye' | 'share' };
};

export const projects: Project[] = [
  {
    title: 'Absa Home Loan — Design Project',
    href: 'https://www.figma.com/design/JqpyjAPbojUNQFsfZCcdzZ/Liam_Moodley_Absa_HomeLoan?node-id=0-1&p=f&t=bohIr6tSyJwobz0C-0',
    description:
      'Concept design for an Absa Home Loan application experience. Focus on flow, clarity and progressive user access across a multi-step financial app.',
    image: '/images/projects/absa.png',
    imageAlt: 'Absa Home Loan design project preview',
    tech: ['UX', 'UI', 'Interface Design', 'Figma'],
    links: [
      {
        label: 'Figma File',
        href: 'https://www.figma.com/design/JqpyjAPbojUNQFsfZCcdzZ/Liam_Moodley_Absa_HomeLoan?node-id=0-1&p=f&t=bohIr6tSyJwobz0C-0',
      },
    ],
  },
  {
    title: 'Buquoy — Brand Book',
    href: '/Buquoy-Brand-Guide-Web-Optimized.pdf',
    description:
      'Full brand book for Buquoy: identity, typography system, colour palette, voice, and application guidelines.',
    image: '/images/projects/buquoy.png',
    imageAlt: 'Buquoy brand book cover',
    tech: ['Brand Design', 'Identity', 'Typography', 'UX'],
    links: [{ label: 'Brand Guide (PDF)', href: '/Buquoy-Brand-Guide-Web-Optimized.pdf' }],
  },
  {
    title: 'Skewed Lenses — GAI Dyslexia Detection',
    href: 'https://skewed-lenses.vercel.app/',
    description:
      'Research-driven web application that explores how visual perception patterns can help detect dyslexia, built as an interactive Gen AI experience.',
    image: '/images/projects/skewed-lenses.png',
    imageAlt: 'Skewed Lenses dyslexia detection project preview',
    tech: ['React', 'Next.js', 'AI', 'Accessibility'],
    stat: { label: '14', icon: 'download' },
    links: [
      { label: 'Live Site', href: 'https://skewed-lenses.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/BlitzNoval/Web-Application-AI-Bias-Detector' },
    ],
  },
  {
    title: 'Subtrakt — Subscription Tracking App',
    href: 'https://www.figma.com/design/3YW2fEunvcTjelUyutu3tf/Subtrakt-App--Community-?node-id=13-315&p=f&t=BRYiI7UBTWI4M7Ki-0',
    description:
      'Mobile-friendly app for tracking recurring subscriptions in one place. Surfaces upcoming charges, total monthly spend, and price changes so people actually notice what they are being billed for.',
    image: '/images/projects/subtrakt.png',
    imageAlt: 'Subtrakt subscription tracking app preview',
    tech: ['React', 'TypeScript', 'UI/UX', 'Figma'],
    stat: { label: '25', icon: 'eye' },
    links: [
      {
        label: 'Figma Community',
        href: 'https://www.figma.com/design/3YW2fEunvcTjelUyutu3tf/Subtrakt-App--Community-?node-id=13-315&p=f&t=BRYiI7UBTWI4M7Ki-0',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/BlitzNoval/Application-Subtrakt-Subscription-Manager',
      },
    ],
  },
];
