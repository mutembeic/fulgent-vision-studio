import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel, StatGrid } from "@/components/app/AppShell";

export const Route = createFileRoute("/admin/deliveries")({
  component: DeliveriesPage,
});

const rows = [
  { file: "Long Coast · Netflix IMF", dest: "Netflix EMEA · Aspera", size: "268 GB", progress: 22, status: "Uploading", eta: "1h 40m" },
  { file: "Halogen · 60s Broadcast", dest: "Ogilvy · Signiant", size: "18 GB", progress: 100, status: "Complete", eta: "—" },
  { file: "Verdant · HDR trailer", dest: "YouTube · direct", size: "6 GB", progress: 78, status: "Uploading", eta: "18m" },
  { file: "North Star · Rush cut", dest: "BBC · S3", size: "42 GB", progress: 0, status: "Queued", eta: "—" },
  { file: "Iron Bloom · Reference", dest: "Trace · MASV", size: "84 GB", progress: 100, status: "Complete", eta: "—" },
];

function DeliveriesPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Delivery" title="Delivery Center" lead="Every export leaving the building." />
      <StatGrid items={[
        ["02", "Uploading"],
        ["01", "Queued"],
        ["12", "Delivered · MTD"],
        ["1.4 TB", "Transferred · Today"],
      ]} />

      <Panel title="Transfer Queue">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.3em] text-muted border-b border-hairline">
              <th className="text-left py-3 font-normal">File</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Destination</th>
              <th className="text-right py-3 font-normal hidden lg:table-cell">Size</th>
              <th className="text-left py-3 font-normal">Progress</th>
              <th className="text-right py-3 font-normal">ETA</th>
              <th className="text-right py-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.file} className="border-b border-hairline last:border-0 hover:bg-canvas/40">
                <td className="py-4 text-prime">{r.file}</td>
                <td className="py-4 text-muted hidden md:table-cell">{r.dest}</td>
                <td className="py-4 text-right text-muted hidden lg:table-cell">{r.size}</td>
                <td className="py-4">
                  <div className="h-[3px] w-40 bg-hairline overflow-hidden">
                    <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${r.progress}%` }} />
                  </div>
                  <div className="text-[10px] text-accent mt-1">{r.progress}%</div>
                </td>
                <td className="py-4 text-right font-serif italic text-accent">{r.eta}</td>
                <td className={[
                  "py-4 text-right text-[10px] uppercase tracking-[0.3em]",
                  r.status === "Complete" ? "text-accent" : r.status === "Queued" ? "text-muted" : "text-prime",
                ].join(" ")}>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <Panel title="Transfer Log">
        <ul className="divide-y divide-hairline text-sm">
          {[
            ["Jul 04 · 12:04", "Long Coast IMF → Netflix EMEA · started"],
            ["Jul 03 · 22:41", "Halogen 60s → Ogilvy · delivered"],
            ["Jul 03 · 18:12", "Verdant trailer → YouTube · started"],
            ["Jul 02 · 09:33", "Iron Bloom reference → Trace · delivered"],
          ].map(([w, m]) => (
            <li key={w} className="py-3 flex justify-between gap-4">
              <span className="text-muted text-[10px] uppercase tracking-[0.3em] shrink-0">{w}</span>
              <span className="text-prime text-right flex-1">{m}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
