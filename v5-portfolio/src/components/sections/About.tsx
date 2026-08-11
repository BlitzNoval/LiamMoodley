import { SectionHeading } from '../SectionHeading';
import { Korok } from '../Korok';

const linkClass = 'font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300';

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeading id="about-heading" label="About" />
      <div>
        <p className="mb-4">
          Hi there! I&apos;m Brittany, and I like building things. I&apos;m a frontend engineer with
          expertise in crafting accessible, pixel-perfect user interfaces. I take pride in creating
          thoughtful, inclusive products and have a sharp eye for the little details that separate
          a good product from an exceptional one. I enjoy working most at the intersection of
          design and engineering, where great user experience meets clean, scalable code.
        </p>
        <p className="mb-4">
          Currently, I&apos;m a Senior Frontend Engineer at{' '}
          <a
            className={linkClass}
            href="https://www.klaviyo.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Klaviyo (opens in a new tab)"
          >
            Klaviyo
          </a>
          , where I work on our design system and help build new products, like{' '}
          <a
            className={linkClass}
            href="https://www.klaviyo.com/composer"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Composer (opens in a new tab)"
          >
            Composer
          </a>
          . I lead engineering efforts across our component library and front end platform,
          partnering closely with designers and engineers to ensure accessibility is built into the
          foundation of everything we ship.
        </p>
        <p className="mb-4">
          Previously, I&rsquo;ve worked across a wide range of environments &mdash; from product
          studios to startups and large tech companies &mdash; including{' '}
          <a
            className={linkClass}
            href="https://www.apple.com/apple-music/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Apple (opens in a new tab)"
          >
            Apple
          </a>
          ,{' '}
          <a
            className={linkClass}
            href="https://starry.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Starry Internet (opens in a new tab)"
          >
            Starry Internet
          </a>
          , and{' '}
          <a
            className={linkClass}
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Upstatement (opens in a new tab)"
          >
            Upstatement
          </a>
          . Outside of my day-to-day work, I also created an{' '}
          <a
            className={linkClass}
            href="https://www.newline.co/courses/build-a-spotify-connected-app"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="online video course (opens in a new tab)"
          >
            online video course
          </a>{' '}
          a few years ago which walks through building a real-world, API-driven application from
          scratch. These experiences have shaped how I think about building products that are both
          well-crafted and widely usable.
        </p>
        <p>
          In my spare time, you can usually find me climbing, playing tennis, hanging out with my
          wife and two cats, or running around Hyrule searching for <Korok />.
        </p>
      </div>
    </section>
  );
}
