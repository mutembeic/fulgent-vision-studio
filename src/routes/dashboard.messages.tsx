import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard/messages")({
  component: MessagesPage,
});

const threads = [
  { id: "t1", name: "K. Njoroge", role: "Senior Colourist", last: "Ready for your notes on Reel 03.", when: "12m", unread: 2, avatar: "K" },
  { id: "t2", name: "R. Achieng", role: "Producer", last: "Theatre confirmed Thursday 15:00.", when: "1h", unread: 0, avatar: "R" },
  { id: "t3", name: "Ogilvy Africa", role: "Client · Halogen", last: "Approved with tweaks.", when: "3h", unread: 1, avatar: "O" },
  { id: "t4", name: "Netflix Ops", role: "Delivery · Long Coast", last: "IMF received. QC passed.", when: "1d", unread: 0, avatar: "N" },
  { id: "t5", name: "M. Adeyemi", role: "Colourist", last: "Conform pass on Halogen queued.", when: "2d", unread: 0, avatar: "M" },
];

const conversation = [
  { from: "K. Njoroge", when: "Today · 10:12", text: "Uploaded v06 of Reel 03. Warmed the interiors slightly per Amara's note.", mine: false },
  { from: "You", when: "Today · 10:41", text: "Beautiful. Let me sit with it in the theatre this afternoon.", mine: true },
  { from: "K. Njoroge", when: "Today · 10:44", text: "Sounds good. I'll pull references for the exterior grade while you review.", mine: false },
  { from: "System", when: "Today · 11:02", text: "Review link generated: verdant-r03-v06", mine: false, system: true },
];

function MessagesPage() {
  const [active, setActive] = useState(threads[0].id);
  const [msg, setMsg] = useState("");

  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-8">
      <PageHeader eyebrow="Client Portal · Messages" title="Studio Conversations" lead="Direct line to your colourist, producer and delivery ops." />

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-px bg-hairline border border-hairline min-h-[560px]">
        {/* Threads */}
        <aside className="bg-surface/40">
          <div className="p-4 border-b border-hairline">
            <input placeholder="Search conversations…" className="w-full bg-transparent text-sm text-prime placeholder:text-muted border-b border-hairline focus:border-accent outline-none py-2" />
          </div>
          <ul>
            {threads.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setActive(t.id)}
                  className={[
                    "w-full text-left px-4 py-4 flex items-start gap-3 border-l-2 border-b border-hairline transition-colors",
                    active === t.id ? "border-l-accent bg-canvas/60" : "border-l-transparent hover:bg-canvas/30",
                  ].join(" ")}
                >
                  <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 grid place-items-center font-serif text-accent shrink-0">{t.avatar}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <span className="text-sm text-prime truncate">{t.name}</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-muted shrink-0">{t.when}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-0.5">{t.role}</div>
                    <div className="text-xs text-muted truncate mt-1.5">{t.last}</div>
                  </div>
                  {t.unread > 0 && <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Conversation */}
        <section className="bg-surface/20 flex flex-col">
          <header className="p-5 border-b border-hairline flex justify-between items-center">
            <div>
              <div className="font-serif text-xl">K. Njoroge</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Senior Colourist · Verdant Path</div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Online</div>
          </header>

          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {conversation.map((m, i) => {
              if (m.system) return (
                <div key={i} className="text-center text-[10px] uppercase tracking-[0.3em] text-muted">— {m.text} —</div>
              );
              return (
                <div key={i} className={["flex", m.mine ? "justify-end" : ""].join(" ")}>
                  <div className={["max-w-[70%] space-y-1", m.mine ? "text-right" : ""].join(" ")}>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted">{m.from} · {m.when}</div>
                    <div className={[
                      "p-4 text-sm",
                      m.mine ? "bg-accent text-canvas" : "bg-canvas/60 border border-hairline text-prime",
                    ].join(" ")}>{m.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setMsg(""); }}
            className="p-4 border-t border-hairline flex items-center gap-3"
          >
            <button type="button" className="text-muted hover:text-accent text-lg">＋</button>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 bg-transparent text-sm text-prime placeholder:text-muted outline-none py-2"
            />
            <button className="text-[10px] uppercase tracking-[0.3em] bg-accent text-canvas px-5 py-2.5 hover:brightness-110 transition">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}
