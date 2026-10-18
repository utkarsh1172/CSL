import Script from "next/script";

const containerId = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Loads Google Tag Manager when NEXT_PUBLIC_GTM_ID is set. GTM then reads the dataLayer events
 * from src/lib/analytics (cta_click, form_start, lead_submit, lead_error) and can send them to
 * GA4, an A/B testing tool or an ad platform without code changes. Without the id nothing loads.
 */
export function AnalyticsTags() {
  if (!containerId || !/^GTM-[A-Z0-9]+$/.test(containerId)) return null;

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${containerId}');`}
    </Script>
  );
}
