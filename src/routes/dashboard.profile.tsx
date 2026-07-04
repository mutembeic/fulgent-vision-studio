import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Profile" title="Your Account" lead="Personal, notification and access settings." />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Panel className="lg:col-span-1" title="Identity">
          <div className="flex flex-col items-center text-center py-4 space-y-3">
            <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/40 grid place-items-center font-serif text-4xl text-accent">A</div>
            <div>
              <div className="font-serif text-2xl">Amara Okafor</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted mt-1">Director · Okafor Films</div>
            </div>
            <button className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 px-4 py-2 hover:bg-accent hover:text-canvas transition-colors">Change photo</button>
          </div>
        </Panel>

        <Panel className="lg:col-span-2" title="Company & Contact">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              ["Full Name", "Amara Okafor"],
              ["Email", "testemail@gmail.com"],
              ["Phone", "+254 711 000 000"],
              ["Company", "Okafor Films"],
              ["Role", "Director"],
              ["Country", "Kenya"],
            ].map(([l, v]) => (
              <div key={l} className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent">
                <label className="eyebrow !text-muted block">{l}</label>
                <input defaultValue={v} className="w-full bg-transparent text-prime outline-none text-base" />
              </div>
            ))}
          </form>
        </Panel>

        <Panel className="lg:col-span-2" title="Notifications">
          <ul className="space-y-4">
            {[
              ["Review requests", "Email me when a new cut is ready to review.", true],
              ["Delivery updates", "Notify when a master is delivered to a destination.", true],
              ["Invoices", "Send new invoices and payment reminders.", true],
              ["Studio newsletter", "Occasional notes on new work and releases.", false],
            ].map(([t, d, on]) => (
              <li key={t as string} className="flex items-start justify-between gap-6 border-b border-hairline pb-4 last:border-0">
                <div className="min-w-0">
                  <div className="text-prime">{t as string}</div>
                  <div className="text-xs text-muted mt-1">{d as string}</div>
                </div>
                <div className={[
                  "w-12 h-6 rounded-full relative shrink-0 border transition-colors cursor-pointer",
                  on ? "bg-accent border-accent" : "bg-canvas border-hairline",
                ].join(" ")}>
                  <span className={[
                    "absolute top-0.5 w-4 h-4 rounded-full transition-all",
                    on ? "left-6 bg-canvas" : "left-1 bg-muted",
                  ].join(" ")} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Security">
          <div className="space-y-4">
            <button className="w-full border border-hairline text-[11px] uppercase tracking-[0.3em] text-muted hover:text-accent hover:border-accent py-3 transition-colors">Change Password</button>
            <button className="w-full border border-hairline text-[11px] uppercase tracking-[0.3em] text-muted hover:text-accent hover:border-accent py-3 transition-colors">Enable 2FA</button>
            <button className="w-full border border-hairline text-[11px] uppercase tracking-[0.3em] text-muted hover:text-accent hover:border-accent py-3 transition-colors">Manage Sessions</button>
          </div>
        </Panel>
      </div>
    </div>
  );
}
