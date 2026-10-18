"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { ProgramNavLink } from "@/types/program";

type ProgramSubnavProps = {
  links: ProgramNavLink[];
};

/**
 * Sticky in-page navigation under the site header. It highlights the section being read and,
 * on narrow screens, scrolls that link into view within the bar.
 */
export function ProgramSubnav({ links }: ProgramSubnavProps) {
  const [activeId, setActiveId] = useState(links[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const nav = listRef.current?.closest("nav");
    let frame = 0;

    // The current section is the last one whose top has passed under the sticky bars. Working
    // from positions (not crossings) keeps it right after a fast scroll or between sections
    // that have no link, which stay on the last section passed.
    const update = () => {
      frame = 0;
      const line = (nav?.getBoundingClientRect().bottom ?? 0) + 24;
      let current = links[0]?.id;

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= line) current = link.id;
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [links]);

  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;

    list.scrollTo({ left: active.offsetLeft - list.clientWidth / 2 + active.offsetWidth / 2, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav aria-label="Program sections" className="program-subnav">
      <div className="program-subnav__inner">
        <ul ref={listRef}>
          {links.map((link) => (
            <li key={link.id}>
              <a aria-current={activeId === link.id ? "true" : undefined} href={`#${link.id}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Link className="program-subnav__contact" data-boom-click="" href="/contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
