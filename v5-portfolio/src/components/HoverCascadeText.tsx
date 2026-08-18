const phrase = 'with access for everyone at heart';
const words = phrase.split(' ');

let letterOffset = 0;
const animatedWords = words.map((word) => {
  const startIndex = letterOffset;
  letterOffset += word.length;
  return { word, startIndex };
});

export function HoverCascadeText() {
  return (
    <span className="access-cascade inline font-medium text-slate-200">
      <span className="sr-only">{phrase}</span>
      <span aria-hidden="true">
        {animatedWords.map(({ word, startIndex }, wordIndex) => (
          <span key={word}>
            {wordIndex > 0 && ' '}
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((character, characterIndex) => (
                <span
                  key={`${character}-${characterIndex}`}
                  className="access-cascade-letter inline-block"
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
