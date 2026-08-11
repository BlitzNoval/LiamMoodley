export type Post = {
  year: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const writing: Post[] = [
  {
    year: '2026',
    title: 'Welcome to the AI Parade',
    href: 'https://medium.com/@bchiang7/welcome-to-the-ai-parade-765f79b00c30',
    image: '/images/writing/ai-parade.png',
    imageAlt: 'Welcome to Black Parade by My Chemical Romance text with "Black" changed to "AI"',
  },
  {
    year: '2024',
    title: '5 Common Accessibility Pitfalls and How to Avoid Them',
    href: 'https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0',
    image: '/images/writing/a11y.png',
    imageAlt: 'Accessibility icon',
  },
  {
    year: '2020',
    title: 'Integrating Algolia Search with WordPress Multisite',
    href: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    image: '/images/writing/algolia-search.jpeg',
    imageAlt: 'Telescope',
  },
  {
    year: '2019',
    title: 'Building a Headless Mobile App CMS From Scratch',
    href: 'https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9',
    image: '/images/writing/headless.jpeg',
    imageAlt: 'Headless horseman',
  },
];
