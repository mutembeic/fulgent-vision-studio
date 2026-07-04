import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel, StatGrid } from "@/components/app/AppShell";

export const Route = createFileRoute("/admin/reports")({
  component: ReportsPage,
});

function ReportsPage() {
  const bars = [42, 58, 71, 63, 82, 91, 78, 88, 94, 76, 84, 96];
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Reports" title="Business Analytics" lead="Revenue, turnaround, satisfaction and utilization." />

      <StatGrid items={[
        ["$1.84M", "Revenue · YTD", "▲ 18%"],
        ["6.2 days", "Avg Turnaround", "▼ 0.8d"],
        ["4.9 / 5", "Client Satisfaction", "36 responses"],
        ["78%", "Studio Utilization", "Suites + Theatre"],
      ]} />

      <Panel title="Revenue · Last 12 months">
        <div className="flex items-end gap-2 h-56 pt-6 border-t border-hairline">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-accent/80 hover:bg-accent transition-colors" style={{ height: `${h}%` }} />
              <span className="text-[9px] uppercase tracking-[0.3em] text-muted">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Most Requested Services">
          <ul className="space-y-4">
            {[
              ["Feature Colour Grade", 84],
              ["Commercial Grade", 62],
              ["HDR Mastering", 48],
              ["Netflix IMF Delivery", 34],
              ["Reference Theatre Sessions", 28],
            ].map(([n, v]) => (
              <li key={n as string}>
                <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] mb-1.5">
                  <span className="text-prime">{n}</span><span className="text-accent">{v}</span>
                </div>
                <div className="h-[3px] bg-hairline overflow-hidden">
                  <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${v as number}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Colourist Performance">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["K. Njoroge", "22 projects · 4.98★"],
              ["M. Adeyemi", "14 projects · 4.87★"],
            ].map(([n, m]) => (
              <li key={n} className="py-4 flex justify-between">
                <span className="text-prime">{n}</span>
                <span className="text-muted text-[11px] uppercase tracking-[0.2em]">{m}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
