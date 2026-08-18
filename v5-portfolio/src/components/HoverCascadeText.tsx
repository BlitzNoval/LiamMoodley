const phrase = 'with access for everyone at heart';

export function HoverCascadeText() {
  return (
    <span className="group/access inline font-medium text-slate-200">
      <span className="sr-only">{phrase}</span>
      <span aria-hidden="true">
        {phrase.split('').map((character, index) => (
          <span
            key={index}
            className="inline-block transition-colors duration-75 group-hover/access:text-red-400 motion-reduce:transition-none"
            style={{ transitionDelay: `${index * 25}ms` }}
          >
            {character === ' ' ? '\u00a0' : character}
          </span>
        ))}
      </span>
    </span>
  );
}
