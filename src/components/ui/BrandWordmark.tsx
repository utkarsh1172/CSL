import type { IndustryBrand } from "@/types/content";

type BrandWordmarkProps = {
  brand: IndustryBrand;
};

/** Typographic stand-in for an organisation's logo, styled per brand tone. */
export function BrandWordmark({ brand }: BrandWordmarkProps) {
  return (
    <span className={`brand-wordmark brand-wordmark--${brand.tone}`}>
      <span className="brand-wordmark__mark">{brand.mark}</span>
      {brand.sub ? <span className="brand-wordmark__sub">{brand.sub}</span> : null}
    </span>
  );
}
