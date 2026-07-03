import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { setNavHoverImage, navHoverImages } from "@/lib/nav-hover";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-canvas/70 backdrop-blur-xl border-b border-hairline"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group" aria-label="Fulgent Post House home">
            <span className="font-serif text-2xl tracking-tight uppercase text-prime">
              Fulgent
            </span>
            <span className="eyebrow hidden sm:inline text-muted group-hover:text-accent transition-colors">
              Post House
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted hover:text-prime transition-colors"
                activeProps={{ className: "text-prime" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-muted hover:text-prime transition-colors"
            >
              Client Login
            </Link>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 border border-prime/15 bg-prime/[0.03] hover:bg-prime/10 transition-colors px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em]"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              Book Consultation
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden size-10 grid place-items-center border border-prime/15"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="block w-4 h-px bg-prime" />
                <span className="block w-4 h-px bg-prime" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={[
          "fixed inset-0 z-40 bg-canvas transition-opacity duration-500 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="h-full flex flex-col justify-between px-6 pt-28 pb-12">
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-serif text-5xl text-prime hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-canvas px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.25em]"
            >
              Book Consultation
            </Link>
            <Link
              to="/login"
              className="text-center text-[11px] uppercase tracking-[0.25em] text-muted"
            >
              Client Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
