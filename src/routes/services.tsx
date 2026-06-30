import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fulgent Post House" },
      {
        name: "description",
        content:
          "Colour grading, look development, conform and online, mastering and delivery for feature films and commercials.",
      },
      { property: "og:title", content: "Services — Fulgent Post House" },
      {
        property: "og:description",
        content:
          "Reference-grade finishing services calibrated to Dolby Vision, IMF and theatrical DCI standards.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Colour Grading",
    body: "From primary balance to scene-by-scene secondary shaping, our colourists work on DaVinci Resolve with reference-grade Sony BVM monitoring.",
    deliverables: ["Primary & secondary grade", "Show LUT design", "HDR & SDR trims"],
    turnaround: "2–6 weeks",
  },
  {
    n: "02",
    title: "Online & Conform",
    body: "Editorial timelines rebuilt from camera originals — high-bitrate, frame-accurate, ready for the finishing pass.",
    deliverables: ["EDL / XML / AAF conform", "VFX integration", "Title & subtitle layering"],
    turnaround: "1–2 weeks",
  },
  {
    n: "03",
    title: "Look Development",
    body: "Custom LUTs, grain models and on-set looks designed with the DP from pre-production through dailies.",
    deliverables: ["Show LUT", "On-set monitoring LUT", "Test reel"],
    turnaround: "2–4 weeks",
  },
  {
    n: "04",
    title: "Mastering",
    body: "Theatrical DCP, Netflix IMF, Dolby Vision HDR and broadcast masters built to spec, QC'd and delivered.",
    deliverables: ["DCP / IMF / ProRes masters", "Dolby Vision XML", "Broadcast deliverables"],
    turnaround: "1–2 weeks",
  },
  {
    n: "05",
    title: "Delivery",
    body: "End-to-end delivery management. Trailers, versioning, metadata and platform-specific masters.",
    deliverables: ["Versioning matrix", "Trailer masters", "Streaming packages"],
    turnaround: "1 week",
  },
  {
    n: "06",
    title: "Consultation",
    body: "Strategic creative and technical guidance ahead of principal photography. We sit with directors and DPs early.",
    deliverables: ["Workflow brief", "Camera & LUT recommendations", "Post pipeline plan"],
    turnaround: "Single session",
  },
];

function ServicesPage() {
  return (
    <div className="bg-canvas pt-32">
      <Section className="pb-20">
        <Eyebrow number="01">Capabilities</Eyebrow>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl font-medium kerning-tight max-w-[18ch] text-balance">
          Six disciplines, one finishing room.
        </h1>
        <p className="mt-10 text-muted text-lg max-w-2xl leading-relaxed">
          Every project begins and ends with the same colourist in the same
          reference theatre — no hand-offs, no compromise.
        </p>
      </Section>

      <Section className="pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-hairline">
          {services.map((s) => (
            <article
              key={s.n}
              className="bg-canvas p-10 lg:p-14 flex flex-col gap-6 hover:bg-surface transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-serif italic text-4xl text-accent">
                  {s.n}.
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
                  Turnaround · {s.turnaround}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium kerning-tight">
                {s.title}
              </h2>
              <p className="text-muted leading-relaxed max-w-prose">{s.body}</p>
              <ul className="border-t border-hairline pt-6 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-prime/80">
                    <span className="size-1 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-2 text-[10px] uppercase tracking-[0.25em] text-accent border-b border-accent/40 pb-1 self-start hover:text-prime hover:border-prime transition-colors"
              >
                Enquire →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
