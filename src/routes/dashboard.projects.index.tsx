import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { PROJECTS, CLIENT_VISIBLE_IDS } from "@/lib/portal-data";

export const Route = createFileRoute("/dashboard/projects/")({
  component: ProjectsList,
});

const visible = PROJECTS.filter((p) => CLIENT_VISIBLE_IDS.includes(p.id));

function ProjectsList() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Projects" title="Your Productions" lead="Every project currently on our floor, with live status and quick actions." />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {visible.map((p) => (
          <article key={p.id} className="group border border-hairline bg-surface/40 overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(183,140,69,0.35)]">
            <div className="aspect-[4/3] overflow-hidden bg-canvas relative">
              <img src={p.poster} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:saturate-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
              <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.3em] text-accent border border-accent/60 bg-canvas/60 backdrop-blur px-2.5 py-1">{p.stage}</span>
              <div className="absolute bottom-4 right-4 text-right">
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Deadline</div>
                <div className="font-serif text-xl text-prime">{p.deadline}</div>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h2 className="font-serif text-2xl kerning-tight">{p.title}</h2>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1.5">{p.client}</p>
              </div>
              <dl className="grid grid-cols-2 gap-3 text-xs">
                <div><dt className="text-muted text-[9px] uppercase tracking-[0.25em]">Director</dt><dd className="text-prime mt-1">{p.director}</dd></div>
                <div><dt className="text-muted text-[9px] uppercase tracking-[0.25em]">DoP</dt><dd className="text-prime mt-1">{p.dp}</dd></div>
                <div><dt className="text-muted text-[9px] uppercase tracking-[0.25em]">Colourist</dt><dd className="text-prime mt-1">{p.colourist}</dd></div>
                <div><dt className="text-muted text-[9px] uppercase tracking-[0.25em]">Progress</dt><dd className="text-accent mt-1">{p.progress}%</dd></div>
              </dl>
              <div className="h-[2px] bg-hairline overflow-hidden">
                <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${p.progress}%` }} />
              </div>
              <div className="grid grid-cols-4 gap-px bg-hairline">
                {[
                  { label: "View", to: "/dashboard/projects/$slug" as const, params: { slug: p.slug } },
                  { label: "Review", to: "/dashboard/reviews" as const },
                  { label: "Files", to: "/dashboard/deliverables" as const },
                  { label: "Message", to: "/dashboard/messages" as const },
                ].map((a: any) => (
                  <Link key={a.label} to={a.to} params={a.params} className="bg-surface text-center text-[9px] uppercase tracking-[0.25em] text-muted hover:text-accent hover:bg-canvas py-3 transition-colors">
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Panel title="Archived · Delivered">
        <ul className="divide-y divide-hairline">
          {[
            { t: "Amber Rain", c: "Netflix EMEA", d: "May 2026" },
            { t: "Static Bloom", c: "Ogilvy Africa", d: "Apr 2026" },
            { t: "The Cartographer", c: "BBC Studios", d: "Feb 2026" },
          ].map((x) => (
            <li key={x.t} className="py-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="font-serif text-lg truncate">{x.t}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{x.c}</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted">{x.d}</div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
