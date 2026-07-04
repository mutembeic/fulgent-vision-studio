import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { PROJECTS, STAGES } from "@/lib/portal-data";
import { TimelineFlow } from "./dashboard.index";

export const Route = createFileRoute("/dashboard/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="px-12 py-20">
      <h1 className="font-serif text-4xl">Project not found</h1>
      <Link to="/dashboard/projects" className="text-accent text-sm mt-4 inline-block">← Back to projects</Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();

  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="relative h-[52vh] min-h-[420px] overflow-hidden bg-canvas">
        <img src={p.poster} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-canvas/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(183,140,69,0.15),transparent_60%)]" />
        <div className="relative h-full max-w-[1480px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/dashboard/projects" className="text-[10px] uppercase tracking-[0.3em] text-muted hover:text-accent">← Projects</Link>
            <span className="text-muted">/</span>
            <span className="eyebrow">{p.id}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl kerning-tight max-w-3xl">{p.title}</h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted">
            {p.client} · Directed by {p.director} · DoP {p.dp}
          </p>
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto px-6 lg:px-12 py-14 space-y-12">
        {/* Meta strip */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-px bg-hairline border border-hairline">
          {[
            ["Stage", p.stage],
            ["Progress", `${p.progress}%`],
            ["Delivery", p.deadline],
            ["Colourist", p.colourist],
            ["Status", p.status],
          ].map(([l, v]) => (
            <div key={l} className="bg-surface/60 p-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted">{l}</div>
              <div className="font-serif text-xl text-prime mt-2">{v}</div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <Panel title="Production Timeline">
              <TimelineFlow currentIndex={p.stageIndex} />
              <p className="text-sm text-muted italic mt-4">{p.notes}</p>
            </Panel>

            <Panel title="Versions">
              <ul className="divide-y divide-hairline">
                {[
                  { v: "v06", note: "Reel 03 · secondary pass", when: "2h", by: "K. Njoroge", status: "Awaiting notes" },
                  { v: "v05", note: "Reel 02 · primary revisions", when: "1d", by: "K. Njoroge", status: "Approved" },
                  { v: "v04", note: "Full reel · rough grade", when: "4d", by: "M. Adeyemi", status: "Superseded" },
                  { v: "v03", note: "Look development test", when: "8d", by: "K. Njoroge", status: "Reference" },
                ].map((x) => (
                  <li key={x.v} className="py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <span className="font-serif italic text-2xl text-accent w-14">{x.v}</span>
                    <div className="min-w-0">
                      <div className="text-prime truncate">{x.note}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{x.by} · {x.when} ago</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted">{x.status}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="Client Notes">
              <ul className="space-y-5">
                {[
                  { by: "Amara Okafor", when: "12m", text: "Reel 02 looks beautiful. Slightly warmer on the interior scenes please." },
                  { by: "T. Wanjiru", when: "3h", text: "The shadow rolloff on 03 is exactly what we discussed. Ship it." },
                ].map((n, i) => (
                  <li key={i} className="border-l border-accent/40 pl-4">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{n.by} · {n.when} ago</div>
                    <p className="text-sm mt-2 text-prime/90 italic font-serif text-lg">"{n.text}"</p>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <Panel title="Credits">
              <dl className="space-y-3 text-sm">
                {[
                  ["Client", p.client],
                  ["Director", p.director],
                  ["DoP", p.dp],
                  ["Colourist", p.colourist],
                  ["Producer", "R. Achieng"],
                  ["Online Editor", "L. Kagwe"],
                  ["Budget", p.budget],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-hairline pb-2 last:border-0">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-muted">{k}</dt>
                    <dd className="text-prime text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </Panel>

            <Panel title="Deliverables">
              <ul className="space-y-3 text-sm">
                {["ProRes 4444 XQ", "HDR10 Master", "SDR Trim", "DCP", "IMF · Netflix", "Subtitles · 12 lang"].map((d) => (
                  <li key={d} className="flex justify-between items-center border-b border-hairline pb-2 last:border-0">
                    <span>{d}</span>
                    <button className="text-[10px] uppercase tracking-[0.25em] text-accent hover:text-prime">↓</button>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="Actions">
              <div className="space-y-2">
                <button className="w-full bg-accent text-canvas py-3 text-[10px] uppercase tracking-[0.3em] hover:brightness-110 transition">Open Review Link</button>
                <button className="w-full border border-hairline hover:border-accent text-muted hover:text-accent py-3 text-[10px] uppercase tracking-[0.3em] transition">Message Studio</button>
                <button className="w-full border border-hairline hover:border-accent text-muted hover:text-accent py-3 text-[10px] uppercase tracking-[0.3em] transition">Download Package</button>
              </div>
            </Panel>
          </aside>
        </div>
      </div>
    </div>
  );
}
