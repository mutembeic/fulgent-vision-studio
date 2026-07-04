import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard/deliverables")({
  component: DeliverablesPage,
});

const files = [
  { name: "Verdant · ProRes 4444 XQ", project: "The Verdant Path", type: "ProRes", version: "v06", size: "412 GB", date: "Jul 03", status: "Ready" },
  { name: "Verdant · HDR10 Master", project: "The Verdant Path", type: "HDR", version: "v05", size: "184 GB", date: "Jul 02", status: "Ready" },
  { name: "Long Coast · Netflix IMF", project: "The Long Coast", type: "IMF", version: "v08", size: "268 GB", date: "Jul 05", status: "In Transit" },
  { name: "Halogen · 60s Master", project: "Halogen", type: "ProRes", version: "v03", size: "18 GB", date: "Jun 30", status: "Ready" },
  { name: "Halogen · DCP", project: "Halogen", type: "DCP", version: "v03", size: "42 GB", date: "Jun 30", status: "Ready" },
  { name: "Verdant · Subtitles · 12 lang", project: "The Verdant Path", type: "Subs", version: "v01", size: "1.4 MB", date: "Jul 01", status: "Ready" },
  { name: "Long Coast · Poster · 27x40", project: "The Long Coast", type: "Poster", version: "final", size: "84 MB", date: "Jul 04", status: "Ready" },
  { name: "Verdant · QC Report", project: "The Verdant Path", type: "PDF", version: "v06", size: "2.1 MB", date: "Jul 04", status: "New" },
];

function DeliverablesPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Deliverables" title="Masters & Deliverables" lead="Downloadable assets for every active production." />

      <Panel>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.3em] text-muted border-b border-hairline">
              <th className="text-left py-3 font-normal">File</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Type</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Ver</th>
              <th className="text-right py-3 font-normal hidden lg:table-cell">Size</th>
              <th className="text-right py-3 font-normal hidden lg:table-cell">Date</th>
              <th className="text-right py-3 font-normal">Status</th>
              <th className="text-right py-3 font-normal"> </th>
            </tr>
          </thead>
          <tbody>
            {files.map((f) => (
              <tr key={f.name} className="border-b border-hairline last:border-0 hover:bg-canvas/40 transition-colors group">
                <td className="py-4">
                  <div className="text-prime">{f.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-0.5">{f.project}</div>
                </td>
                <td className="py-4 text-muted text-xs hidden md:table-cell">{f.type}</td>
                <td className="py-4 hidden md:table-cell"><span className="font-serif italic text-accent">{f.version}</span></td>
                <td className="py-4 text-right text-muted hidden lg:table-cell">{f.size}</td>
                <td className="py-4 text-right text-muted hidden lg:table-cell">{f.date}</td>
                <td className={[
                  "py-4 text-right text-[10px] uppercase tracking-[0.25em]",
                  f.status === "Ready" ? "text-accent"
                    : f.status === "In Transit" ? "text-prime"
                    : "text-red-300",
                ].join(" ")}>{f.status}</td>
                <td className="py-4 text-right">
                  <button className="text-[10px] uppercase tracking-[0.3em] text-muted group-hover:text-accent transition-colors">Download ↓</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
