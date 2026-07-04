import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import heroSuite from "@/assets/hero-suite.jpg";

const navGroups = [
  {
    id: "studio",
    label: "Studio",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    id: "shop",
    label: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop/featured", label: "Featured Products" },
    ],
  },
  {
    id: "client",
    label: "Client",
    links: [
      { href: "/login", label: "Client Login" },
      { href: "/process", label: "Process" },
    ],
  },
  {
    id: "academy",
    label: "Academy",
    links: [{ href: "/academy", label: "Academy" }],
  },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("studio");
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

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-[70] transition-all duration-500",
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

          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="size-11 grid place-items-center border border-prime/15 bg-canvas/20 backdrop-blur-md hover:border-accent/70 hover:text-accent transition-colors"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={[
          "fixed inset-0 z-[80] transition-[opacity,visibility] duration-700",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105"
          style={{ backgroundImage: `url(${heroSuite})` }}
        />
        <div className="absolute inset-0 bg-canvas/70 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(183,140,69,0.22),transparent_38%),linear-gradient(120deg,rgba(5,5,5,0.76),rgba(5,5,5,0.38))]" />

        <div className="relative h-full min-h-dvh px-6 lg:px-10 py-6 lg:py-8 flex flex-col">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-serif text-2xl uppercase text-prime" aria-label="Fulgent Post House home">
              Fulgent
            </Link>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="size-11 grid place-items-center border border-prime/15 bg-prime/[0.03] hover:border-accent/70 hover:text-accent transition-colors"
            >
              <X className="size-5" strokeWidth={1.25} />
            </button>
          </div>

          <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.6fr)] gap-10 lg:gap-24 pt-20 lg:pt-28 pb-8">
            <div className="max-w-3xl">
              {navGroups.map((group, index) => {
                const isExpanded = expanded === group.id;
                return (
                  <div key={group.id} className="border-b border-prime/15">
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : group.id)}
                      className="group w-full grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 py-5 lg:py-6 text-left"
                      aria-expanded={isExpanded}
                    >
                      <span className="font-serif text-sm text-muted">({index + 1})</span>
                      <span className="font-sans text-3xl md:text-5xl uppercase text-prime group-hover:text-accent transition-colors">
                        {group.label}
                      </span>
                      <span className="size-10 grid place-items-center text-prime/80 group-hover:text-accent transition-colors">
                        {isExpanded ? (
                          <ChevronDown className="size-6" strokeWidth={1.25} />
                        ) : (
                          <ArrowDownRight className="size-6" strokeWidth={1.25} />
                        )}
                      </span>
                    </button>
                    <div
                      className={[
                        "grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-6 pl-[3.5rem] flex flex-col gap-3">
                          {group.links.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="inline-flex w-fit items-center gap-3 text-sm uppercase text-prime/70 hover:text-prime transition-colors"
                            >
                              {item.label}
                              <ArrowRight className="size-4" strokeWidth={1.25} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="flex flex-col justify-between gap-10 lg:pt-28">
              <div className="space-y-10 text-sm text-prime/80">
                <div className="space-y-3">
                  <div className="text-[10px] uppercase text-muted">E:</div>
                  <a href="mailto:studio@fulgent.post" className="block underline decoration-prime/30 underline-offset-4 hover:text-accent">
                    studio@fulgent.post
                  </a>
                  <a href="mailto:products@fulgent.post" className="block underline decoration-prime/30 underline-offset-4 hover:text-accent">
                    products@fulgent.post
                  </a>
                </div>
                <div className="space-y-3">
                  <div className="text-[10px] uppercase text-muted">C.M:</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {["Instagram", "YouTube", "LinkedIn", "Pinterest"].map((social) => (
                      <a key={social} href="#" className="underline decoration-prime/30 underline-offset-4 hover:text-accent">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:self-end w-full lg:max-w-sm grid gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-between border-b border-prime/50 py-3 text-[11px] uppercase text-prime hover:text-accent hover:border-accent transition-colors"
                >
                  Contact Us
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" strokeWidth={1.25} />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-between border-b border-accent/70 py-3 text-[11px] uppercase text-accent hover:text-prime hover:border-prime transition-colors"
                >
                  Book Consultation
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" strokeWidth={1.25} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
