import Script from "next/script";
import { trackEventScript } from "@/lib/analytics";

export function AnalyticsFoundation() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;

  return (
    <>
      {gtmId ? (
        <Script id="gtm-base" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}</Script>
      ) : null}
      {gaId ? <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /> : null}
      {gaId ? (
        <Script id="ga-base" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}</Script>
      ) : null}
      {hotjarId ? (
        <Script id="hotjar-base" strategy="afterInteractive">{`
          (function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${hotjarId},hjsv:6};a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}</Script>
      ) : null}
      <Script id="oztoprak-events" strategy="afterInteractive">{trackEventScript()}</Script>
    </>
  );
}
