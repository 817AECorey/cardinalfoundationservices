import type { Metadata } from "next";
import { DNav, DFooter } from "@/components/site/DirectionD";

/* Standard small-business privacy policy. FLAGGED FOR REVIEW: this copy
   was generated to unblock launch structure and has not been reviewed by
   the client or counsel. */

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cardinal Foundation Services collects, uses, and protects the information you share with us.",
  alternates: { canonical: "/privacy-policy/" },
};

const SECTIONS: [string, string[]][] = [
  ["Information we collect", [
    "When you request an inspection, assessment, or quote through our website forms or by phone, we collect the information you provide: your name, phone number, email address, property city or ZIP, the service you are asking about, and any project details you choose to share.",
    "Like most websites, we also collect standard technical information such as pages visited and general analytics data used to understand how the site is used.",
  ]],
  ["How we use it", [
    "We use your information to respond to your request, schedule inspections, prepare quotes and bids, perform and document work, and communicate with you about your project. Analytics data is used to improve the website and our advertising.",
    "We do not sell your personal information.",
  ]],
  ["Sharing", [
    "Information is shared only with service providers that help us operate, such as email delivery and analytics providers, and only as needed to provide those services, or where required by law.",
  ]],
  ["Retention and security", [
    "Lead and project records are retained as business records. We take reasonable measures to protect the information we hold.",
  ]],
  ["Contact", [
    "Questions about this policy or your information: info@cardinalfoundationservices.com or (972) 656-8251. Cardinal Foundation Services, LLC, Fort Worth, TX.",
  ]],
];

export default function PrivacyPolicy() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <section style={{ background: "var(--paper)", padding: "70px 0 90px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <h1 className="disp" style={{ fontSize: 44, color: "var(--ink)", marginBottom: 10 }}>Privacy Policy</h1>
          <p style={{ color: "var(--muted)", fontWeight: 600, marginBottom: 34 }}>Effective July 28, 2026</p>
          {SECTIONS.map(([h, paras]) => (
            <div key={h} style={{ marginBottom: 28 }}>
              <h2 className="disp" style={{ fontSize: 24, color: "var(--ink)", marginBottom: 10 }}>{h}</h2>
              {paras.map((p) => <p key={p.slice(0, 30)} className="lead" style={{ fontSize: 16, marginBottom: 10 }}>{p}</p>)}
            </div>
          ))}
        </div>
      </section>
      <DFooter />
    </div>
  );
}
