import type { CSSProperties, ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { Arrow, ArrowUR } from "./icons";

export const PHONE = "(972) 656-8251";
export const PHONE_TEL = "tel:9726568251";
export const EMAIL = "info@cardinalfoundationservices.com";

/* smooth-scroll to an in-page section */
export function dScroll(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type BtnProps = {
  variant?: "red" | "dark" | "ghost" | "outline";
  children: ReactNode;
  arrow?: "right" | "ur" | "none";
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  style?: CSSProperties;
};

export function Btn({ variant = "red", children, arrow = "right", href = "#", onClick, style }: BtnProps) {
  return (
    <a className={`btn btn-${variant}`} href={href} onClick={onClick} style={style}>
      {children}
      {arrow === "right" && <Arrow s={16} />}
      {arrow === "ur" && <ArrowUR s={15} />}
    </a>
  );
}

export const Kicker = ({ children, color = "var(--red)", style }: { children: ReactNode; color?: string; style?: CSSProperties }) => (
  <div className="kicker" style={{ color, display: "flex", alignItems: "center", gap: 10, ...style }}>
    <span style={{ width: 26, height: 3, background: color, display: "inline-block" }} />
    {children}
  </div>
);

/* Image slot. Per the build addendum (7/28): every image slot renders a
   neutral placeholder marked FOR-MEDIA with real descriptive alt text.
   Stock URLs (Unsplash etc.) are never rendered; real media drops in later
   via CompanyCam / Google Drive / Adobe Stock. Local files under /public
   (e.g. the logo) still render as real images. */
export function Img({ label, src, h, style }: { label: string; src?: string; h?: number; style?: CSSProperties }) {
  const isLocal = !!src && src.startsWith("/");
  if (!isLocal) {
    return (
      <div
        role="img"
        aria-label={label}
        data-media-slot="FOR-MEDIA"
        style={{ width: "100%", height: h ? h + "px" : "100%", background: "var(--gray-2)", border: "1px dashed var(--gray)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, ...style }}
      >
        <span className="over" style={{ color: "var(--muted)", fontSize: 11, textAlign: "center", lineHeight: 1.6 }}>FOR-MEDIA: {label}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={label}
      loading="lazy"
      style={{ width: "100%", height: h ? h + "px" : "100%", objectFit: "cover", display: "block", background: "#d9d6d2", ...style }}
    />
  );
}

/* TCPA consent line (content/26, REQUIRED under every form submit button). */
export const TCPA = () => (
  <p style={{ fontSize: 11.5, fontWeight: 500, color: "var(--muted)", lineHeight: 1.5, margin: "4px 0 0", textAlign: "center" }}>
    By submitting, you agree that Cardinal Foundation Services may contact you by phone, text, or email about your request. Message and data rates may apply.
  </p>
);

/* Labeled placeholder for slots the design leaves without a photo
   (real jobsite/team photos only — no stock stand-ins). */
export function PhotoSlot({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <div role="img" aria-label={label} data-media-slot="FOR-MEDIA" style={{ background: "var(--gray-2)", border: "1px dashed var(--gray)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, ...style }}>
      <span className="over" style={{ color: "var(--muted)", fontSize: 11, textAlign: "center", lineHeight: 1.6 }}>FOR-MEDIA: {label}</span>
    </div>
  );
}

/* light = true → on a dark background → white-wordmark variant */
export function Logo({ light = true, h = 42 }: { light?: boolean; h?: number }) {
  const src = light ? "/cardinal-logo-dark.png" : "/cardinal-logo.png";
  /* Source image is 1504x496 (~3:1). Render at fixed height with intrinsic
     aspect preserved: width auto + object-fit contain, never stretched. */
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      <img src={src} alt="Cardinal Foundation Services" width={1504} height={496} style={{ height: h, width: "auto", maxWidth: "none", objectFit: "contain", display: "block" }} />
    </Link>
  );
}
