import Script from "next/script";

const containerId = process.env.NEXT_PUBLIC_GTM_ID;
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const hasContainer = !!containerId && /^GTM-[A-Z0-9]+$/.test(containerId);
const hasMeasurement = !!measurementId && /^G-[A-Z0-9]+$/.test(measurementId);

/**
 * Loads Google Tag Manager when NEXT_PUBLIC_GTM_ID is set. GTM then reads the dataLayer events
 * from src/lib/analytics (cta_click, form_start, lead_submit, lead_error) and can send them to
 * GA4, an A/B testing tool or an ad platform without code changes.
 *
 * Without a container, NEXT_PUBLIC_GA_MEASUREMENT_ID loads Google Analytics 4 directly and the
 * same events go to it through gtag. Set one or the other: with both, GTM wins, so GA4 should be
 * configured inside the container to avoid counting visits twice. Without either nothing loads.
 */
export function AnalyticsTags() {
  if (hasContainer) {
    return (
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${containerId}');`}
      </Script>
    );
  }

  if (hasMeasurement) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('js',new Date());gtag('config','${measurementId}');`}
        </Script>
      </>
    );
  }

  return null;
}
