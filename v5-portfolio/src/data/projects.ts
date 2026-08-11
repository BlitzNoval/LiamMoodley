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
    title: 'Build a Spotify Connected App',
    href: 'https://www.newline.co/courses/build-a-spotify-connected-app',
    description:
      'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    image: '/images/projects/course-card.png',
    imageAlt: 'Build a Spotify Connected App Newline course marketing card',
  },
  {
    title: 'Spotify Profile',
    href: 'https://spotify-profile.herokuapp.com/',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/images/projects/spotify-profile.png',
    imageAlt: 'Spotify Profile app homepage',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'Halcyon Theme',
    href: 'https://halcyon-theme.netlify.app/',
    description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    image: '/images/projects/halcyon.png',
    imageAlt: 'Halcyon Theme homepage hero with screenshot of VS Code editor',
    stat: { label: '100k+ Installs', icon: 'download' },
  },
  {
    title: 'brittanychiang.com (v4)',
    href: 'https://v4.brittanychiang.com/',
    description: 'An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks',
    image: '/images/projects/v4.png',
    imageAlt: 'brittanychiang.com version 4 hero section',
    tech: ['Gatsby', 'Styled Components', 'Netlify'],
  },
];
