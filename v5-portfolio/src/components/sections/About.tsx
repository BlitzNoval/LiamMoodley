import { SectionHeading } from '../SectionHeading';
import { HoverCascadeText } from '../HoverCascadeText';

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
          Hi there! I&rsquo;m Liam, and I like building things,{' '}
          <HoverCascadeText />.
          I&rsquo;m a developer and researcher with a particular interest in UI/UX, prototyping,
          full-stack development, AI and fintech. I enjoy working across both the technical and
          creative sides of projects, especially when there&rsquo;s a complicated problem to
          untangle.
        </p>
        <p className="mb-4">
          Currently, I&rsquo;m completing an{' '}
          <a
            className={linkClass}
            href="https://gaiclab.co.za/profile/12"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="University of the Witwatersrand (opens in a new tab)"
          >
            MA by Research at Wits
          </a>
          , looking at how banking systems can safely integrate AI into high-risk decisions across
          both enterprise operations and everyday corporate use. Alongside that, I teach and tutor
          at the university, which has made me spend a lot more time thinking about how to explain
          technical ideas clearly rather than just make them work.
        </p>
        <p className="mb-4">
          I also run <span className="font-medium text-slate-200">NIAEXE</span>, my interactive
          digital company, where I work across UI/UX, prototyping and full-stack development to
          build websites and digital experiences. Through NIAEXE, I&rsquo;ve designed, built and
          managed digital platforms for organisations across healthcare, marketing, conservation
          and youth development, while giving myself a space to experiment with everything from
          interface design and interaction to front-end and back-end development.
        </p>
        <p className="mb-4">
          I currently work as a Digital &amp; AI Intern at{' '}
          <a
            className={linkClass}
            href="https://www.redflank.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Redflank Consulting (opens in a new tab)"
          >
            Redflank Consulting
          </a>
          , where I&rsquo;ve worked across prototyping, system architecture, user interface design,
          automation, machine learning and AI products.
        </p>
        <p>
          Outside of work, I&rsquo;m really into art, playing violin, gaming both as a player and
          developer, and sports like ultimate frisbee and hiking.
        </p>
      </div>
    </section>
  );
}
