import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, StatGrid, Panel } from "@/components/app/AppShell";
import { PROJECTS, TEAM, SUITES, STAGES } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-12">
      <PageHeader
        eyebrow="Studio Ops · Live"
        title={<>Mission control, <em className="italic font-normal">this week.</em></>}
        lead="Five active pictures. Two suites in session. IMF export at 22%."
      >
        <Link to="/admin/projects" className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 hover:bg-accent hover:text-canvas px-5 py-3 transition-colors">Project Roster</Link>
      </PageHeader>

      <StatGrid items={[
        ["05", "Active Projects", "2 rush · 3 standard"],
        ["03", "Today's Sessions", "Suite 1 · Theatre · DIT"],
        ["07", "Pending Reviews", "Client + internal"],
        ["04", "Upcoming Deliveries", "Next 14 days"],
      ]} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
        {[
          ["$284k", "Revenue · MTD", "▲ 12%"],
          ["68%", "Storage · Vault A", "1.2 PB total"],
          ["22%", "GPU Render Queue", "Long Coast IMF"],
          ["4.9", "Client Satisfaction", "36 responses"],
        ].map(([n, l, sub]) => (
          <div key={l} className="bg-surface/60 p-6 lg:p-7">
            <div className="font-serif text-3xl md:text-4xl text-prime">{n}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted mt-2">{l}</div>
            <div className="text-[10px] text-accent mt-1.5">{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Panel title="Projects Requiring Attention" action={<Link to="/admin/projects" className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">All →</Link>}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.3em] text-muted border-b border-hairline">
                  <th className="text-left py-3 font-normal">Project</th>
                  <th className="text-left py-3 font-normal hidden md:table-cell">Stage</th>
                  <th className="text-left py-3 font-normal hidden lg:table-cell">Colourist</th>
                  <th className="text-right py-3 font-normal">Deadline</th>
                  <th className="text-right py-3 font-normal">Progress</th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.slice(0, 5).map((p) => (
                  <tr key={p.id} className="border-b border-hairline last:border-0 hover:bg-canvas/40 transition-colors">
                    <td className="py-4">
                      <div className="text-prime">{p.title}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-0.5">{p.client} · {p.id}</div>
                    </td>
                    <td className="py-4 hidden md:table-cell">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-accent border border-accent/40 px-2 py-0.5">{p.stage}</span>
                    </td>
                    <td className="py-4 text-muted hidden lg:table-cell">{p.colourist}</td>
                    <td className="py-4 text-right font-serif">{p.deadline}</td>
                    <td className="py-4 text-right">
                      <div className="w-24 ml-auto h-[2px] bg-hairline overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${p.progress}%` }} />
                      </div>
                      <div className="text-[10px] text-accent mt-1">{p.progress}%</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          <Panel title="Production Flow" action={<Link to="/admin/production" className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Manage →</Link>}>
            <ol className="grid grid-cols-3 md:grid-cols-9 gap-px bg-hairline">
              {STAGES.map((s, i) => (
                <li key={s} className="bg-canvas p-3 flex flex-col gap-1.5 border-t-2 border-accent/40">
                  <span className="font-serif italic text-accent">{String(i + 1).padStart(2, "0")}.</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-prime">{s}</span>
                  <span className="text-[9px] text-muted">{Math.max(1, Math.round(Math.random() * 3))} active</span>
                </li>
              ))}
            </ol>
          </Panel>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <Panel title="Suites Live" action={<Link to="/admin/studio" className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Studio →</Link>}>
            <ul className="space-y-4">
              {SUITES.map((r) => (
                <li key={r.name} className="border-b border-hairline pb-3 last:border-0">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <div className="text-prime">{r.name}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{r.tag}</div>
                    </div>
                    <span className={[
                      "text-[9px] uppercase tracking-[0.25em] px-2 py-0.5 border",
                      r.status === "In Session" ? "text-accent border-accent/40"
                        : r.status === "Available" ? "text-prime border-prime/30"
                        : "text-muted border-hairline",
                    ].join(" ")}>{r.status}</span>
                  </div>
                  <div className="text-xs text-muted mt-2">{r.session} <span className="text-accent">· {r.until}</span></div>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Team On Floor" action={<Link to="/admin/team" className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Team →</Link>}>
            <ul className="space-y-4">
              {TEAM.slice(0, 4).map((t) => (
                <li key={t.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 grid place-items-center font-serif text-accent text-sm shrink-0">{t.name[0]}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-prime truncate">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted truncate">{t.status}</div>
                  </div>
                  <div className="text-[10px] text-accent shrink-0">{t.load}%</div>
                </li>
              ))}
            </ul>
          </Panel>
        </aside>
      </div>
    </div>
  );
}
