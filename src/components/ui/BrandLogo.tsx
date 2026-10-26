import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  /** Load immediately instead of lazily; for the logo above the fold. */
  eager?: boolean;
};

export function BrandLogo({ eager = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Canada School of Leadership home">
      {/* Served as-is so the lettering stays crisp. 480px wide: three device pixels per CSS pixel
          at the logo's largest size (142px), cut from the 4K master csl-logo-dark-4k.png. */}
      <Image
        src="/images/brand/csl-logo-dark.png"
        alt="Canada School of Leadership"
        width={231}
        height={80}
        loading={eager ? "eager" : undefined}
        unoptimized
      />
    </Link>
  );
}
