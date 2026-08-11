'use client';

const letters = 'Korok seeds'.split('');
const colors = [
  'group-hover/korok:text-red-400',
  'group-hover/korok:text-orange-400',
  'group-hover/korok:text-yellow-400',
  'group-hover/korok:text-lime-400',
  'group-hover/korok:text-green-400',
  'group-hover/korok:text-teal-400',
  'group-hover/korok:text-cyan-400',
  'group-hover/korok:text-sky-400',
  'group-hover/korok:text-blue-400',
  'group-hover/korok:text-indigo-400',
  'group-hover/korok:text-violet-400',
];

export function Korok() {
  return (
    <span className="group/korok inline-flex lg:font-medium lg:text-slate-200">
      <span className="sr-only">Korok seeds</span>
      {letters.map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`${colors[i % colors.length]} transition duration-75 group-hover/korok:-translate-y-px`}
          style={{ transitionDelay: `${50 + i * 25}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  );
}
