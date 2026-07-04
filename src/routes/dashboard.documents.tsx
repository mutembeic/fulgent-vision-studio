import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Panel } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard/documents")({
  component: DocumentsPage,
});

const docs = [
  { name: "Verdant · Colour Contract", type: "Contract", project: "The Verdant Path", size: "412 KB", date: "May 08" },
  { name: "Verdant · NDA", type: "NDA", project: "The Verdant Path", size: "88 KB", date: "May 08" },
  { name: "Halogen · Deliverables Spec", type: "Spec", project: "Halogen", size: "144 KB", date: "Jun 02" },
  { name: "Halogen · Insertion Order", type: "Contract", project: "Halogen", size: "212 KB", date: "Jun 02" },
  { name: "Long Coast · Netflix Delivery Sheet", type: "Delivery", project: "The Long Coast", size: "184 KB", date: "Jun 20" },
  { name: "Long Coast · Invoice FPH-24-025", type: "Invoice", project: "The Long Coast", size: "42 KB", date: "Jul 01" },
  { name: "Fulgent · Master Services Agreement", type: "Contract", project: "—", size: "824 KB", date: "Jan 15" },
];

const filters = ["All", "Contract", "NDA", "Spec", "Delivery", "Invoice"] as const;

function DocumentsPage() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const [q, setQ] = useState("");
  const shown = docs.filter((d) =>
    (f === "All" || d.type === f) &&
    (d.name.toLowerCase().includes(q.toLowerCase()) || d.project.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Documents" title="Document Vault" lead="Contracts, NDAs, delivery specs and invoices — all in one place." />

      <Panel>
        <div className="flex flex-wrap gap-4 items-center justify-between border-b border-hairline pb-5">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…" className="bg-transparent text-sm text-prime placeholder:text-muted border-b border-hairline focus:border-accent outline-none py-2 min-w-[240px] flex-1" />
          <div className="flex flex-wrap gap-px bg-hairline border border-hairline">
            {filters.map((x) => (
              <button
                key={x}
                onClick={() => setF(x)}
                className={[
                  "px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition-colors",
                  f === x ? "bg-accent text-canvas" : "bg-surface text-muted hover:text-prime",
                ].join(" ")}
              >{x}</button>
            ))}
          </div>
        </div>

        <ul className="divide-y divide-hairline">
          {shown.map((d) => (
            <li key={d.name} className="py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4 group">
              <div className="w-10 h-12 border border-hairline grid place-items-center text-[9px] uppercase tracking-[0.2em] text-accent">{d.type.slice(0, 3)}</div>
              <div className="min-w-0">
                <div className="text-prime truncate">{d.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{d.project} · {d.date} · {d.size}</div>
              </div>
              <button className="text-[10px] uppercase tracking-[0.3em] text-muted group-hover:text-accent transition-colors">Download ↓</button>
            </li>
          ))}
          {shown.length === 0 && <li className="py-10 text-center text-muted text-sm">No documents match.</li>}
        </ul>
      </Panel>
    </div>
  );
}
