import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Canada School of Leadership home">
      {/* Served as-is: the 3x master stays crisp on high-density screens, which a re-encode softens. */}
      <Image
        src="/images/brand/canada-school-of-leadership-logo.png"
        alt="Canada School of Leadership"
        width={231}
        height={80}
        priority={priority}
        unoptimized
      />
    </Link>
  );
}
