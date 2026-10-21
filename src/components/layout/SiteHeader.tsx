"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigationGroups } from "@/config/navigation";

import { BrandLogo } from "../ui/BrandLogo";

function ChevronIcon() {
  return (
    <svg
      className="nav-chevron"
      viewBox="0 0 12 8"
      width="10"
      height="7"
      aria-hidden="true"
    >
      <path d="M1 1.25 6 6.25l5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);

  // The bar turns to frosted glass once content starts scrolling beneath it.
  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !navigationRef.current?.contains(event.target)) {
        setOpenGroup(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, []);

  const handleMouseEnter = (label: string) => {
    setOpenGroup(label);
  };

  const handleMouseLeave = () => {
    setOpenGroup(null);
  };

  return (
    <header className="site-header" data-scrolled={scrolled ? "" : undefined}>
      <div className="site-header__inner">
        <BrandLogo priority />

        <nav className="desktop-navigation" aria-label="Primary navigation" ref={navigationRef}>
          {navigationGroups.map((group) => (
            <div
              key={group.label}
              className={`navigation-group${openGroup === group.label ? " open" : ""}`}
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenGroup(null);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setOpenGroup(null);
                  event.currentTarget.querySelector("button")?.focus();
                }
              }}
            >
              <button
                className="navigation-group-header"
                type="button"
                aria-expanded={openGroup === group.label}
                aria-controls={`navigation-${group.label.toLowerCase()}`}
                onClick={(event) => {
                  const pointerWithHover = event.detail > 0 && window.matchMedia("(hover: hover)").matches;
                  setOpenGroup((current) =>
                    pointerWithHover ? group.label : current === group.label ? null : group.label,
                  );
                }}
              >
                {group.label}
                <ChevronIcon />
              </button>
              <div
                className="navigation-dropdown"
                id={`navigation-${group.label.toLowerCase()}`}
                inert={openGroup !== group.label}
              >
                {group.links.map((link) => (
                  <Link aria-label={link.label} href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <Link className="header-contact-button" href="/contact">
          Contact Us
        </Link>

        <details className="mobile-navigation">
          <summary aria-label="Open navigation menu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>
          <nav className="mobile-navigation__panel" aria-label="Mobile navigation">
            {navigationGroups.map((group) => (
              <details
                className="mobile-navigation__group"
                key={group.label}
                name="mobile-navigation"
              >
                <summary aria-label={group.label}>
                  {group.label}
                  <ChevronIcon />
                </summary>
                <div>
                  {group.links.map((link) => (
                    <Link aria-label={link.label} href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link aria-label="Contact Us" className="mobile-navigation__contact" href="/contact">
              Contact Us
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
