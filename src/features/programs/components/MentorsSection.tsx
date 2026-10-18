import { SectionHeading } from "@/components/sections/SectionHeading";
import { BoomCounter } from "@/components/ui/BoomCounter";
import type { Mentor } from "@/types/content";
import type { Program } from "@/types/program";
import { initialsOf } from "@/utils/initials";

type MentorsSectionProps = {
  content: Program["mentors"];
  mentors: Mentor[];
};

export function MentorsSection({ content, mentors }: MentorsSectionProps) {
  const { heading } = content;

  return (
    <section
      aria-labelledby="mentors-heading"
      className="page-section page-section--ruled program-mentors"
      id="faculty"
    >
      <div className="section-shell program-mentors__inner">
        <div className="mentor-panel" data-reveal="zoom">
          <div className="mentor-panel__counts">
            <p className="mentor-panel__count mentor-panel__count--active">
              Mentors
              <span>
                <BoomCounter value={content.mentorCount} />
              </span>
            </p>
            <p className="mentor-panel__count">
              Coaches
              <span>
                <BoomCounter value={content.coachCount} />
              </span>
            </p>
          </div>

          <ul className="mentor-panel__list" data-reveal-children="">
            {mentors.map((mentor) => (
              <li key={mentor.name}>
                <span aria-hidden="true" className="mentor-panel__avatar">
                  {initialsOf(mentor.name)}
                </span>
                <strong>{mentor.name}</strong>
                <span className="mentor-panel__role">{mentor.role}</span>
                <a
                  aria-label={`View profile of ${mentor.name}`}
                  className="mentor-panel__profile"
                  data-boom-click=""
                  href={mentor.profileHref}
                >
                  View profile
                </a>
              </li>
            ))}
          </ul>

          <p className="mentor-panel__footnote">{content.footnote}</p>
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
