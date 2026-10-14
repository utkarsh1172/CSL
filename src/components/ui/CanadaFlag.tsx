type CanadaFlagProps = {
  className?: string;
};

/**
 * Round Canada flag badge. Inline because Windows renders the 🇨🇦 emoji as plain letters.
 * The red bands are narrowed so they stay visible once the badge is clipped to a circle.
 */
export function CanadaFlag({ className }: CanadaFlagProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 20 20">
      <rect fill="#ffffff" height="20" width="20" />
      <rect fill="#d52b1e" height="20" width="5" />
      <rect fill="#d52b1e" height="20" width="5" x="15" />
      <path
        d="M20 4.2 21 6.2l1.2-.6-.4 3 1.6-1.4.5 1.1 1.5-.3-.5 1.6.7.4-2.6 2.3.3 1-2.9-.4.1 2.7h-1l.1-2.7-2.9.4.3-1-2.6-2.3.7-.4-.5-1.6 1.5.3.5-1.1 1.6 1.4-.4-3 1.2.6Z"
        fill="#d52b1e"
        transform="translate(10 10) scale(0.82) translate(-20 -9.9)"
      />
    </svg>
  );
}
