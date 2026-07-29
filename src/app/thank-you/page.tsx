import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { DNav, DFooter } from "@/components/site/DirectionD";

/* Conversion page (spec section 8): noindex, fires the GA4 lead event and
   the Google Ads conversion on load. Launch gate: this page must load
   after every successful form submission. IDs come from env (see runbook):
   NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_GADS_CONVERSION_ID,
   NEXT_PUBLIC_GADS_CONVERSION_LABEL. */

const GADS_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
const GADS_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <section style={{ background: "var(--bone)", padding: "110px 0 120px" }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: "center" }}>
          <div style={{ width: 64, height: 64, background: "var(--red)", margin: "0 auto 22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="square"><path d="M4 12l5 5L20 6" /></svg>
          </div>
          <h1 className="disp" style={{ fontSize: 44, color: "var(--ink)" }}>Request received.</h1>
          <p className="lead" style={{ margin: "16px auto 10px", maxWidth: 560 }}>
            Your request is on its way to the right team, and a real person will call you to schedule. Residential requests receive a written quote within one business day of the inspection.
          </p>
          <p style={{ color: "var(--muted)", fontWeight: 600, marginBottom: 28 }}>Need us sooner? Call <a href="tel:9726568251" style={{ color: "var(--red)", fontWeight: 800 }}>(972) 656-8251</a>.</p>
          <Link href="/" className="btn btn-dark" style={{ display: "inline-flex" }}>Back to the homepage</Link>
        </div>
      </section>
      <DFooter />
      {/* Conversion events: GA4 lead event + Google Ads conversion (env-gated) */}
      <Script id="conversion-events" strategy="afterInteractive">{`
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", { event_category: "form", event_label: "thank-you" });
          ${GADS_ID && GADS_LABEL ? `window.gtag("event", "conversion", { send_to: "${GADS_ID}/${GADS_LABEL}" });` : `/* Ads conversion pending NEXT_PUBLIC_GADS_CONVERSION_ID/LABEL */`}
        }
      `}</Script>
    </div>
  );
}
