"use client";

import { Arrow, Phone } from "@/components/site/icons";
import { dScroll, PHONE, PHONE_TEL } from "@/components/site/primitives";

export default function ProjectCta() {
  return (
    <section style={{ background: "var(--red)", padding: "54px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div>
          <h2 className="disp" style={{ color: "#fff", fontSize: 34, lineHeight: 1.05 }}>Have a project like this one?</h2>
          <p style={{ color: "rgba(255,255,255,.92)", fontWeight: 500, fontSize: 16, marginTop: 8 }}>Free, no-obligation assessment. Commercial, residential, or new construction.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => dScroll("contact")} className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>Request an assessment <Arrow s={15} /></button>
          <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}
