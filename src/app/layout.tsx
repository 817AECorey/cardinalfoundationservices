import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { DMobileCTABar } from "@/components/site/DirectionD";

/* GA4 base tag, env-gated: renders only when NEXT_PUBLIC_GA4_ID is set
   (see launch runbook). The Ads conversion fires on /thank-you/. */
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

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
      "Foundation repair and commercial concrete across DFW and Texas. Residential, commercial, and new construction.",
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
