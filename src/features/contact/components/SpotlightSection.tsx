import { RevealLines } from "@/components/ui/RevealLines";
import { spotlightBrands } from "@/content/pages/contact";

export function SpotlightSection() {
  return (
    <section aria-labelledby="spotlight-heading" className="contact-spotlight">
      <div className="contact-shell">
        <h2 data-reveal="lines" id="spotlight-heading">
          <RevealLines text="CSL in the" />{" "}
          <span className="contact-heading__accent">
            <RevealLines text="Spotlight" />
          </span>
        </h2>
        <ul className="contact-spotlight__logos" data-reveal-children="">
          {spotlightBrands.map((brand) => (
            // Focusable so keyboard users can flip the card too, as hover does.
            <li className="flip-card" key={brand.name} tabIndex={0}>
              <div className="flip-card__inner">
                <div aria-hidden="true" className="flip-card__face flip-card__front">
                  <span className={`spotlight-logo spotlight-logo--${brand.tone}`}>
                    <span className="spotlight-logo__mark">{brand.mark}</span>
                    {"sub" in brand ? <span className="spotlight-logo__sub">{brand.sub}</span> : null}
                  </span>
                  <span className="flip-card__rule" />
                </div>
                <div className="flip-card__face flip-card__back">
                  <span className="flip-card__eyebrow">In the Spotlight</span>
                  <strong>{brand.name}</strong>
                  <span>{brand.sector}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
