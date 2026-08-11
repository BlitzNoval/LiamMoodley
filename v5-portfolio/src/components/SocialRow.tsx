import { socials } from '@/data/site';
import { socialIcons } from './icons';

export function SocialRow() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socials.map((s) => {
        const Icon = socialIcons[s.icon];
        return (
          <li key={s.name} className="mr-5 shrink-0 text-xs">
            <a
              className="block hover:text-slate-200 transition-colors"
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${s.name} (opens in a new tab)`}
              title={s.name}
            >
              <span className="sr-only">{s.name}</span>
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
