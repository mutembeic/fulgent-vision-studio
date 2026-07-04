import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { SUITES } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/studio")({
  component: StudioPage,
});

function StudioPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Facility" title="Studio Resources" lead="Suites, theatre, render farm and vault." />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {SUITES.map((s) => (
          <article key={s.name} className="border border-hairline bg-surface/40 p-6 space-y-4 hover:border-accent/40 transition-colors">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="font-serif text-2xl">{s.name}</h3>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{s.tag}</div>
              </div>
              <span className={[
                "text-[9px] uppercase tracking-[0.3em] px-2 py-1 border",
                s.status === "Available" ? "text-prime border-prime/30"
                  : s.status.includes("%") ? "text-muted border-hairline"
                  : "text-accent border-accent/40",
              ].join(" ")}>{s.status}</span>
            </div>
            <div className="border-t border-hairline pt-4 text-sm">
              <div className="text-muted">{s.session}</div>
              <div className="text-accent mt-1 text-[11px] uppercase tracking-[0.3em]">Until {s.until}</div>
            </div>
            <button className="w-full text-[10px] uppercase tracking-[0.3em] text-muted border border-hairline hover:border-accent hover:text-accent py-2.5 transition-colors">Book / Manage</button>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Equipment">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["Blackmagic URSA Cine 17K", "Loan · Verdant unit"],
              ["Christie Griffyn 4K35-RGB", "Reference Theatre"],
              ["Sony BVM-HX3110", "Suite 1"],
              ["Flanders XM311K", "Suite 2"],
              ["Dolby CP950A", "Theatre"],
            ].map(([n, l]) => (
              <li key={n} className="py-3 flex justify-between">
                <span className="text-prime">{n}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted">{l}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Maintenance">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["Suite 1 · projector recal", "Jul 12"],
              ["Farm-03 · GPU swap", "Jul 15"],
              ["Vault A · disk audit", "Aug 01"],
            ].map(([n, d]) => (
              <li key={n} className="py-3 flex justify-between">
                <span className="text-prime">{n}</span>
                <span className="font-serif italic text-accent">{d}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
