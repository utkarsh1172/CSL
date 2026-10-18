import { SectionHeading } from "@/components/sections/SectionHeading";
import { BoomCounter } from "@/components/ui/BoomCounter";
import type { SuccessStoriesContent } from "@/types/success-story";
import { initialsOf } from "@/utils/initials";

type FacultySectionProps = {
  faculty: SuccessStoriesContent["faculty"];
};

export function FacultySection({ faculty }: FacultySectionProps) {
  const { heading } = faculty;

  return (
    <section aria-labelledby="faculty-heading" className="page-section success-faculty">
      <div className="section-shell success-faculty__inner">
        <div className="faculty-panel" data-reveal="zoom">
          <p className="faculty-panel__label">
            {faculty.panelLabel}
            <span>
              <BoomCounter value={faculty.total} />
            </span>
          </p>

          <ul className="faculty-panel__list" data-reveal-children="">
            {faculty.members.map((member) => (
              <li key={member.name}>
                <span aria-hidden="true" className="faculty-panel__avatar">
                  {initialsOf(member.name)}
                </span>
                <span className="faculty-panel__person">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </span>
                <a
                  aria-label={`View profile of ${member.name}`}
                  className="faculty-panel__profile"
                  data-boom-click=""
                  href={member.profileHref}
                >
                  View profile
                </a>
              </li>
            ))}
          </ul>

          <p className="faculty-panel__footnote">{faculty.footnote}</p>
        </div>

        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light success-faculty__heading"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="faculty-heading"
          title={heading.title}
        />
      </div>
    </section>
  );
}
