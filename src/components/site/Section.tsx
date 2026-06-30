import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "header";
}) {
  return (
    <As className={["px-6 lg:px-10", className].join(" ")}>
      <div className="mx-auto max-w-[1480px]">{children}</div>
    </As>
  );
}

export function Eyebrow({
  number,
  children,
}: {
  number?: string;
  children: ReactNode;
}) {
  return (
    <span className="eyebrow inline-flex items-center gap-3">
      {number && <span className="text-muted">{number}</span>}
      <span className="block h-px w-8 bg-accent/50" />
      <span>{children}</span>
    </span>
  );
}
