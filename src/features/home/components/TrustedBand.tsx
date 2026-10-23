import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Marquee } from "@/components/ui/Marquee";
import { industryBrands } from "@/content/shared/brands";

type TrustedBandProps = {
  label: string;
};

/** A white band under the hero: a small centred label over the endless logo carousel. */
export function TrustedBand({ label }: TrustedBandProps) {
  return (
    <section aria-labelledby="trusted-band-label" className="trusted-band">
      <div className="section-shell">
        <h2 className="trusted-band__label" data-reveal="up" id="trusted-band-label">
          {label}
        </h2>
        <Marquee
          className="logo-strip trusted-band__logos"
          items={industryBrands.map((brand) => ({
            key: brand.name,
            label: brand.name,
            node: <BrandWordmark brand={brand} />,
          }))}
          label={label}
        />
      </div>
    </section>
  );
}
