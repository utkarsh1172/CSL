import Link from "next/link";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function SeeMoreStoriesLink() {
  return (
    <Link
      className="button button--more"
      data-boom-click=""
      data-reveal="rise"
      href="/success-stories"
    >
      See More
      <ArrowIcon />
    </Link>
  );
}
