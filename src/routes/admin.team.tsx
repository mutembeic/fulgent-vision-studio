import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { TEAM } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/team")({
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Team" title="The Studio" lead="Colourists, editors, producers — who's on, who's out, who's under.">
        <button className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 hover:bg-accent hover:text-canvas px-5 py-3 transition-colors">+ Invite</button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((t) => (
          <article key={t.name} className="border border-hairline bg-surface/40 p-6 space-y-5 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/40 grid place-items-center font-serif text-xl text-accent">{t.name[0]}</div>
              <div className="min-w-0">
                <div className="font-serif text-xl truncate">{t.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{t.role}</div>
              </div>
            </div>
            <div className="text-xs text-muted italic">{t.status}</div>
            <div>
              <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] mb-2">
                <span className="text-muted">Workload</span>
                <span className="text-accent">{t.load}%</span>
              </div>
              <div className="h-[3px] bg-hairline overflow-hidden">
                <div className={[
                  "h-full transition-all duration-1000",
                  t.load > 80 ? "bg-red-400" : "bg-accent",
                ].join(" ")} style={{ width: `${t.load}%` }} />
              </div>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] pt-3 border-t border-hairline">
              <span className="text-muted">Tenure {t.tenure}</span>
              <button className="text-accent hover:text-prime">Assign →</button>
            </div>
          </article>
        ))}
      </div>

      <Panel title="This Week · Calendar">
        <div className="grid grid-cols-7 gap-px bg-hairline">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
            <div key={d} className="bg-canvas p-3 min-h-[140px]">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted">{d} · 0{i + 1}</div>
              <div className="mt-3 space-y-1.5">
                {i === 0 && <div className="text-[10px] p-1.5 bg-accent/20 text-accent border-l-2 border-accent">K. Njoroge · Suite 1</div>}
                {i === 2 && <div className="text-[10px] p-1.5 bg-accent/20 text-accent border-l-2 border-accent">Verdant · Theatre</div>}
                {i === 3 && <div className="text-[10px] p-1.5 bg-canvas border-l-2 border-prime/40 text-prime/80">Halogen · Conform</div>}
                {i === 4 && <div className="text-[10px] p-1.5 bg-accent/20 text-accent border-l-2 border-accent">Long Coast · Delivery</div>}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
