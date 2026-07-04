import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, StatGrid, Panel } from "@/components/app/AppShell";
import { PROJECTS, CLIENT_VISIBLE_IDS, STAGES } from "@/lib/portal-data";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndex,
});

const visible = PROJECTS.filter((p) => CLIENT_VISIBLE_IDS.includes(p.id));

const activity = [
  { who: "K. Njoroge", what: "uploaded Secondary pass on Verdant", when: "1h" },
  { who: "System", what: "delivered IMF master to Netflix", when: "6h" },
  { who: "Ogilvy Africa", what: "left notes on Halogen 30s", when: "1d" },
  { who: "R. Achieng", what: "confirmed Reference Theatre · Thu 15:00", when: "2d" },
];

function DashboardIndex() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-12">
      <PageHeader
        eyebrow="Client Portal · Session Live"
        title={<>Good evening, <em className="italic font-normal">Amara.</em></>}
        lead="Three active projects. Two approvals waiting on you. Reference theatre booked for Thursday."
      >
        <Link to="/dashboard/projects" className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 hover:bg-accent hover:text-canvas px-5 py-3 transition-colors">
          All Projects
        </Link>
      </PageHeader>

      <StatGrid items={[
        ["03", "Active Projects", "+1 this month"],
        ["02", "Pending Reviews", "Awaiting notes"],
        ["04", "Upcoming Deliveries", "Next · Jul 05"],
        ["12", "Unread Messages", "3 from studio"],
      ]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Panel title="Current Projects" action={<Link to="/dashboard/projects" className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Manage →</Link>}>
            <div className="grid grid-cols-1 gap-px bg-hairline -mx-2">
              {visible.map((p) => (
                <Link
                  key={p.id}
                  to="/dashboard/projects/$slug"
                  params={{ slug: p.slug }}
                  className="bg-surface/60 p-5 grid grid-cols-[80px_minmax(0,1fr)_auto] gap-5 items-center group hover:bg-canvas/50 transition-colors"
                >
                  <div className="w-20 h-24 overflow-hidden bg-canvas shrink-0">
                    <img src={p.poster} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <h3 className="font-serif text-xl md:text-2xl truncate">{p.title}</h3>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-accent border border-accent/40 px-2 py-0.5 shrink-0">{p.stage}</span>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted truncate">
                      {p.client} · Dir. {p.director} · Colourist {p.colourist}
                    </p>
                    <div className="h-[3px] bg-hairline w-full overflow-hidden">
                      <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                  <div className="text-right shrink-0 space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Deadline</div>
                    <div className="font-serif text-lg text-prime">{p.deadline}</div>
                    <div className="text-[10px] text-accent">{p.progress}%</div>
                  </div>
                </Link>
              ))}
            </div>
          </Panel>

          <Panel title="Timeline · The Verdant Path" action={<Link to="/dashboard/projects/$slug" params={{ slug: "verdant-path" }} className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Open workspace →</Link>}>
            <TimelineFlow currentIndex={5} />
          </Panel>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <Panel title="Upcoming">
            <ul className="space-y-4">
              {[
                ["Long Coast — Delivery", "Jul 05", "urgent"],
                ["Halogen — Client Review", "Jul 09", "soon"],
                ["Verdant — Reference Theatre", "Jul 18", "planned"],
              ].map(([t, d, tag]) => (
                <li key={t} className="flex items-start justify-between gap-4 border-b border-hairline pb-3 last:border-0">
                  <div className="min-w-0">
                    <div className="text-sm text-prime truncate">{t}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{tag}</div>
                  </div>
                  <span className="font-serif italic text-accent shrink-0">{d}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Activity">
            <ul className="space-y-4">
              {activity.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-prime"><span className="text-accent">{a.who}</span> {a.what}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-0.5">{a.when} ago</div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </aside>
      </div>
    </div>
  );
}

export function TimelineFlow({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="relative">
      <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-px bg-hairline">
        {STAGES.map((s, i) => {
          const state = i < currentIndex ? "done" : i === currentIndex ? "current" : "pending";
          return (
            <li key={s} className={[
              "bg-canvas p-4 flex flex-col gap-2 border-t-2 relative group",
              state === "current" ? "border-accent" : state === "done" ? "border-prime/60" : "border-transparent",
            ].join(" ")}>
              <span className={[
                "font-serif italic text-lg",
                state === "current" ? "text-accent" : state === "done" ? "text-prime/80" : "text-muted",
              ].join(" ")}>{String(i + 1).padStart(2, "0")}.</span>
              <span className={[
                "text-[11px] uppercase tracking-[0.2em]",
                state === "pending" ? "text-muted" : "text-prime",
              ].join(" ")}>{s}</span>
              <span className={[
                "text-[9px] uppercase tracking-[0.25em]",
                state === "current" ? "text-accent animate-pulse" : "text-muted",
              ].join(" ")}>
                {state === "current" ? "In progress" : state === "done" ? "Complete" : "—"}
              </span>
              {state === "done" && i < STAGES.length - 1 && (
                <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-accent text-xs opacity-70">→</span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
