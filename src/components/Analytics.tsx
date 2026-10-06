import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * GTM / GA4 loader. Nothing is rendered when no ID is configured (no fake IDs).
 * Consent Mode v2: all storage is denied by default; ConsentBanner updates it after the user's choice.
 */
export function Analytics() {
  const { gtmId, ga4Id } = siteConfig.tracking;
  if (!gtmId && !ga4Id) return null;
  return (
    <>
      <Script id="consent-default" strategy="afterInteractive">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var saved = null; try { saved = localStorage.getItem('cookie-consent'); } catch(e) {}
gtag('consent','default',{
  ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied',
  analytics_storage: saved === 'granted' ? 'granted' : 'denied', wait_for_update: 500
});
`}</Script>
      {gtmId ? (
        <Script id="gtm" strategy="afterInteractive">{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');
`}</Script>
      ) : (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`gtag('js', new Date()); gtag('config', '${ga4Id}', { anonymize_ip: true });`}</Script>
        </>
      )}
    </>
  );
}

export function GtmNoScript() {
  const { gtmId } = siteConfig.tracking;
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="gtm" />
    </noscript>
  );
}
