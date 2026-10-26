import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  /** Load immediately instead of lazily; for the logo above the fold. */
  eager?: boolean;
};

export function BrandLogo({ eager = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Canada School of Leadership home">
      {/* The logo from leadershipprograms.ca, served as-is so the lettering stays crisp. Its 826px
          width covers three device pixels per CSS pixel at the logo's largest size (142px). */}
      <Image
        src="/images/brand/csl-logo-dark.png"
        alt="Canada School of Leadership"
        width={826}
        height={288}
        loading={eager ? "eager" : undefined}
        unoptimized
      />
    </Link>
  );
}
