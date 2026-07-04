import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel, StatGrid } from "@/components/app/AppShell";
import { INVOICES } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/finance")({
  component: FinancePage,
});

function FinancePage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Finance" title="Revenue & Statements" lead="Cash flow, outstanding balances and quotes." />

      <StatGrid items={[
        ["$284k", "Revenue · MTD", "▲ 12%"],
        ["$46,300", "Outstanding", "3 invoices"],
        ["$8,200", "Draft", "1 invoice"],
        ["$1.84M", "Revenue · YTD"],
      ]} />

      <Panel title="Invoices" action={<button className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">+ New</button>}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.3em] text-muted border-b border-hairline">
              <th className="text-left py-3 font-normal">ID</th>
              <th className="text-left py-3 font-normal">Client</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Project</th>
              <th className="text-left py-3 font-normal hidden lg:table-cell">Date</th>
              <th className="text-right py-3 font-normal">Amount</th>
              <th className="text-right py-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {INVOICES.map((iv) => (
              <tr key={iv.id} className="border-b border-hairline last:border-0 hover:bg-canvas/40 transition-colors">
                <td className="py-4 text-prime/80 font-mono text-xs">{iv.id}</td>
                <td className="py-4">{iv.client}</td>
                <td className="py-4 text-muted hidden md:table-cell">{iv.project}</td>
                <td className="py-4 text-muted hidden lg:table-cell">{iv.date}</td>
                <td className="py-4 text-right font-serif text-lg">{iv.amount}</td>
                <td className={[
                  "py-4 text-right text-[10px] uppercase tracking-[0.3em]",
                  iv.status === "Paid" ? "text-accent" : iv.status === "Due" ? "text-red-300" : "text-muted",
                ].join(" ")}>{iv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Quotes">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["Q-24-041 · Iron Bloom Ph.2", "$62,000", "Sent"],
              ["Q-24-042 · North Star pickups", "$18,400", "Draft"],
              ["Q-24-043 · Netflix promo pkg", "$34,800", "Sent"],
            ].map(([n, a, s]) => (
              <li key={n} className="py-3 flex justify-between items-center">
                <span className="text-prime">{n}</span>
                <div className="text-right">
                  <div className="font-serif text-accent">{a}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted">{s}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Expenses">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["Colour license · DaVinci", "$4,200"],
              ["Storage · Vault expansion", "$18,600"],
              ["Theatre calibration", "$3,100"],
              ["Delivery courier", "$980"],
            ].map(([n, a]) => (
              <li key={n} className="py-3 flex justify-between">
                <span className="text-prime">{n}</span>
                <span className="font-serif text-prime">{a}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
