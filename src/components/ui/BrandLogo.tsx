import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Canada School of Leadership home">
      {/* Served as-is so the supplied high-resolution master stays crisp on high-density screens. */}
      <Image
        src="/images/brand/csl-logo-dark-4k.png"
        alt="Canada School of Leadership"
        width={231}
        height={80}
        priority={priority}
        unoptimized
      />
    </Link>
  );
}
