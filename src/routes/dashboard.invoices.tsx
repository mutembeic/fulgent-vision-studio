import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel, StatGrid } from "@/components/app/AppShell";
import { INVOICES } from "@/lib/portal-data";

export const Route = createFileRoute("/dashboard/invoices")({
  component: InvoicesPage,
});

function InvoicesPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Invoices" title="Statements" lead="Every invoice, paid and outstanding, at a glance." />

      <StatGrid items={[
        ["$28,400", "Paid · YTD"],
        ["$12,900", "Outstanding"],
        ["$8,200", "Draft"],
        ["07", "Invoices · 2026"],
      ]} />

      <Panel title="Statements" action={<button className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Download all</button>}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.3em] text-muted border-b border-hairline">
              <th className="text-left py-3 font-normal">ID</th>
              <th className="text-left py-3 font-normal">Project</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Date</th>
              <th className="text-right py-3 font-normal">Amount</th>
              <th className="text-right py-3 font-normal">Status</th>
              <th className="text-right py-3 font-normal"> </th>
            </tr>
          </thead>
          <tbody>
            {INVOICES.slice(0, 4).map((iv) => (
              <tr key={iv.id} className="border-b border-hairline last:border-0 hover:bg-canvas/40 transition-colors group">
                <td className="py-4 text-prime/80 font-mono text-xs">{iv.id}</td>
                <td className="py-4">{iv.project}</td>
                <td className="py-4 text-muted hidden md:table-cell">{iv.date}</td>
                <td className="py-4 text-right font-serif text-lg">{iv.amount}</td>
                <td className={[
                  "py-4 text-right text-[10px] uppercase tracking-[0.3em]",
                  iv.status === "Paid" ? "text-accent"
                    : iv.status === "Due" ? "text-red-300"
                    : "text-muted",
                ].join(" ")}>{iv.status}</td>
                <td className="py-4 text-right">
                  <button className="text-[10px] uppercase tracking-[0.3em] text-muted group-hover:text-accent">PDF ↓</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
