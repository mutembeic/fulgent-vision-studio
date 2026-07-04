import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { signIn, DEMO_CREDS, type Role } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — Fulgent Post House" },
      { name: "description", content: "Secure sign-in for Fulgent Post House clients and studio staff." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setTimeout(() => {
      const s = signIn(email, password, role);
      if (s) {
        navigate({ to: role === "admin" ? "/admin" : "/dashboard" });
      } else {
        setError("Invalid credentials. Use the demo login below.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-dvh bg-canvas flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(183,140,69,0.10),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(183,140,69,0.06),transparent_55%)]" />
      <img
        src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1920&q=80&auto=format&fit=crop"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/40" />

      <div
        className={[
          "relative w-full max-w-md border border-hairline bg-surface/70 backdrop-blur-xl p-10 lg:p-12 space-y-8",
          shake ? "animate-[shake_.4s_ease]" : "",
        ].join(" ")}
      >
        <style>{`@keyframes shake{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(4px)}30%,50%,70%{transform:translateX(-8px)}40%,60%{transform:translateX(8px)}}`}</style>

        <div className="space-y-3 text-center">
          <span className="eyebrow">Fulgent Post House</span>
          <h1 className="font-serif text-4xl font-medium kerning-tight">Welcome back.</h1>
          <p className="text-sm text-muted">Sign in to continue.</p>
        </div>

        {/* Role toggle */}
        <div className="grid grid-cols-2 gap-px bg-hairline border border-hairline">
          {(["client", "admin"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={[
                "py-3 text-[10px] uppercase tracking-[0.3em] transition-colors",
                role === r ? "bg-accent text-canvas" : "bg-surface text-muted hover:text-prime",
              ].join(" ")}
            >
              {r === "client" ? "Client" : "Studio Admin"}
            </button>
          ))}
        </div>

        <form className="space-y-6" onSubmit={submit}>
          <div className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent transition-colors">
            <label htmlFor="email" className="eyebrow !text-muted block">Email</label>
            <input id="email" type="email" autoComplete="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-prime text-base" />
          </div>
          <div className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent transition-colors">
            <label htmlFor="password" className="eyebrow !text-muted block">Password</label>
            <input id="password" type="password" autoComplete="current-password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-prime text-base" />
          </div>

          {error && (
            <p className="text-[11px] uppercase tracking-[0.2em] text-red-400 animate-[reveal-fade_.3s_ease-out]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-canvas py-3.5 text-[11px] font-semibold uppercase tracking-[0.3em] hover:brightness-110 transition disabled:opacity-60"
          >
            {loading ? "Signing in…" : `Enter ${role === "admin" ? "Studio Ops" : "Portal"}`}
          </button>
        </form>

        <div className="border border-dashed border-hairline p-4 text-[11px] text-muted space-y-1.5">
          <div className="uppercase tracking-[0.25em] text-accent text-[10px]">Demo credentials · both roles</div>
          <div><span className="text-prime/60">Email </span><span className="text-prime">{DEMO_CREDS.email}</span></div>
          <div><span className="text-prime/60">Password </span><span className="text-prime">{DEMO_CREDS.password}</span></div>
        </div>
      </div>
    </div>
  );
}
