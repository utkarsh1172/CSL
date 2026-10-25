"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { BoomCounter } from "@/components/ui/BoomCounter";
import { coaches } from "@/content/shared/coaches";
import type { Mentor } from "@/types/content";
import type { Program } from "@/types/program";

type MentorsSectionProps = {
  content: Program["mentors"];
  mentors: Mentor[];
};

type RosterKind = "mentors" | "coaches";

export function MentorsSection({ content, mentors }: MentorsSectionProps) {
  const { heading } = content;
  const [activeRoster, setActiveRoster] = useState<RosterKind>("mentors");
  const people = activeRoster === "mentors" ? mentors : coaches;
  const activeTabId = `faculty-${activeRoster}-tab`;
  const footnote = activeRoster === "mentors" ? content.footnote : "Executive Coaches · Global Network";

  return (
    <section
      aria-labelledby="mentors-heading"
      className="page-section page-section--ruled program-mentors"
      id="faculty"
    >
      <div className="section-shell program-mentors__inner">
        <div className="mentor-panel" data-reveal="zoom">
          <div className="mentor-panel__counts" data-active={activeRoster} role="tablist" aria-label="Faculty roster">
            <span aria-hidden="true" className="mentor-panel__indicator" />
            <button
              aria-controls="faculty-roster-panel"
              aria-selected={activeRoster === "mentors"}
              className={`mentor-panel__count${activeRoster === "mentors" ? " mentor-panel__count--active" : ""}`}
              id="faculty-mentors-tab"
              onClick={() => setActiveRoster("mentors")}
              role="tab"
              type="button"
            >
              Mentors
              <span>
                <BoomCounter value={content.mentorCount} />
              </span>
            </button>
            <button
              aria-controls="faculty-roster-panel"
              aria-selected={activeRoster === "coaches"}
              className={`mentor-panel__count${activeRoster === "coaches" ? " mentor-panel__count--active" : ""}`}
              id="faculty-coaches-tab"
              onClick={() => setActiveRoster("coaches")}
              role="tab"
              type="button"
            >
              Coaches
              <span>
                <BoomCounter value={content.coachCount} />
              </span>
            </button>
          </div>

          <div aria-labelledby={activeTabId} className="mentor-panel__stage" id="faculty-roster-panel" role="tabpanel">
            <ul className="mentor-panel__list" data-roster={activeRoster} key={activeRoster}>
              {people.map((person) => (
                <li key={person.name}>
                  <a aria-label={`Talk to an advisor about ${person.name}`} href={person.profileHref}>
                    <span className="mentor-panel__avatar">
                      {person.imageSrc ? (
                        <Image alt={person.imageAlt ?? ""} fill sizes="(max-width: 640px) 64px, 82px" src={person.imageSrc} />
                      ) : null}
                    </span>
                    <strong>{person.name}</strong>
                    <span className="mentor-panel__role">{person.role}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mentor-panel__footnote">
            <span>{footnote}</span>
            <a href="#talk-to-advisor">See all <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="program-mentors__copy">
          <SectionHeading
            accent={heading.accent}
            align="start"
            className="section-heading--large section-heading--light"
            description={heading.description}
            eyebrow={heading.eyebrow}
            id="mentors-heading"
            title={heading.title}
          />
          <a className="button button--primary" data-boom-click="" data-reveal="rise" href="#talk-to-advisor">
            Schedule a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
