import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Fulgent Post House" },
      {
        name: "description",
        content:
          "Nine stages from brief to delivery. The Fulgent finishing workflow, explained.",
      },
      { property: "og:title", content: "Process — Fulgent Post House" },
      {
        property: "og:description",
        content: "From brief to delivery — our nine-stage finishing workflow.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { i: "i.", title: "Brief", body: "We meet, in person or on a private call. You walk us through the film, the references, the intent. Nothing leaves the room.", duration: "1 session" },
  { i: "ii.", title: "Lookbook", body: "A bespoke visual prospectus — stills, references and tonal targets — translating the film's intent into colour.", duration: "1 week" },
  { i: "iii.", title: "Camera Tests", body: "Sensor-specific LUTs and grain profiles tested against the production's chosen camera package.", duration: "2 days" },
  { i: "iv.", title: "Conform", body: "Editorial timelines rebuilt from camera originals — frame accurate, high-bitrate, ready to grade.", duration: "3–5 days" },
  { i: "v.", title: "Primary", body: "Balance, density and skin-tone integrity established across the cut. The film begins to find its register.", duration: "1–2 weeks" },
  { i: "vi.", title: "Secondary", body: "Scene-by-scene shaping. Qualifiers, windows, shot-to-shot continuity. The fine craft.", duration: "1–3 weeks" },
  { i: "vii.", title: "Review", body: "Reference theatre sessions with the director and DP. Notes, trims, conversations.", duration: "1 week" },
  { i: "viii.", title: "Final Trim", body: "Beauty work, paint-out, silent-room QC. Every frame, every shot, every cut.", duration: "3–5 days" },
  { i: "ix.", title: "Delivery", body: "Masters wrapped — theatrical DCP, IMF, Dolby Vision, broadcast. QC'd, packaged, delivered.", duration: "1 week" },
];

function ProcessPage() {
  return (
    <div className="bg-canvas pt-32">
      <Section className="pb-20">
        <Eyebrow number="01">The Workflow</Eyebrow>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl font-medium kerning-tight max-w-[18ch] text-balance">
          A journey, not a hand-off.
        </h1>
        <p className="mt-10 text-muted text-lg max-w-2xl leading-relaxed">
          Nine stages, one colourist, one room. Every project moves through
          this workflow — adapted in scale, never in care.
        </p>
      </Section>

      <Section className="pb-32">
        <ol className="border-t border-hairline">
          {steps.map((s) => (
            <li
              key={s.i}
              className="border-b border-hairline grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)_180px] gap-6 md:gap-12 py-10 md:py-14 group hover:bg-surface/40 transition-colors px-2 md:px-4"
            >
              <span className="font-serif italic text-4xl md:text-5xl text-accent">{s.i}</span>
              <div className="space-y-3 min-w-0">
                <h2 className="font-serif text-3xl md:text-4xl font-medium kerning-tight">
                  {s.title}
                </h2>
                <p className="text-muted leading-relaxed max-w-prose">{s.body}</p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted md:text-right self-start md:self-center">
                {s.duration}
              </span>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
