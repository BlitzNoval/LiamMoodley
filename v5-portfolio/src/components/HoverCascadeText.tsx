type HoverCascadeTextProps = {
  text?: string;
  tone?: 'red' | 'blue';
};

export function HoverCascadeText({
  text = 'with access for everyone at heart',
  tone = 'red',
}: HoverCascadeTextProps) {
  let letterOffset = 0;
  const animatedWords = text.split(' ').map((word) => {
    const startIndex = letterOffset;
    letterOffset += word.length;
    return { word, startIndex };
  });

  return (
    <span className={`letter-cascade letter-cascade--${tone} inline font-medium text-slate-200`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {animatedWords.map(({ word, startIndex }, wordIndex) => (
          <span key={`${word}-${wordIndex}`}>
            {wordIndex > 0 && ' '}
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((character, characterIndex) => (
                <span
                  key={`${character}-${characterIndex}`}
                  className="letter-cascade-letter inline-block"
                  style={{ animationDelay: `${(startIndex + characterIndex) * 28}ms` }}
                >
                  {character}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
