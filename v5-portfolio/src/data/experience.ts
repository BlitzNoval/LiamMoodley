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
    range: '2024 — Present',
    rangeLabel: '2024 to Present',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    href: 'https://www.klaviyo.com',
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tech: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    range: '2018 — 2024',
    rangeLabel: '2018 to 2024',
    title: 'Lead Engineer',
    company: 'Upstatement',
    href: 'https://upstatement.com',
    subRoles: ['Senior Engineer', 'Engineer'],
    description:
      'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
    tech: [
      'JavaScript',
      'TypeScript',
      'HTML & SCSS',
      'React',
      'Next.js',
      'React Native',
      'WordPress',
      'Contentful',
      'Node.js',
      'PHP',
    ],
  },
  {
    range: 'July — Dec 2017',
    rangeLabel: 'July to December 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    href: 'https://www.apple.com/apple-music/',
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    tech: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
    links: [
      { label: 'MusicKit.js', href: 'https://developer.apple.com/documentation/musickitjs' },
      {
        label: '9to5Mac',
        href: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/',
      },
      {
        label: 'The Verge',
        href: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming',
      },
    ],
  },
  {
    range: '2016 — 2017',
    rangeLabel: '2016 to 2017',
    title: 'Developer',
    company: 'Scout Studio',
    href: 'https://scout.camd.northeastern.edu/',
    description:
      'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.',
    tech: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress'],
  },
  {
    range: 'July — Dec 2016',
    rangeLabel: 'July to December 2016',
    title: 'Software Engineer Co-op',
    company: 'Starry',
    href: 'https://starry.com/',
    description:
      "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
    tech: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
    links: [
      {
        label: 'Android App',
        href: 'https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US',
      },
      {
        label: 'ScreenTime 2.0',
        href: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents',
      },
    ],
  },
  {
    range: 'July — Dec 2015',
    rangeLabel: 'July to December 2015',
    title: 'Creative Technologist Co-op',
    company: 'MullenLowe U.S.',
    href: 'https://us.mullenlowe.com/',
    description:
      'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
];
