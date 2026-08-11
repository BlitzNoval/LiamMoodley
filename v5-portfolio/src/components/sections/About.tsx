import { SectionHeading } from '../SectionHeading';

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
          Hi there! I&rsquo;m Liam, and I like building things, with access for everyone at heart.
          I&rsquo;m a developer and researcher with a particular interest in AI, machine learning,
          fintech, and the way technology actually gets used in the real world. I enjoy working
          across both the technical and creative sides of projects, especially when there&rsquo;s a
          complicated problem to untangle and turn into something useful.
        </p>
        <p className="mb-4">
          Currently, I&rsquo;m completing an{' '}
          <a
            className={linkClass}
            href="https://www.wits.ac.za/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="University of the Witwatersrand (opens in a new tab)"
          >
            MA by Research at Wits
          </a>
          , where I&rsquo;m looking at how machine learning changes the way credit risk models need
          to be validated and governed. Alongside that, I teach and tutor at the university, which
          has made me spend a lot more time thinking about how to explain technical ideas clearly
          rather than just make them work.
        </p>
        <p className="mb-4">
          More recently, I worked as a Digital &amp; AI Intern at{' '}
          <a
            className={linkClass}
            href="https://www.redflank.co.za/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Redflank Consulting (opens in a new tab)"
          >
            Redflank Consulting
          </a>
          , where I got to work across automation, machine learning, internal tools, and AI
          products. My flagship project was building an AI knowledge assistant, which went from an
          early idea to a working Azure-based product that I eventually got to demo to industry
          stakeholders in Cape Town.
        </p>
        <p className="mb-4">
          Across my work, I&rsquo;ve built with React, Python, Unity, C# and Azure, alongside
          projects involving automation, data, AI systems and user-facing applications. I&rsquo;m
          especially drawn to work where software, design and emerging technology overlap, and
          where what gets built has consequences beyond just looking good on a screen.
        </p>
        <p>
          Outside of work, I&rsquo;m really into art, playing violin, gaming both as a player and
          developer, and sports like ultimate frisbee and hiking. Those interests are a big part of
          how I think about creativity, interaction and the kinds of experiences I enjoy making.
        </p>
      </div>
    </section>
  );
}
