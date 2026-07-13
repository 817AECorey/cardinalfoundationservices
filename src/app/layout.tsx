import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cardinalfoundationservices.com"),
  title: {
    default: "Cardinal Foundation Services | Engineer-Owned Foundation, Concrete & Structural Contractor — Fort Worth, TX",
    template: "%s | Cardinal Foundation Services",
  },
  description:
    "Engineer-owned foundation, concrete, drainage, and structural repair, plus new construction, for commercial properties and homeowners across Texas. Turn-key and self-performed. Request a free inspection.",
  openGraph: {
    title: "Cardinal Foundation Services",
    description:
      "Engineer-owned, turn-key foundation, concrete & structural contractor serving Fort Worth and Texas.",
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
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
