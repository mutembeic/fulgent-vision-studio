import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — Fulgent Post House" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const currentProjects = [
  {
    title: "The Verdant Path",
    client: "Okafor Films",
    stage: "Secondary Grade",
    progress: 68,
    deadline: "Jul 18",
    colourist: "K. Njoroge",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Halogen — Ogilvy",
    client: "Ogilvy Africa",
    stage: "Online Conform",
    progress: 42,
    deadline: "Jul 09",
    colourist: "M. Adeyemi",
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "The Long Coast",
    client: "Sony Music EA",
    stage: "Delivery QC",
    progress: 92,
    deadline: "Jul 05",
    colourist: "K. Njoroge",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format&fit=crop",
  },
];

const timeline = [
  { i: "i.", title: "Brief", state: "done" },
  { i: "ii.", title: "Lookbook", state: "done" },
  { i: "iii.", title: "Conform", state: "done" },
  { i: "iv.", title: "Primary", state: "done" },
  { i: "v.", title: "Secondary", state: "current" },
  { i: "vi.", title: "Review", state: "pending" },
  { i: "vii.", title: "Final Trim", state: "pending" },
  { i: "viii.", title: "Delivery", state: "pending" },
];

const reviewLinks = [
  { name: "Verdant — Reel 03 v06", time: "2h ago", status: "Awaiting Review" },
  { name: "Halogen — 60s Master", time: "1d ago", status: "Approved" },
  { name: "Long Coast — HDR Trim", time: "3d ago", status: "Revisions" },
];

const activity = [
  { who: "Amara Okafor", what: "approved Reel 02 v04", when: "12m" },
  { who: "K. Njoroge", what: "uploaded Secondary pass", when: "1h" },
  { who: "Ogilvy Africa", what: "left notes on Halogen 30s", when: "3h" },
  { who: "System", what: "delivered IMF package to Netflix", when: "1d" },
];

const invoices = [
  { id: "FPH-24-018", project: "The Verdant Path", amount: "$28,400", status: "Paid" },
  { id: "FPH-24-023", project: "Halogen", amount: "$12,900", status: "Due" },
  { id: "FPH-24-025", project: "The Long Coast", amount: "$8,200", status: "Draft" },
];

const documents = [
  { name: "Verdant · Colour Contract.pdf", size: "412 KB" },
  { name: "Halogen · Deliverables Spec.pdf", size: "88 KB" },
  { name: "LongCoast · NDA.pdf", size: "204 KB" },
];

