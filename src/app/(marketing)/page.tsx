import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero" aria-labelledby="home-heading">
          <div className="home-hero__inner">
            <div className="home-hero__content">
              <p className="home-hero__eyebrow">Canada School of Leadership</p>
              <h1 id="home-heading">
                Leadership learning for a <span>changing world.</span>
              </h1>
              <p className="home-hero__summary">
                Practical programs for professionals and organizations ready to lead with
                confidence, clarity, and purpose.
              </p>
              <div className="home-hero__actions">
                <Link className="button button--light" href="/programs">
                  Explore Programs
                </Link>
                <Link className="button button--outline" href="/about">
                  Discover CSL
                </Link>
              </div>
            </div>

            <div className="home-hero__visual" aria-hidden="true">
              <div className="leadership-orbit leadership-orbit--one" />
              <div className="leadership-orbit leadership-orbit--two" />
              <div className="leadership-orbit leadership-orbit--three" />
              <div className="leadership-card leadership-card--top">
                <span>01</span>
                <p>Learn</p>
              </div>
              <div className="leadership-card leadership-card--middle">
                <span>02</span>
                <p>Lead</p>
              </div>
              <div className="leadership-card leadership-card--bottom">
                <span>03</span>
                <p>Transform</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
