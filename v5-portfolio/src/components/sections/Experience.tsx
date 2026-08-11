import { experience } from '@/data/experience';
import { SectionHeading } from '../SectionHeading';
import { TechPill } from '../TechPill';
import { ArrowUpRightIcon, LinkIcon } from '../icons';

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeading id="experience-heading" label="Experience" />
      <div>
        <ol className="group/list">
          {experience.map((job) => (
            <li key={`${job.company}-${job.range}`} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={job.rangeLabel}
                >
                  {job.range}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={job.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {job.title} &middot;{' '}
                          <span className="inline-block">
                            {job.company}
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </span>
                        </span>
                      </a>
                    </div>
                    {job.subRoles?.map((role) => (
                      <div key={role}>
                        <div className="text-slate-500" aria-hidden="true">
                          {role}
                        </div>
                      </div>
                    ))}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{job.description}</p>
                  {job.links && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {job.links.map((link) => (
                        <li key={link.href} className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${link.label} (opens in a new tab)`}
                          >
                            <LinkIcon className="mr-1 h-3 w-3" />
                            <span>{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Résumé
                <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
