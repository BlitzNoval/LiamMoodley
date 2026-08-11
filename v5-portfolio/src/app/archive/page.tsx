import type { Metadata } from 'next';
import Link from 'next/link';
import { archive } from '@/data/archive';
import { site } from '@/data/site';
import { ArrowRightIcon, ArrowUpRightIcon, GithubIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: `Archive | ${site.name}`,
  description: site.description,
};

export default function ArchivePage() {
  return (
    <div className="lg:py-24">
      <Link
        href="/"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
      >
        <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
        {site.name}
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {archive.map((row, i) => (
            <tr key={`${row.title}-${i}`} className="border-b border-slate-300/10 last:border-none">
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">{row.year}</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    {row.href ? (
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group/link text-base"
                        href={row.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${row.title} (opens in a new tab)`}
                      >
                        <span>
                          {row.title}
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" />
                        </span>
                      </a>
                    ) : (
                      <span>{row.title}</span>
                    )}
                  </div>
                  <div className="hidden sm:block">{row.title}</div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">{row.madeAt ?? ''}</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {row.tech.map((t) => (
                    <li key={t} className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                {row.href && (
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      {row.githubOnly ? (
                        <a
                          className="flex items-center text-sm text-slate-400 hover:text-teal-300"
                          href={row.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="GitHub (opens in a new tab)"
                        >
                          <span>GitHub</span>
                          <GithubIcon className="ml-1.5 h-3.5 w-3.5 shrink-0" />
                        </a>
                      ) : (
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-sm text-slate-400 hover:text-teal-300 group/link"
                          href={row.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${row.linkLabel ?? row.href} (opens in a new tab)`}
                        >
                          <span>
                            {row.linkLabel ?? row.href}
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-0.5" />
                          </span>
                        </a>
                      )}
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
