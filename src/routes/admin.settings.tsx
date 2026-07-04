import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1600px] mx-auto space-y-10">
      <PageHeader eyebrow="Studio Ops · Settings" title="Studio Settings" lead="Roles, permissions, security and integrations." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Roles & Permissions">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["Owner", "Full access · billing"],
              ["Producer", "Projects · clients · finance (read)"],
              ["Colourist", "Projects · versions · reviews"],
              ["Delivery Ops", "Exports · transfers"],
              ["Client", "Portal only · assigned projects"],
            ].map(([r, d]) => (
              <li key={r} className="py-3 flex justify-between gap-4">
                <div>
                  <div className="text-prime">{r}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1">{d}</div>
                </div>
                <button className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-prime">Edit</button>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Integrations">
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["DaVinci Resolve", "Connected"],
              ["Frame.io", "Connected"],
              ["Aspera", "Connected"],
              ["Signiant", "Not connected"],
              ["Xero · Finance", "Connected"],
              ["Slack · Studio ops", "Connected"],
            ].map(([n, s]) => (
              <li key={n} className="py-3 flex justify-between items-center">
                <span className="text-prime">{n}</span>
                <span className={[
                  "text-[10px] uppercase tracking-[0.3em]",
                  s === "Connected" ? "text-accent" : "text-muted",
                ].join(" ")}>{s}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Security">
          <div className="space-y-3">
            {["Enforce 2FA", "SSO · Google Workspace", "IP allowlist", "Audit log"].map((s) => (
              <button key={s} className="w-full border border-hairline text-left px-4 py-3 text-sm text-prime hover:border-accent hover:text-accent transition-colors flex justify-between items-center">
                <span>{s}</span><span className="text-[10px] uppercase tracking-[0.3em] text-muted">Configure →</span>
              </button>
            ))}
          </div>
        </Panel>

        <Panel title="Branding">
          <div className="space-y-4">
            <div className="border border-hairline p-6 text-center">
              <div className="font-serif text-4xl">Fulgent<span className="text-accent">.</span></div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted mt-3">Client portal wordmark</div>
            </div>
            <button className="w-full border border-hairline hover:border-accent hover:text-accent text-muted text-[10px] uppercase tracking-[0.3em] py-3 transition-colors">Upload custom mark</button>
          </div>
        </Panel>
      </div>
    </div>
  );
}
