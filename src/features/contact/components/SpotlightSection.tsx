import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { RevealLines } from "@/components/ui/RevealLines";
import { industryBrands } from "@/content/shared/brands";

export function SpotlightSection() {
  return (
    <section aria-labelledby="spotlight-heading" className="contact-spotlight">
      <div className="section-shell">
        <h2 data-reveal="lines" id="spotlight-heading">
          <RevealLines text="CSL in the" />{" "}
          <span className="section-heading__accent">
            <RevealLines text="Spotlight" />
          </span>
        </h2>
        <ul className="contact-spotlight__logos" data-reveal-children="">
          {industryBrands.map((brand) => (
            // Focusable so keyboard users can flip the card too, as hover does.
            <li className="flip-card" key={brand.name} tabIndex={0}>
              <div className="flip-card__inner">
                <div aria-hidden="true" className="flip-card__face flip-card__front">
                  <BrandWordmark brand={brand} />
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
