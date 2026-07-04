import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard/reviews")({
  component: ReviewsPage,
});

const reviews = [
  { title: "Verdant — Reel 03 v06", project: "The Verdant Path", version: "v06", duration: "12:04", by: "K. Njoroge", status: "Awaiting Review", comments: 0, thumb: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop" },
  { title: "Halogen — 60s Master", project: "Halogen", version: "v03", duration: "01:00", by: "M. Adeyemi", status: "Approved", comments: 7, thumb: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80&auto=format&fit=crop" },
  { title: "Long Coast — HDR Trim", project: "The Long Coast", version: "v08", duration: "04:38", by: "K. Njoroge", status: "Revisions", comments: 4, thumb: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format&fit=crop" },
  { title: "Verdant — Reel 02 v04", project: "The Verdant Path", version: "v04", duration: "10:52", by: "K. Njoroge", status: "Approved", comments: 12, thumb: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop" },
];

function ReviewsPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Reviews" title="Review Links" lead="Every cut waiting on your notes, in one calm room." >
        <button className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 hover:bg-accent hover:text-canvas px-5 py-3 transition-colors">+ New Link</button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <article key={r.title} className="group border border-hairline bg-surface/40 hover:border-accent/40 transition-all">
            <div className="aspect-video relative overflow-hidden bg-canvas">
              <img src={r.thumb} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-16 h-16 rounded-full border border-accent/60 grid place-items-center backdrop-blur bg-canvas/40 group-hover:bg-accent group-hover:text-canvas transition-colors">
                  <span className="text-accent group-hover:text-canvas text-xl">▶</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] bg-canvas/80 backdrop-blur text-prime px-2 py-1">{r.duration}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] bg-canvas/80 backdrop-blur text-accent px-2 py-1">{r.version}</span>
              </div>
              <span className={[
                "absolute top-3 right-3 text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 border backdrop-blur bg-canvas/60",
                r.status === "Approved" ? "text-accent border-accent/60"
                  : r.status === "Revisions" ? "text-red-300 border-red-400/40"
                  : "text-prime border-prime/30",
              ].join(" ")}>{r.status}</span>
            </div>
            <div className="p-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-serif text-xl truncate">{r.title}</h3>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{r.project} · {r.by}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Notes</div>
                <div className="font-serif text-lg text-prime">{r.comments}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Panel title="Awaiting You"><p className="text-sm text-muted">You have <span className="text-accent">1 review</span> requiring notes and <span className="text-accent">1 delivery</span> to approve before Friday.</p></Panel>
    </div>
  );
}
