import Link from "next/link";
import { DNav, DFooter } from "@/components/site/DirectionD";

export default function NotFound() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <section className="tex-dark" style={{ padding: "110px 0 120px" }}>
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <div className="disp" style={{ fontSize: 90, color: "var(--red)", lineHeight: 1 }}>404</div>
          <h1 className="disp" style={{ fontSize: 40, color: "#fff", margin: "14px 0 14px" }}>This page has moved or does not exist.</h1>
          <p style={{ color: "#bdbdbd", fontWeight: 500, fontSize: 17, lineHeight: 1.55, marginBottom: 30 }}>
            The foundation is fine; the address is not. Try one of these instead, or call us at <a href="tel:9726568251" style={{ color: "#fff", fontWeight: 700 }}>(972) 656-8251</a>.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/" className="btn btn-red">Homepage</Link>
            <Link href="/residential/" className="btn btn-ghost">Residential</Link>
            <Link href="/services/commercial-foundation-repair/" className="btn btn-ghost">Commercial Foundation Repair</Link>
            <Link href="/contact/" className="btn btn-ghost">Contact</Link>
          </div>
        </div>
      </section>
      <DFooter />
    </div>
  );
}
