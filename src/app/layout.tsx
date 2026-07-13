import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cardinalfoundationservices.com"),
  title: {
    default: "Cardinal Foundation Services | Foundation & Structural Contractor — DFW",
    template: "%s | Cardinal Foundation Services",
  },
  description:
    "Foundation, concrete & structural contractor serving Dallas–Fort Worth. Engineer-involved diagnosis, built for North Texas soil. Request a free inspection.",
  openGraph: {
    title: "Cardinal Foundation Services",
    description:
      "Foundation, concrete & structural contractor serving Dallas–Fort Worth.",
    url: "https://cardinalfoundationservices.com",
    siteName: "Cardinal Foundation Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
