import { createFileRoute } from "@tanstack/react-router";

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

function LoginPage() {
  return (
    <div className="min-h-dvh bg-canvas flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(183,140,69,0.08),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(183,140,69,0.05),transparent_55%)]" />
      <div className="relative w-full max-w-md border border-hairline bg-surface/60 backdrop-blur-xl p-10 lg:p-12 space-y-10">
        <div className="space-y-3 text-center">
          <span className="eyebrow">Client Portal</span>
          <h1 className="font-serif text-4xl font-medium kerning-tight">
            Welcome back.
          </h1>
          <p className="text-sm text-muted">
            Sign in to review cuts, approve grades and download masters.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent transition-colors">
            <label htmlFor="email" className="eyebrow !text-muted block">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full bg-transparent border-none outline-none text-prime text-base"
            />
          </div>
          <div className="space-y-2 border-b border-hairline pb-2 focus-within:border-accent transition-colors">
            <label htmlFor="password" className="eyebrow !text-muted block">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="w-full bg-transparent border-none outline-none text-prime text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-canvas py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] hover:brightness-110 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted">
          <a href="#" className="hover:text-prime transition-colors">Forgot password</a>
          <a href="#" className="hover:text-prime transition-colors">Request access</a>
        </div>
      </div>
    </div>
  );
}