function DashboardPage() {
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("fulgent_demo_session") === "1") setOk(true);
      else navigate({ to: "/login" });
    } catch {
      setOk(true);
    }
  }, [navigate]);

  if (!ok) return null;

  const logout = () => {
    try { sessionStorage.removeItem("fulgent_demo_session"); } catch {}
    navigate({ to: "/login" });
  };

  return (
    <div className="bg-canvas min-h-dvh pt-28 pb-24 relative">
      {/* backdrop wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(183,140,69,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 space-y-12">
        {/* header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-hairline">
          <div className="space-y-3 min-w-0">
            <span className="eyebrow">Client Portal · Session Live</span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium kerning-tight">
              Good evening, <em className="italic font-normal">Amara.</em>
            </h1>
            <p className="text-sm text-muted max-w-lg">
              Three active projects. Two approvals waiting on you. Reference theatre booked for Thursday.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Signed in as</div>
              <div className="text-sm text-prime">testemail@gmail.com</div>
            </div>
            <button
              onClick={logout}
              className="text-[10px] uppercase tracking-[0.25em] border border-hairline hover:border-accent hover:text-accent text-muted px-4 py-2.5 transition-colors"
            >
              Sign out
            </button>
          </div>
        </header>

        {/* stat row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {[
            ["03", "Active Projects"],
            ["07", "Pending Approvals"],
            ["02", "Deadlines · 7 days"],
            ["12", "Unread Messages"],
          ].map(([n, l]) => (
            <div key={l} className="bg-surface/60 backdrop-blur-xl p-6 lg:p-8">
              <div className="font-serif text-4xl md:text-5xl text-prime">{n}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-2">{l}</div>
            </div>
          ))}
        </section>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* current projects */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl">Current Projects</h2>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted">Updated live</span>
            </div>
            <div className="grid grid-cols-1 gap-px bg-hairline border border-hairline">
              {currentProjects.map((p) => (
                <article key={p.title} className="bg-surface/60 backdrop-blur-md p-5 lg:p-6 grid grid-cols-[80px_minmax(0,1fr)_auto] gap-5 items-center group hover:bg-surface transition-colors">
                  <div className="w-20 h-24 overflow-hidden bg-canvas shrink-0">
                    <img src={p.poster} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <h3 className="font-serif text-xl md:text-2xl truncate">{p.title}</h3>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-accent border border-accent/40 px-2 py-0.5 shrink-0">{p.stage}</span>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                      {p.client} · Colourist {p.colourist}
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
                </article>
              ))}
            </div>

            {/* Timeline */}
            <div className="border border-hairline bg-surface/40 backdrop-blur-md p-6 lg:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">Project Timeline · The Verdant Path</h3>
                <Link to="/process" className="text-[10px] uppercase tracking-[0.25em] text-accent hover:text-prime">Full process →</Link>
              </div>
              <ol className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-hairline">
                {timeline.map((s) => (
                  <li key={s.i} className={[
                    "bg-canvas p-4 flex flex-col gap-2 border-t-2",
                    s.state === "current" ? "border-accent"
                      : s.state === "done" ? "border-prime/60"
                      : "border-transparent",
                  ].join(" ")}>
                    <span className={[
                      "font-serif italic text-lg",
                      s.state === "current" ? "text-accent" : "text-muted",
                    ].join(" ")}>{s.i}</span>
                    <span className={[
                      "text-[11px] uppercase tracking-[0.2em]",
                      s.state === "pending" ? "text-muted" : "text-prime",
                    ].join(" ")}>{s.title}</span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-muted">
                      {s.state === "current" ? "In progress" : s.state === "done" ? "Complete" : "—"}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Review Links */}
            <div className="border border-hairline bg-surface/40 backdrop-blur-md p-6 lg:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">Review Links</h3>
                <button className="text-[10px] uppercase tracking-[0.25em] text-accent hover:text-prime">New link +</button>
              </div>
              <ul className="divide-y divide-hairline">
                {reviewLinks.map((r) => (
                  <li key={r.name} className="py-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-prime truncate">{r.name}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{r.time}</div>
                    </div>
                    <span className={[
                      "text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 shrink-0 border",
                      r.status === "Approved" ? "text-accent border-accent/40"
                        : r.status === "Revisions" ? "text-red-300 border-red-400/30"
                        : "text-prime border-prime/20",
                    ].join(" ")}>{r.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* right column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Deadlines */}
            <div className="border border-hairline bg-surface/60 backdrop-blur-xl p-6 space-y-4">
              <h3 className="font-serif text-xl">Upcoming Deadlines</h3>
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
            </div>

            {/* Activity */}
            <div className="border border-hairline bg-surface/60 backdrop-blur-xl p-6 space-y-4">
              <h3 className="font-serif text-xl">Recent Activity</h3>
              <ul className="space-y-4">
                {activity.map((a, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-prime"><span className="text-accent">{a.who}</span> {a.what}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-0.5">{a.when} ago</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notifications */}
            <div className="border border-hairline bg-surface/60 backdrop-blur-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl">Messages</h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent">3 new</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between gap-4"><span className="truncate">K. Njoroge · "Ready for your notes on 03."</span></li>
                <li className="flex justify-between gap-4 text-muted"><span className="truncate">Ogilvy · "Approved with tweaks."</span></li>
                <li className="flex justify-between gap-4 text-muted"><span className="truncate">Netflix Ops · "IMF received."</span></li>
              </ul>
            </div>
          </aside>
        </div>

        {/* bottom row: invoices + docs + delivery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-6 border border-hairline bg-surface/40 backdrop-blur-md p-6 lg:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl">Invoices</h3>
              <button className="text-[10px] uppercase tracking-[0.25em] text-accent hover:text-prime">Download all</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.25em] text-muted border-b border-hairline">
                  <th className="text-left py-3 font-normal">ID</th>
                  <th className="text-left py-3 font-normal">Project</th>
                  <th className="text-right py-3 font-normal">Amount</th>
                  <th className="text-right py-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((iv) => (
                  <tr key={iv.id} className="border-b border-hairline last:border-0 hover:bg-canvas/40 transition-colors">
                    <td className="py-4 text-prime/80">{iv.id}</td>
                    <td className="py-4 truncate">{iv.project}</td>
                    <td className="py-4 text-right font-serif">{iv.amount}</td>
                    <td className={[
                      "py-4 text-right text-[10px] uppercase tracking-[0.25em]",
                      iv.status === "Paid" ? "text-accent"
                        : iv.status === "Due" ? "text-red-300"
                        : "text-muted",
                    ].join(" ")}>{iv.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="lg:col-span-3 border border-hairline bg-surface/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-serif text-2xl">Documents</h3>
            <ul className="space-y-4">
              {documents.map((d) => (
                <li key={d.name} className="flex items-start justify-between gap-3 border-b border-hairline pb-3 last:border-0">
                  <span className="text-sm text-prime/90 truncate">{d.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted shrink-0">{d.size}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="lg:col-span-3 border border-hairline bg-surface/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-serif text-2xl">File Delivery</h3>
            <div className="border border-dashed border-hairline p-6 text-center space-y-2 hover:border-accent transition-colors cursor-pointer">
              <div className="font-serif italic text-accent text-2xl">↑</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Drop ProRes / DCP</div>
              <div className="text-[10px] text-muted">Aspera enabled</div>
            </div>
            <button className="w-full bg-accent text-canvas py-3 text-[10px] uppercase tracking-[0.25em] hover:brightness-110 transition">
              Start Transfer
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
