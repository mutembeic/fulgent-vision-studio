import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Panel } from "@/components/app/AppShell";
import { PROJECTS, type Project } from "@/lib/portal-data";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjects,
});

function AdminProjects() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"All" | Project["status"]>("All");
  const [priority, setPriority] = useState<"All" | Project["priority"]>("All");

  const rows = PROJECTS.filter((p) =>
    (status === "All" || p.status === status) &&
    (priority === "All" || p.priority === priority) &&
    (q === "" || (p.title + p.client + p.colourist + p.id).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Roster" title="Project Roster" lead="Every picture on our floor, with filters, priority and colourist assignments.">
        <button className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 hover:bg-accent hover:text-canvas px-5 py-3 transition-colors">+ New Project</button>
      </PageHeader>

      <Panel>
        <div className="flex flex-wrap gap-4 items-center justify-between border-b border-hairline pb-5">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects, clients, colourists…" className="bg-transparent text-sm text-prime placeholder:text-muted border-b border-hairline focus:border-accent outline-none py-2 min-w-[240px] flex-1" />
          <div className="flex flex-wrap gap-3">
            <Select label="Status" value={status} onChange={(v) => setStatus(v as any)} options={["All", "Active", "Review", "Delivery", "Paused"]} />
            <Select label="Priority" value={priority} onChange={(v) => setPriority(v as any)} options={["All", "Rush", "High", "Standard"]} />
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.3em] text-muted border-b border-hairline">
              <th className="text-left py-3 font-normal">Project</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Client</th>
              <th className="text-left py-3 font-normal hidden lg:table-cell">Colourist</th>
              <th className="text-left py-3 font-normal hidden md:table-cell">Stage</th>
              <th className="text-left py-3 font-normal">Priority</th>
              <th className="text-right py-3 font-normal hidden lg:table-cell">Budget</th>
              <th className="text-right py-3 font-normal">Deadline</th>
              <th className="text-right py-3 font-normal">Progress</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-b border-hairline last:border-0 hover:bg-canvas/40 transition-colors group cursor-pointer">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-11 shrink-0 overflow-hidden bg-canvas"><img src={p.poster} alt="" className="w-full h-full object-cover" /></div>
                    <div className="min-w-0">
                      <div className="text-prime">{p.title}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-0.5">{p.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 hidden md:table-cell">{p.client}</td>
                <td className="py-4 text-muted hidden lg:table-cell">{p.colourist}</td>
                <td className="py-4 hidden md:table-cell">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-accent border border-accent/40 px-2 py-0.5">{p.stage}</span>
                </td>
                <td className="py-4">
                  <span className={[
                    "text-[9px] uppercase tracking-[0.3em]",
                    p.priority === "Rush" ? "text-red-300" : p.priority === "High" ? "text-accent" : "text-muted",
                  ].join(" ")}>● {p.priority}</span>
                </td>
                <td className="py-4 text-right font-serif hidden lg:table-cell">{p.budget}</td>
                <td className="py-4 text-right font-serif">{p.deadline}</td>
                <td className="py-4 text-right">
                  <div className="w-24 ml-auto h-[2px] bg-hairline overflow-hidden">
                    <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="text-[10px] text-accent mt-1">{p.progress}%</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <div className="py-10 text-center text-muted text-sm">No projects match your filters.</div>}
      </Panel>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="flex items-center gap-2 border border-hairline px-3 py-2 focus-within:border-accent">
      <span className="text-[9px] uppercase tracking-[0.3em] text-muted">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="bg-transparent text-sm text-prime outline-none">
        {options.map((o) => <option key={o} className="bg-canvas">{o}</option>)}
      </select>
    </label>
  );
}
