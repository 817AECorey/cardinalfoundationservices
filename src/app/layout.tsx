import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { DMobileCTABar } from "@/components/site/DirectionD";

/* GA4 base tag, env-gated: renders only when NEXT_PUBLIC_GA4_ID is set
   (see launch runbook). The Ads conversion fires on /thank-you/. */
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
/* Hotjar behavior tracking, env-gated the same way. Default input masking
   stays ON (never enable unmasked recording: lead PII stays out). */
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
/* Meta Pixel, env-gated the same way. PageView here; the Lead event fires
   from the form submit success handler only (never on /thank-you load). */
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://cardinalfoundationservices.com"),
  title: {
    // Service + geo first; engineer-owned lives in the META, never the title opener.
    default: "Foundation Repair & Commercial Concrete | DFW & Houston | Cardinal",
    template: "%s | Cardinal Foundation Services",
  },
  description:
    "Engineer-owned foundation repair and commercial concrete contractor in Fort Worth, serving DFW and Texas. Residential, commercial, and new construction. Sometimes the right answer is you don't need a repair.",
  openGraph: {
    title: "Cardinal Foundation Services",
    description:
      "Foundation repair and commercial concrete across DFW, Houston, and Texas. Residential, commercial, and new construction.",
    url: "https://cardinalfoundationservices.com",
    siteName: "Cardinal Foundation Services",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        {children}
        <DMobileCTABar />
        {/* CallRail dynamic number insertion; afterInteractive so it never blocks render */}
        <Script id="callrail-swap" strategy="afterInteractive" src="//cdn.callrail.com/companies/539461128/976e5943e5820e36d22a/12/swap.js" />
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}</Script>
        )}
        {HOTJAR_ID && (
          <Script id="hotjar" strategy="afterInteractive">{`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}</Script>
        )}
        {GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
