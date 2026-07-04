import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { PROJECTS, STAGES } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/production")({
  component: ProductionPage,
});

function ProductionPage() {
  const grouped = STAGES.map((stage, i) => ({
    stage,
    i,
    projects: PROJECTS.filter((p) => p.stageIndex === i),
  }));

  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Production" title="Workflow Board" lead="Every stage of the finishing pipeline, live." />

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-px bg-hairline border border-hairline">
        {grouped.slice(0, 5).map((g) => <StageColumn key={g.stage} {...g} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-hairline border border-hairline">
        {grouped.slice(5).map((g) => <StageColumn key={g.stage} {...g} />)}
      </div>

      <Panel title="Render Queue">
        <ul className="space-y-4">
          {[
            { job: "Long Coast · IMF export", node: "Farm-04", eta: "22% · 1h 40m", state: "Rendering" },
            { job: "Verdant · Reel 03 secondary render", node: "Suite 1", eta: "Queued", state: "Queued" },
            { job: "Halogen · Conform pass render", node: "Farm-02", eta: "Complete", state: "Done" },
            { job: "North Star · HDR trim", node: "Farm-01", eta: "68%", state: "Rendering" },
          ].map((r) => (
            <li key={r.job} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-hairline pb-3 last:border-0">
              <div>
                <div className="text-prime text-sm">{r.job}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{r.node}</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{r.eta}</div>
              <span className={[
                "text-[9px] uppercase tracking-[0.3em] px-2 py-1 border",
                r.state === "Rendering" ? "text-accent border-accent/40"
                  : r.state === "Done" ? "text-prime border-prime/30"
                  : "text-muted border-hairline",
              ].join(" ")}>{r.state}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

function StageColumn({ stage, i, projects }: { stage: string; i: number; projects: typeof PROJECTS }) {
  return (
    <div className="bg-surface/40 p-4 min-h-[220px] space-y-3">
      <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-hairline">
        <div>
          <div className="font-serif italic text-accent text-sm">{String(i + 1).padStart(2, "0")}.</div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-prime mt-0.5">{stage}</div>
        </div>
        <span className="text-[10px] text-muted">{projects.length}</span>
      </div>
      <div className="space-y-2">
        {projects.map((p) => (
          <div key={p.id} className="border border-hairline p-3 bg-canvas/40 hover:border-accent/50 transition-colors">
            <div className="text-sm text-prime truncate">{p.title}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1 truncate">{p.colourist}</div>
            <div className="text-[10px] text-accent mt-2 flex justify-between">
              <span>{p.deadline}</span><span>{p.progress}%</span>
            </div>
          </div>
        ))}
        {projects.length === 0 && <div className="text-[10px] uppercase tracking-[0.3em] text-muted/60 py-6 text-center">Empty</div>}
      </div>
    </div>
  );
}
