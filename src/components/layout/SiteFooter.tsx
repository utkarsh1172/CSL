import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { CanadaFlag } from "@/components/ui/CanadaFlag";
import { RevealLines } from "@/components/ui/RevealLines";
import {
  footerLeadershipPrograms,
  footerLinkGroups,
  footerPartnerNetwork,
  footerQuickLinks,
  footerRegionalPrograms,
} from "@/config/footer";
import { prefetchFor } from "@/config/routes";
import { contactDetails } from "@/content/pages/contact";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.2 7.7H1.6V22h3.6V7.7ZM3.4 2A2.1 2.1 0 1 0 3.4 6.2 2.1 2.1 0 0 0 3.4 2ZM22.4 13.8c0-4.3-2.3-6.4-5.4-6.4-2.5 0-3.6 1.4-4.2 2.3v-2H9.2V22h3.6v-7.1c0-1.9.4-3.8 2.8-3.8s2.4 2.2 2.4 3.9v7h3.6l.8-8.2Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top" data-reveal-children="">
          <div className="site-footer__brand">
            <Link
              aria-label="Canada School of Leadership home"
              className="site-footer__logo"
              href="/"
            >
              <Image
                alt="Canada School of Leadership"
                height={288}
                // The footer logo from leadershipprograms.ca; 826px wide covers three device
                // pixels per CSS pixel at the footer's 240px.
                src="/images/brand/csl-logo-white.png"
                unoptimized
                width={826}
              />
            </Link>
            <p>
              Canada School of Leadership is a North American leadership education platform
              empowering experienced technology professionals to lead, transform, and create
              lasting impact.
            </p>
            <CanadaFlag className="site-footer__flag" />
            <h2>Our Presence</h2>
            <address>{contactDetails.address}</address>
          </div>

          <nav aria-label="Footer navigation" className="site-footer__links">
            {footerLinkGroups.map((group) => (
              <div key={group.label}>
                <h2>{group.label}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} prefetch={prefetchFor(link.href)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2>Quick Links</h2>
              <ul>
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} prefetch={prefetchFor(link.href)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer__network">
              <h2>Global Partner Network :</h2>
              <dl>
                {footerPartnerNetwork.map((entry) => (
                  <div key={entry.region}>
                    <dt>{entry.region} :</dt>
                    <dd>{entry.locations.join(" | ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </nav>

          <nav aria-label="Leadership programs" className="site-footer__programs">
            <h2>Leadership Programs</h2>
            <ul>
              {footerLeadershipPrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} prefetch={prefetchFor(link.href)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__consultation">
            <ConsultationForm />
            <a
              aria-label="Follow Canada School of Leadership on LinkedIn"
              className="site-footer__follow"
              data-boom-click=""
              href={contactDetails.linkedinHref}
              rel="noreferrer"
              target="_blank"
            >
              Follow Us:
              <span>
                <LinkedInIcon />
              </span>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <nav aria-labelledby="footer-regional-heading" data-reveal="rise">
            <h2 id="footer-regional-heading">Regional Programs Pages</h2>
            <p>
              {footerRegionalPrograms.map((link, index) => (
                <Fragment key={link.href}>
                  {index > 0 ? <span aria-hidden="true"> | </span> : null}
                  <Link href={link.href} prefetch={prefetchFor(link.href)}>
                    {link.label}
                  </Link>
                </Fragment>
              ))}
            </p>
          </nav>
          <p className="site-footer__tagline" data-reveal="lines">
            <RevealLines text="Experience does not need more education." />{" "}
            <em>
              <RevealLines text="It needs better positioning." />
            </em>
          </p>
        </div>
      </div>

      <p className="site-footer__legal">
        © 2025 - 2027 Canada School of Leadership – All Rights Reserved.
      </p>
    </footer>
  );
}
