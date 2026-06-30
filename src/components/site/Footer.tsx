import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 pt-28 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <Link to="/" className="font-serif text-5xl lg:text-6xl uppercase kerning-tight block">
                Fulgent.
              </Link>
              <p className="font-sans text-base text-muted max-w-sm mt-6 leading-relaxed">
                The premier finishing house for African narrative cinema and
                global commercial standards.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted/60">
              © {new Date().getFullYear()} Fulgent Post House. All rights reserved.
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            <span className="eyebrow">Studio</span>
            <address className="not-italic text-sm text-prime/80 leading-loose">
              Senteu Plaza, Suite 402
              <br />
              Galana Rd, Kilimani
              <br />
              Nairobi, Kenya
            </address>
            <div className="flex flex-col gap-2 pt-2">
              <a href="#" className="text-sm text-muted hover:text-prime transition-colors">Instagram</a>
              <a href="#" className="text-sm text-muted hover:text-prime transition-colors">Vimeo</a>
              <a href="#" className="text-sm text-muted hover:text-prime transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <span className="eyebrow">Enquiries</span>
            <a href="mailto:studio@fulgent.post" className="text-sm text-prime hover:text-accent transition-colors">
              studio@fulgent.post
            </a>
            <p className="text-sm text-muted leading-relaxed">
              Join our quarterly technical journal for insights into finishing
              workflows and colour science.
            </p>
            <form
              className="flex border-b border-prime/20 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="bg-transparent border-none outline-none text-sm font-sans flex-grow placeholder:text-muted/60"
              />
              <button
                type="submit"
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent hover:text-prime transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-hairline flex flex-col sm:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-muted/60">
          <div className="flex gap-6">
            <a href="#" className="hover:text-prime transition-colors">Privacy</a>
            <a href="#" className="hover:text-prime transition-colors">Terms</a>
            <a href="#" className="hover:text-prime transition-colors">Credits</a>
          </div>
          <span>Crafted in Nairobi · Delivered worldwide</span>
        </div>
      </div>
    </footer>
  );
}
