import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fulgent Post House" },
      {
        name: "description",
        content:
          "Book a consultation or request a studio visit. Fulgent Post House, Senteu Plaza, Kilimani, Nairobi.",
      },
      { property: "og:title", content: "Contact — Fulgent Post House" },
      { property: "og:description", content: "Book a consultation with our studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-canvas pt-32">
      <Section className="pb-20">
        <Eyebrow number="01">Begin</Eyebrow>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl lg:text-9xl font-medium kerning-tight max-w-[14ch] text-balance">
          Tell us about your <em className="italic font-normal">film</em>.
        </h1>
      </Section>

      <Section className="pb-28 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-16 lg:gap-24">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-10"
          >
            {[
              { id: "name", label: "Your name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "project", label: "Project title", type: "text" },
            ].map((f) => (
              <div key={f.id} className="space-y-2 border-b border-hairline pb-3 focus-within:border-accent transition-colors">
                <label htmlFor={f.id} className="eyebrow !text-muted block">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="w-full bg-transparent border-none outline-none font-serif text-2xl md:text-3xl text-prime placeholder:text-muted/30"
                />
              </div>
            ))}

            <div className="space-y-2 border-b border-hairline pb-3 focus-within:border-accent transition-colors">
              <label htmlFor="brief" className="eyebrow !text-muted block">
                Brief
              </label>
              <textarea
                id="brief"
                rows={4}
                required
                className="w-full bg-transparent border-none outline-none font-serif text-2xl md:text-3xl text-prime placeholder:text-muted/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-accent text-canvas px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] hover:brightness-110 transition disabled:opacity-50"
              disabled={sent}
            >
              {sent ? "Received — we'll be in touch" : "Send enquiry"}
            </button>
          </form>

          <aside className="space-y-12 lg:pt-2">
            <div>
              <span className="eyebrow">Studio</span>
              <address className="not-italic mt-4 font-serif text-2xl text-prime leading-snug">
                Senteu Plaza, Suite 402
                <br />
                Galana Rd, Kilimani
                <br />
                Nairobi, Kenya
              </address>
            </div>
            <div>
              <span className="eyebrow">Hours</span>
              <p className="mt-4 text-prime text-base leading-relaxed">
                Monday — Friday · 09:00 – 19:00 EAT
                <br />
                Sessions by appointment
              </p>
            </div>
            <div>
              <span className="eyebrow">Direct</span>
              <div className="mt-4 space-y-2 font-serif text-2xl">
                <a href="mailto:studio@fulgent.post" className="block text-prime hover:text-accent transition-colors">
                  studio@fulgent.post
                </a>
                <a href="tel:+254700000000" className="block text-prime hover:text-accent transition-colors">
                  +254 700 000 000
                </a>
              </div>
            </div>
            <div>
              <span className="eyebrow">Follow</span>
              <div className="mt-4 flex gap-6 text-sm text-muted">
                <a href="#" className="hover:text-prime transition-colors">Instagram</a>
                <a href="#" className="hover:text-prime transition-colors">Vimeo</a>
                <a href="#" className="hover:text-prime transition-colors">LinkedIn</a>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
