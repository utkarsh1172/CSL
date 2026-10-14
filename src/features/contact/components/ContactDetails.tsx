import Image from "next/image";

import { CanadaFlag } from "@/components/ui/CanadaFlag";
import { contactDetails } from "@/content/pages/contact";

import { ContactSectionHeading } from "./ContactSectionHeading";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.4 3.6 6 3.2a2 2 0 0 0-2.2 1.6C3.2 12.6 11.4 20.8 19.2 20.2a2 2 0 0 0 1.6-2.2l-.4-2.4a1.5 1.5 0 0 0-1.2-1.2l-3-.6a1.5 1.5 0 0 0-1.5.6l-.8 1.1a11.3 11.3 0 0 1-5.4-5.4l1.1-.8a1.5 1.5 0 0 0 .6-1.5l-.6-3a1.5 1.5 0 0 0-1.2-1.2Z" />
      <path d="M14.6 3.4a6.4 6.4 0 0 1 6 6M14.3 6.8a3.2 3.2 0 0 1 2.9 2.9" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21.2s-6.8-6.1-6.8-11.6a6.8 6.8 0 0 1 13.6 0c0 5.5-6.8 11.6-6.8 11.6Z" />
      <circle cx="12" cy="9.6" r="2.6" />
    </svg>
  );
}

export function ContactDetails() {
  const mapQuery = encodeURIComponent(contactDetails.mapQuery);

  return (
    <section aria-labelledby="contact-details-heading" className="contact-details">
      <div className="contact-shell contact-details__inner">
        <ContactSectionHeading
          description="Most professionals focus on acquiring skills. CSL builds the capital that compounds beyond a single job title."
          eyebrow={
            <>
              <CanadaFlag className="contact-heading__flag" />
              Contact Us
            </>
          }
          accent="leadership capital"
          id="contact-details-heading"
          title="Five dimensions of"
        />

        <div className="contact-map" data-reveal="zoom" data-reveal-delay="2">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&z=11&output=embed`}
            title={`Map showing ${contactDetails.address}`}
          />
        </div>

        <ul className="contact-channels" data-reveal="card" data-reveal-delay="3">
          <li>
            <a data-boom-click="" href={contactDetails.phoneHref}>
              <span className="contact-channels__icon contact-channels__icon--ring">
                <PhoneIcon />
              </span>
              {contactDetails.phoneLabel}
            </a>
          </li>
          <li>
            <a
              data-boom-click=""
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              rel="noreferrer"
              target="_blank"
            >
              <span className="contact-channels__icon contact-channels__icon--bounce">
                <PinIcon />
              </span>
              {contactDetails.address}
            </a>
          </li>
        </ul>

        <div className="contact-follow">
          <h2 data-reveal="rise">Follow Us</h2>
          <p data-reveal="rise" data-reveal-delay="1">
            Stay connected with ZOC Learnings for the latest updates, certifications, and learning
            insights.
          </p>
          <a
            aria-label="Follow Canada School of Leadership on LinkedIn"
            data-boom-click=""
            data-reveal="rise"
            data-reveal-delay="2"
            href={contactDetails.linkedinHref}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt=""
              aria-hidden="true"
              height={30}
              src="/images/brand/linkedin-2021.png"
              width={120}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
