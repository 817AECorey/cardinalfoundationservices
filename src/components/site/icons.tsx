import type { CSSProperties } from "react";

type IconProps = { s?: number; c?: string; style?: CSSProperties };

export const Arrow = ({ s = 18, c = "currentColor" }: IconProps) => (
  <svg className="ico" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="square">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUR = ({ s = 16, c = "currentColor" }: IconProps) => (
  <svg className="ico" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="square">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const Phone = ({ s = 16, c = "currentColor" }: IconProps) => (
  <svg className="ico" width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.5 1 1 0 0 1-.25 1z" />
  </svg>
);

export const Check = ({ s = 18, c = "var(--red)" }: IconProps) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="square">
    <path d="M4 12l5 5L20 6" />
  </svg>
);
