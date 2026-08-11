import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { asset } from '@/lib/paths';
import { SectionHeading } from '../SectionHeading';
import { TechPill } from '../TechPill';
import { ArrowUpRightIcon, ArrowRightIcon, DownloadIcon, LinkIcon } from '../icons';

function resolveHref(href: string): string {
  return href.startsWith('/') ? asset(href) : href;
}

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeading id="projects-heading" label="Projects" />
      <div>
        <ul className="group/list">
          {projects.map((p) => (
            <li key={p.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={resolveHref(p.href)}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${p.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {p.title}
                        <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{p.description}</p>
                  {p.stat && (
                    <div className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300">
                      {p.stat.icon === 'download' && <DownloadIcon className="mr-1 h-4 w-4" />}
                      <span>{p.stat.label}</span>
                    </div>
                  )}
                  {p.links && p.links.length > 0 && (
                    <ul className="relative z-10 mt-2 flex flex-wrap" aria-label="Related links">
                      {p.links.map((link) => (
                        <li key={link.href} className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href={resolveHref(link.href)}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${p.title} — ${link.label} (opens in a new tab)`}
                          >
                            <LinkIcon className="mr-1 h-3 w-3" />
                            <span>{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.tech && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {p.tech.map((t) => (
                        <TechPill key={t} label={t} />
                      ))}
                    </ul>
                  )}
                </div>
                <Image
                  src={asset(p.image)}
                  alt={p.imageAlt}
                  width={400}
                  height={225}
                  className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="pb-px transition motion-reduce:transition-none">
                View Full Project{' '}
              </span>
              <span className="whitespace-nowrap">
                <span className="pb-px transition motion-reduce:transition-none">Archive</span>
                <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
