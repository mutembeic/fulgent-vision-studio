import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Client Login — Fulgent Post House" },
      {
        name: "description",
        content:
          "Secure client portal. Sign in to review cuts, approve grades and download masters.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

const DEMO_EMAIL = "testemail@gmail.com";
const DEMO_PASSWORD = "password";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setTimeout(() => {
      if (email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD) {
        try { sessionStorage.setItem("fulgent_demo_session", "1"); } catch {}
        navigate({ to: "/dashboard" });
      } else {
        setError("Invalid credentials. Use the demo login below.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-dvh bg-canvas flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(183,140,69,0.08),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(183,140,69,0.05),transparent_55%)]" />
      <img
        src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1920&q=80&auto=format&fit=crop"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/40" />

      <div className="relative w-full max-w-md border border-hairline bg-surface/70 backdrop-blur-xl p-10 lg:p-12 space-y-10">
        <div className="space-y-3 text-center">
          <span className="eyebrow">Client Portal</span>
          <h1 className="font-serif text-4xl font-medium kerning-tight">
            Welcome back.
          </h1>
          <p className="text-sm text-muted">
            Sign in to review cuts, approve grades and download masters.
          </p>
        </div>

        <form className="space-y-6" onSubmit={submit}>
          <div className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent transition-colors">
            <label htmlFor="email" className="eyebrow !text-muted block">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-prime text-base"
            />
          </div>
          <div className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent transition-colors">
            <label htmlFor="password" className="eyebrow !text-muted block">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-prime text-base"
            />
          </div>

          {error && (
            <p className="text-[11px] uppercase tracking-[0.2em] text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-canvas py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] hover:brightness-110 transition disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="border border-dashed border-hairline p-4 text-[11px] text-muted space-y-1.5">
          <div className="uppercase tracking-[0.25em] text-accent text-[10px]">Demo credentials</div>
          <div><span className="text-prime/60">Email </span><span className="text-prime">{DEMO_EMAIL}</span></div>
          <div><span className="text-prime/60">Password </span><span className="text-prime">{DEMO_PASSWORD}</span></div>
        </div>

        <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted">
          <a href="#" className="hover:text-prime transition-colors">Forgot password</a>
          <a href="#" className="hover:text-prime transition-colors">Request access</a>
        </div>
      </div>
    </div>
  );
}
