import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 999,
        background: "#E5481B",
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}
