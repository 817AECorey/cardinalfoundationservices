import type { CSSProperties, ReactNode, MouseEvent } from "react";
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

/* Image slot replacement — real <img> filling its container (cover). */
export function Img({ label, src, h, style }: { label: string; src: string; h?: number; style?: CSSProperties }) {
  return (
    <img
      src={src}
      alt={label}
      loading="lazy"
      style={{ width: "100%", height: h ? h + "px" : "100%", objectFit: "cover", display: "block", background: "#d9d6d2", ...style }}
    />
  );
}

/* light = true → on a dark background → white-wordmark variant */
export function Logo({ light = true, h = 42 }: { light?: boolean; h?: number }) {
  const src = light ? "/cardinal-logo-dark.png" : "/cardinal-logo.png";
  return (
    <a href="#top" style={{ display: "flex", alignItems: "center" }}>
      <img src={src} alt="Cardinal Foundation Services" style={{ height: h, width: "auto", display: "block" }} />
    </a>
  );
}
