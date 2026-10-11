"use client";

import Link from "next/link";
import { useState } from "react";

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

  const handleMouseEnter = (label: string) => {
    setOpenGroup(label);
  };

  const handleMouseLeave = () => {
    setOpenGroup(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent, label: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (openGroup === label) {
        setOpenGroup(null);
      } else {
        setOpenGroup(label);
      }
    }
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandLogo priority />

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigationGroups.map((group) => (
            <div
              key={group.label}
              className={`navigation-group${openGroup === group.label ? " open" : ""}`}
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="navigation-group-header"
                aria-label={group.label}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, group.label)}
              >
                {group.label}
                <ChevronIcon />
              </div>
              {openGroup === group.label && (
                <div className="navigation-dropdown">
                  {group.links.map((link) => (
                    <Link aria-label={link.label} href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
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
