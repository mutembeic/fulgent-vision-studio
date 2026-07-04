import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { getSession, signOut, type Role } from "@/lib/auth";

type NavItem = { label: string; to: string; icon: string };

const CLIENT_NAV: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: "◆" },
  { label: "Projects", to: "/dashboard/projects", icon: "▤" },
  { label: "Reviews", to: "/dashboard/reviews", icon: "▶" },
  { label: "Deliverables", to: "/dashboard/deliverables", icon: "↓" },
  { label: "Messages", to: "/dashboard/messages", icon: "✉" },
  { label: "Documents", to: "/dashboard/documents", icon: "◫" },
  { label: "Invoices", to: "/dashboard/invoices", icon: "₵" },
  { label: "Support", to: "/dashboard/support", icon: "?" },
  { label: "Profile", to: "/dashboard/profile", icon: "◐" },
];

const ADMIN_NAV: NavItem[] = [
  { label: "Overview", to: "/admin", icon: "◆" },
  { label: "Projects", to: "/admin/projects", icon: "▤" },
  { label: "Production", to: "/admin/production", icon: "≋" },
  { label: "Clients", to: "/admin/clients", icon: "◉" },
  { label: "Team", to: "/admin/team", icon: "◒" },
  { label: "Studio", to: "/admin/studio", icon: "◫" },
  { label: "Finance", to: "/admin/finance", icon: "₵" },
  { label: "Deliveries", to: "/admin/deliveries", icon: "↑" },
  { label: "Reports", to: "/admin/reports", icon: "▦" },
  { label: "Settings", to: "/admin/settings", icon: "⚙" },
];

export function AppShell({ role, children }: { role: Role; children: ReactNode }) {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const s = getSession();
    if (!s) { navigate({ to: "/login" }); return; }
    if (s.role !== role) {
      navigate({ to: role === "admin" ? "/dashboard" : "/admin" });
      return;
    }
    setReady(true);
  }, [navigate, role]);

  useEffect(() => { setOpen(false); }, [pathname]);

  if (!ready) return null;

  const items = role === "admin" ? ADMIN_NAV : CLIENT_NAV;
  const session = getSession()!;

  const logout = () => { signOut(); navigate({ to: "/login" }); };
  const isActive = (to: string) => to === (role === "admin" ? "/admin" : "/dashboard") ? pathname === to : pathname.startsWith(to);

  return (
    <div className="min-h-dvh bg-canvas text-prime flex">
      {/* Sidebar */}
      <aside className={[
        "fixed lg:sticky top-0 left-0 z-50 h-dvh w-[260px] shrink-0 bg-surface/80 backdrop-blur-2xl border-r border-hairline flex flex-col transition-transform duration-500",
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      ].join(" ")}>
        <div className="px-7 py-8 border-b border-hairline">
          <Link to="/" className="block space-y-1">
            <div className="font-serif text-xl tracking-tight">Fulgent<span className="text-accent">.</span></div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-muted">
              {role === "admin" ? "Studio Ops" : "Client Portal"}
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-0.5">
          {items.map((it) => {
            const active = isActive(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={[
                  "group flex items-center gap-3 px-3 py-2.5 relative transition-colors border-l-2",
                  active
                    ? "text-prime border-accent bg-canvas/40"
                    : "text-muted hover:text-prime border-transparent hover:border-hairline",
                ].join(" ")}
              >
                <span className={[
                  "text-[13px] w-4 text-center transition-colors",
                  active ? "text-accent" : "text-muted/60 group-hover:text-accent",
                ].join(" ")}>{it.icon}</span>
                <span className="text-[13px] tracking-[0.05em]">{it.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-hairline space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 grid place-items-center font-serif text-accent">
              {session.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] truncate text-prime">{session.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted truncate">{session.email}</div>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full text-[10px] uppercase tracking-[0.25em] border border-hairline hover:border-accent hover:text-accent text-muted px-3 py-2.5 transition-colors"
          >
            Sign out
          </button>
        </div>
      </aside>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-canvas/70 lg:hidden" />
      )}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile bar */}
        <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-5 py-4 bg-surface/80 backdrop-blur-xl border-b border-hairline">
          <Link to="/" className="font-serif text-lg">Fulgent<span className="text-accent">.</span></Link>
          <button
            onClick={() => setOpen(true)}
            className="text-[10px] uppercase tracking-[0.25em] text-muted border border-hairline px-3 py-2"
          >
            Menu
          </button>
        </header>

        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: { eyebrow: string; title: ReactNode; lead?: string; children?: ReactNode }) {
  return (
    <header className="pb-8 mb-10 border-b border-hairline grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
      <div className="min-w-0 space-y-3">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-5xl font-medium kerning-tight">{title}</h1>
        {lead && <p className="text-sm text-muted max-w-xl">{lead}</p>}
      </div>
      {children && <div className="shrink-0 flex items-center gap-3">{children}</div>}
    </header>
  );
}

export function StatGrid({ items }: { items: [string, string, string?][] }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline">
      {items.map(([n, l, sub]) => (
        <div key={l} className="bg-surface/60 backdrop-blur-xl p-6 lg:p-7">
          <div className="font-serif text-4xl md:text-5xl text-prime">{n}</div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-2">{l}</div>
          {sub && <div className="text-[10px] text-accent mt-1.5">{sub}</div>}
        </div>
      ))}
    </section>
  );
}

export function Panel({ title, action, children, className = "" }: {
  title?: ReactNode; action?: ReactNode; children: ReactNode; className?: string;
}) {
  return (
    <section className={["border border-hairline bg-surface/40 backdrop-blur-md p-6 lg:p-8 space-y-5", className].join(" ")}>
      {(title || action) && (
        <div className="flex items-center justify-between gap-4">
          {title && <h3 className="font-serif text-2xl">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
