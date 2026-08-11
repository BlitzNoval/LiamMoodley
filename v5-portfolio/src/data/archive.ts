export type Archived = {
  year: string;
  title: string;
  madeAt?: string;
  tech: string[];
  href?: string;
  linkLabel?: string;
  githubOnly?: boolean;
};

export const archive: Archived[] = [
  { year: '2023', title: 'Emerson Collective', madeAt: 'Upstatement', tech: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'], href: 'https://www.emersoncollective.com/', linkLabel: 'emersoncollective.com' },
  { year: '2023', title: 'Harvard Business School Next.js Site', madeAt: 'Upstatement', tech: ['React', 'TypeScript', 'Next.js', 'Contentful'], href: 'https://www.hbs.edu/', linkLabel: 'hbs.edu' },
  { year: '2022', title: 'Harvard Business School Design System', madeAt: 'Upstatement', tech: ['Storybook', 'React', 'TypeScript'] },
  { year: '2022', title: 'Threadable', madeAt: 'Upstatement', tech: ['React Native', 'Ruby on Rails', 'Firebase'], href: 'https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&ct=threadablebooks.com%20header&mt=8', linkLabel: 'apps.apple.com' },
  { year: '2022', title: 'Pratt', madeAt: 'Upstatement', tech: ['WordPress', 'Timber', 'WordPress Multisite', 'Gutenberg', 'JavaScript'], href: 'https://www.pratt.edu/', linkLabel: 'pratt.edu' },
  { year: '2022', title: 'Everytown Gun Law Rankings', madeAt: 'Upstatement', tech: ['WordPress', 'Timber', 'PHP', 'Airtable API'], href: 'https://everytownresearch.org/rankings/', linkLabel: 'everytownresearch.org/rankings' },
  { year: '2021', title: 'Koala Health', madeAt: 'Upstatement', tech: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Stripe', 'Algolia', 'Firebase Auth', 'Formik', 'Vercel'], href: 'https://www.koala.health/', linkLabel: 'koala.health' },
  { year: '2021', title: 'Philadelphia Inquirer Sports Scoreboards', madeAt: 'Upstatement', tech: ['React', 'TypeScript', 'Stats Perform API'], href: 'https://www.inquirer.com/sports/', linkLabel: 'inquirer.com/sports' },
  { year: '2021', title: 'Vanderbilt Design System', madeAt: 'Upstatement', tech: ['Twig', 'Puppy', 'JavaScript'], href: 'https://www.vanderbilt.edu/', linkLabel: 'vanderbilt.edu' },
  { year: '2020', title: 'Michelle Wu for Boston Grassroots Toolkit', madeAt: 'Upstatement', tech: ['Gatsby', 'Styled Components'], href: 'https://toolkit.michelleforboston.com/', linkLabel: 'toolkit.michelleforboston.com' },
  { year: '2020', title: 'The 19th News', madeAt: 'Upstatement', tech: ['WordPress', 'Timber', 'Gutenberg', 'PHP', 'JavaScript', 'Mailchimp', 'AMP'], href: 'https://19thnews.org/', linkLabel: '19thnews.org' },
  { year: '2020', title: "Upstatement's WordPress Starter Kit", madeAt: 'Upstatement', tech: ['WordPress', 'Timber', 'Gutenberg', 'PHP', 'JavaScript'] },
  { year: '2020', title: 'Northeastern CSSH', madeAt: 'Upstatement', tech: ['WordPress', 'Timber', 'WordPress Multisite', 'PHP', 'Algolia', 'JavaScript'], href: 'https://cssh.northeastern.edu/', linkLabel: 'cssh.northeastern.edu' },
  { year: '2020', title: 'Integrating Algolia Search with WordPress Multisite', madeAt: 'Upstatement', tech: ['Algolia', 'WordPress', 'PHP'], href: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c', linkLabel: 'medium.com' },
  { year: '2020', title: 'Time to Have More Fun', tech: ['Next.js', 'Tailwind CSS', 'Firebase'], href: 'https://time-to-have-more-fun.now.sh/', linkLabel: 'time-to-have-more-fun.now.sh' },
  { year: '2019', title: 'Upstatement.com', madeAt: 'Upstatement', tech: ['Nuxt', 'Vue', 'Prismic'], href: 'https://www.upstatement.com/', linkLabel: 'upstatement.com' },
  { year: '2019', title: 'Building a Headless Mobile App CMS From Scratch', madeAt: 'Upstatement', tech: ['Node', 'Express', 'Firebase', 'Vue'], href: 'https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9', linkLabel: 'medium.com' },
  { year: '2019', title: 'Moms Demand Action Mobile App', madeAt: 'Upstatement', tech: ['NativeScript Vue', 'iOS', 'Android'], href: 'https://www.upstatement.com/work/moms-demand-action/', linkLabel: 'Case Study' },
  { year: '2019', title: 'OctoProfile', tech: ['Next.js', 'Chart.js', 'GitHub API'], href: 'https://octoprofile.now.sh', linkLabel: 'octoprofile.now.sh' },
  { year: '2018', title: 'Google Keep Clone', tech: ['Vue', 'Firebase'], href: 'https://github.com/bchiang7/google-keep-vue-firebase', linkLabel: 'GitHub', githubOnly: true },
  { year: '2018', title: 'Spotify Profile', tech: ['React', 'Express', 'Styled Components'], href: 'https://spotify-profile.herokuapp.com/', linkLabel: 'spotify-profile.herokuapp.com' },
  { year: '2018', title: 'Devoted Health', madeAt: 'Upstatement', tech: ['Gatsby', 'TypeScript', 'Algolia'], href: 'https://www.devoted.com/', linkLabel: 'devoted.com' },
  { year: '2018', title: 'Flagship Pioneering', madeAt: 'Upstatement', tech: ['Craft CMS', 'Chart.js'], href: 'https://www.flagshippioneering.com/', linkLabel: 'flagshippioneering.com' },
  { year: '2018', title: 'Upstatement ESLint Config', madeAt: 'Upstatement', tech: ['ESLint'], href: 'https://www.npmjs.com/package/@upstatement/eslint-config', linkLabel: 'npmjs.com' },
  { year: '2018', title: 'Upstatement Prettier Config', madeAt: 'Upstatement', tech: ['Prettier'], href: 'https://www.npmjs.com/package/@upstatement/prettier-config', linkLabel: 'npmjs.com' },
  { year: '2018', title: 'blistabloc', madeAt: 'Scout', tech: ['WordPress', 'Timber', 'WooCommerce'] },
  { year: '2018', title: "Spotify's Top Tracks of 2017", madeAt: 'Northeastern', tech: ['R', 'Spotify API'], href: 'https://github.com/bchiang7/spotify-top-tracks-2017', linkLabel: 'GitHub', githubOnly: true },
  { year: '2017', title: 'Halcyon Theme', tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'], href: 'https://halcyon-theme.netlify.com/', linkLabel: 'halcyon-theme.netlify.com' },
  { year: '2017', title: 'Apple Music - MusicKit JS', madeAt: 'Apple', tech: ['JavaScript'], href: 'https://developer.apple.com/documentation/musickitjs', linkLabel: 'developer.apple.com' },
  { year: '2017', title: 'Apple Music Embeddable Web Player Widget', madeAt: 'Apple', tech: ['MusicKit.js', 'JavaScript', 'SCSS'], href: 'https://tools.applemusic.com/en-us', linkLabel: 'tools.applemusic.com' },
  { year: '2017', title: 'Apple Music Facebook Messenger Integration', madeAt: 'Apple', tech: ['Ember', 'JavaScript', 'SCSS'], href: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming', linkLabel: 'theverge.com' },
  { year: '2017', title: 'Personal Website V3', tech: ['Jekyll', 'SCSS', 'JavaScript'], href: 'https://v3.brittanychiang.com/', linkLabel: 'v3.brittanychiang.com' },
  { year: '2017', title: 'Interventions', madeAt: 'Scout', tech: ['Jekyll', 'SCSS', 'JavaScript'], href: 'https://interventions.design/', linkLabel: 'interventions.design' },
  { year: '2017', title: 'Lonely Planet DBMS', madeAt: 'Northeastern', tech: ['Python', 'MySQL', 'Flask', 'JavaScript'], href: 'https://github.com/bchiang7/CS3200-Project', linkLabel: 'GitHub', githubOnly: true },
  { year: '2017', title: 'myNEU Redesign', madeAt: 'Northeastern', tech: ['Jekyll', 'SCSS', 'JavaScript'], href: 'https://bchiang7.github.io/Redesign-myNEU/', linkLabel: 'bchiang7.github.io/Redesign-myNEU' },
  { year: '2017', title: 'Crowd DJ', madeAt: 'HackBeanpot 2017', tech: ['React', 'Firebase', 'Spotify API'], href: 'https://github.com/crowddj/crowddj-react', linkLabel: 'GitHub', githubOnly: true },
  { year: '2016', title: 'Personal Website V2', tech: ['Jekyll', 'SCSS', 'JavaScript'], href: 'https://v2.brittanychiang.com/', linkLabel: 'v2.brittanychiang.com' },
  { year: '2016', title: 'Weather Widget', tech: ['Node', 'Express', 'EJS'], href: 'https://github.com/bchiang7/DemoWebApp', linkLabel: 'GitHub', githubOnly: true },
  { year: '2016', title: 'Screentime 2.0', madeAt: 'Starry', tech: ['Cordova', 'Backbone', 'Marionette'], href: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents', linkLabel: 'starry.com' },
  { year: '2016', title: 'React Profile', tech: ['React', 'CSS'], href: 'https://bchiang7.github.io/react-profile/', linkLabel: 'bchiang7.github.io/react-profile' },
  { year: '2016', title: 'CourseSource', madeAt: 'Northeastern', tech: ['Angular', 'Node', 'Express', 'MongoDB'], href: 'https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project', linkLabel: 'GitHub', githubOnly: true },
  { year: '2016', title: 'Personal Website V1', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], href: 'https://v1.brittanychiang.com/', linkLabel: 'v1.brittanychiang.com' },
  { year: '2016', title: 'Fontipsums', tech: ['HTML', 'SCSS'], href: 'http://bchiang7.github.io/fontipsums/', linkLabel: 'bchiang7.github.io/fontipsums' },
  { year: '2015', title: 'NU Women in Tech', madeAt: 'Northeastern', tech: ['Jekyll', 'Bootstrap'], href: 'https://nuwit.ccs.neu.edu/', linkLabel: 'nuwit.ccs.neu.edu' },
  { year: '2015', title: 'One Card For All', madeAt: 'MullenLowe', tech: ['HTML', 'SCSS', 'JavaScript', 'jQuery'] },
  { year: '2015', title: 'JetBlue HumanKinda', madeAt: 'MullenLowe', tech: ['Tumblr', 'HTML', 'CSS', 'JavaScript'] },
];
