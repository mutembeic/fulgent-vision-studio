import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { CLIENTS } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/clients")({
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Clients" title="Client Directory" lead="Every studio, network and agency we finish for.">
        <button className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 hover:bg-accent hover:text-canvas px-5 py-3 transition-colors">+ Add Client</button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {CLIENTS.map((c) => (
          <article key={c.name} className="border border-hairline bg-surface/40 p-6 space-y-5 hover:border-accent/40 transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-serif text-2xl kerning-tight">{c.name}</h3>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{c.city} · Since {c.since}</div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-accent border border-accent/40 px-2 py-1">Active</span>
            </div>
            <dl className="grid grid-cols-3 gap-3 border-y border-hairline py-4">
              <div><dt className="text-[9px] uppercase tracking-[0.25em] text-muted">Projects</dt><dd className="font-serif text-2xl text-prime mt-1">{c.projects}</dd></div>
              <div><dt className="text-[9px] uppercase tracking-[0.25em] text-muted">Spend</dt><dd className="font-serif text-2xl text-accent mt-1">{c.spend}</dd></div>
              <div><dt className="text-[9px] uppercase tracking-[0.25em] text-muted">Portal</dt><dd className="font-serif text-2xl text-prime mt-1">◉</dd></div>
            </dl>
            <div className="flex justify-between text-sm">
              <span className="text-muted">{c.contact}</span>
              <button className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Open →</button>
            </div>
          </article>
        ))}
      </div>

      <Panel title="Recent Communication">
        <ul className="divide-y divide-hairline">
          {[
            { c: "Ogilvy Africa", who: "T. Wanjiru", msg: "Approved Halogen 30s with tweaks.", when: "2h" },
            { c: "Netflix EMEA", who: "H. van Dijk", msg: "IMF received. QC passed.", when: "8h" },
            { c: "Okafor Films", who: "Amara Okafor", msg: "Confirmed Thursday theatre.", when: "1d" },
          ].map((x, i) => (
            <li key={i} className="py-4 flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{x.c} · {x.who}</div>
                <div className="text-sm text-prime mt-1">{x.msg}</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted shrink-0">{x.when} ago</div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
