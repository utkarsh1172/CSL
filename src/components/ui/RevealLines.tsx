import { Fragment } from "react";

type RevealLinesProps = {
  text: string;
};

/**
 * Splits heading copy into words so a `data-reveal="lines"` parent can rise it line by line.
 * ScrollReveal groups the words into their rendered lines just before the reveal.
 */
export function RevealLines({ text }: RevealLinesProps) {
  const words = text.trim().split(/\s+/);

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={index}>
          {index > 0 ? " " : null}
          <span className="reveal-word">{word}</span>
        </Fragment>
      ))}
    </>
  );
}
