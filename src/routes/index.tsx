import { createFileRoute, Link } from "@tanstack/react-router";
import heroSuite from "@/assets/hero-suite.jpg";
import projectVerdant from "@/assets/project-verdant.jpg";
import projectNeon from "@/assets/project-neon.jpg";
import controlSurface from "@/assets/control-surface.jpg";
import ctaCamera from "@/assets/cta-camera.jpg";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fulgent Post House — Crafting the Final Frame" },
      {
        name: "description",
        content:
          "Nairobi's premier cinematic colour and finishing house. High-end grading, look development and mastering for feature films, commercials and music video artistry.",
      },
      { property: "og:title", content: "Fulgent Post House — Crafting the Final Frame" },
      {
        property: "og:description",
        content: "Cinematic colour grading and finishing for global productions.",
      },
      { property: "og:image", content: heroSuite },
      { name: "twitter:image", content: heroSuite },
    ],
  }),
  component: HomePage,
});

const trustedBy = [
  "A24 Films",
  "Red Bull Media",
  "Netflix",
  "Safaricom",
  "M-KOPA",
  "Showmax",
];

const featuredWork = [
  {
    title: "The Verdant Path",
    discipline: "Feature Film — Look Development",
    tag: "Look Dev",
    year: "2024",
    director: "Amara Okafor",
    dop: "David Mutua",
    image: projectVerdant,
    span: "md:mt-0",
  },
  {
    title: "Nocturnal Pulse",
    discipline: "Commercial — Colour Grade",
    tag: "Colour Grade",
    year: "2024",
    director: "Kenji Tanaka",
    dop: "Agency — VML",
    image: projectNeon,
    span: "md:mt-32",
  },
];

const services = [
  {
    n: "01",
    title: "Colour Grading",
    body: "Precision manipulation of light and hue on DaVinci Resolve panels to elevate the emotional core of every scene.",
  },
  {
    n: "02",
    title: "Look Development",
    body: "Custom LUTs and grain modelling, built collaboratively with cinematographers from pre-production onward.",
  },
  {
    n: "03",
    title: "Conform & Online",
    body: "Seamless translation from edit to grade. High-bitrate camera originals aligned for the finishing pass.",
  },
  {
    n: "04",
    title: "Mastering & Delivery",
    body: "DCP, IMF, Dolby Vision HDR and broadcast-ready encodes built to global streaming specifications.",
  },
  {
    n: "05",
    title: "Visual Effects Finishing",
    body: "Beauty work, paint-out, comp integration and final clean-up — invisible polish for hero shots.",
  },
  {
    n: "06",
    title: "Creative Consultation",
    body: "Strategic visual guidance for directors and DPs ahead of principal photography.",
  },
];

const processSteps = [
  { i: "i.", title: "Brief", body: "Scripts, references and tone exchanged in a confidential intake." },
  { i: "ii.", title: "Lookbook", body: "A bespoke visual prospectus translates the film's intent into colour." },
  { i: "iii.", title: "Camera Tests", body: "On-set LUTs and grain profiles calibrated to the chosen sensor." },
  { i: "iv.", title: "Conform", body: "Editorial timelines are rebuilt from camera originals." },
  { i: "v.", title: "Primary", body: "Balance, density and skin-tone integrity established across the cut." },
  { i: "vi.", title: "Secondary", body: "Scene-by-scene shaping, qualifiers and shot-to-shot continuity." },
  { i: "vii.", title: "Review", body: "Reference theatre sessions with directors and DPs." },
  { i: "viii.", title: "Final Trim", body: "Last polish, beauty work and silent-room QC pass." },
  { i: "ix.", title: "Delivery", body: "Masters wrapped to broadcast, theatrical and streaming standards." },
];

const awards = [
  { award: "Cannes Lions", note: "Gold — Craft: Cinematography" },
  { award: "Berlin Commercial", note: "Shortlist — Visual Effects" },
  { award: "Kalasha Awards", note: "Best Feature Editing, 2023" },
  { award: "AICP Next", note: "Honoree — Colour 2024" },
];

function HomePage() {
  return (
    <div className="bg-canvas">
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative h-dvh min-h-[720px] flex flex-col justify-end px-6 lg:px-10 pb-16 lg:pb-20 overflow-hidden">
        <HeroCrossfade />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-canvas/60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-canvas/80 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-[1480px] reveal">
          <div className="mb-10 flex flex-col gap-4">
            <span className="eyebrow text-accent">Nairobi · Global Post House</span>
            <h1 className="font-serif font-medium text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] max-w-[18ch] kerning-tight text-balance">
              Crafting the <em className="font-normal italic">Final</em> Frame.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-end gap-8 border-t border-hairline pt-8">
            <p className="font-sans text-base sm:text-lg text-muted max-w-[44ch] leading-relaxed">
              Specialists in high-end colour grading and finishing for narrative
              feature films, commercial campaigns and music video artistry.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-accent text-canvas px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] hover:brightness-110 transition"
              >
                Book Consultation
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-3 border border-prime/20 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-prime/5 transition"
              >
                <span className="size-2 rounded-full bg-accent" />
                Watch Showreel
              </button>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted">
          <span>Scroll</span>
          <span className="block h-px w-10 bg-muted/60" />
        </div>
      </section>

      {/* ───────────────────── Trusted by ───────────────────── */}
      <section className="py-10 border-y border-hairline bg-surface/40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 opacity-50">
          <span className="eyebrow !text-muted">Trusted by</span>
          {trustedBy.map((c) => (
            <span key={c} className="font-serif text-xl text-prime/80">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ───────────────────── Featured work ───────────────────── */}
      <Section className="py-28 lg:py-40">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16 lg:mb-24">
          <div className="space-y-5 max-w-xl">
            <Eyebrow number="01">Selected Works</Eyebrow>
            <h2 className="font-serif text-5xl md:text-6xl font-medium kerning-tight text-balance">
              Visual narratives, defined by precision.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[11px] uppercase tracking-[0.25em] text-accent border-b border-accent/40 pb-1 self-start md:self-end hover:text-prime hover:border-prime transition-colors"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {featuredWork.map((p) => (
            <article key={p.title} className={["flex flex-col gap-6 group", p.span].join(" ")}>
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.discipline}`}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-start">
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium">{p.title}</h3>
                  <p className="font-sans text-sm text-muted mt-1">
                    Dir. {p.director} · DOP {p.dop}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-muted border border-hairline px-2 py-1">
                    {p.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                    {p.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ───────────────────── Studio / Overview ───────────────────── */}
      <section className="bg-surface py-28 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square overflow-hidden bg-canvas">
              <img
                src={controlSurface}
                alt="Close-up of an illuminated colour grading control surface"
                loading="lazy"
                width={1400}
                height={1400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <Eyebrow number="02">The Studio</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium kerning-tight leading-[1.05] text-balance">
              Institutional knowledge meets creative intuition.
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-prose">
              Founded by colourists trained in London and New York, Fulgent
              brings reference-grade finishing to East African productions and
              the global brands that film here. Our suites are calibrated to
              Dolby Vision, IMF and theatrical DCI standards — the same
              technical envelope used by the world's leading post houses.
            </p>
            <div className="grid grid-cols-2 gap-px bg-hairline mt-12">
              {[
                ["12+", "Years finishing"],
                ["240", "Projects mastered"],
                ["3", "Reference theatres"],
                ["IMF", "Netflix-ready"],
              ].map(([n, l]) => (
                <div key={l} className="bg-surface p-6">
                  <div className="font-serif text-4xl text-prime">{n}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted mt-2">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Services ───────────────────── */}
      <Section className="py-28 lg:py-40">
        <div className="mb-16 lg:mb-24 max-w-2xl space-y-5">
          <Eyebrow number="03">Capabilities</Eyebrow>
          <h2 className="font-serif text-5xl md:text-6xl font-medium kerning-tight text-balance">
            Technical precision meets creative vision.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {services.map((s) => (
            <div
              key={s.n}
              className="bg-canvas p-8 lg:p-10 flex flex-col gap-5 group hover:bg-surface transition-colors duration-500"
            >
              <span className="font-serif italic text-3xl text-accent">{s.n}.</span>
              <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.2em]">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-[36ch]">
                {s.body}
              </p>
              <Link
                to="/services"
                className="mt-2 text-[10px] uppercase tracking-[0.25em] text-prime/60 group-hover:text-accent transition-colors"
              >
                Detail →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────────────────── Before / After ───────────────────── */}
      <section className="bg-surface py-28 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-5 max-w-xl">
              <Eyebrow number="04">Before / After</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-medium kerning-tight">
                The difference is grain, density, intent.
              </h2>
            </div>
            <p className="text-sm text-muted max-w-sm">
              Raw camera footage on the left. Final theatrical grade on the
              right. Same frame — different language.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-hairline">
            <figure className="relative bg-surface">
              <img
                src={projectNeon}
                alt="Raw ungraded plate"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full aspect-[16/10] object-cover grayscale opacity-70"
              />
              <figcaption className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-prime/80 bg-canvas/60 backdrop-blur px-3 py-1.5">
                Plate
              </figcaption>
            </figure>
            <figure className="relative bg-surface">
              <img
                src={projectNeon}
                alt="Final cinematic colour grade"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full aspect-[16/10] object-cover"
              />
              <figcaption className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-canvas bg-accent px-3 py-1.5">
                Final Grade
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ───────────────────── Process timeline ───────────────────── */}
      <Section className="py-28 lg:py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-5 max-w-xl">
            <Eyebrow number="05">The Workflow</Eyebrow>
            <h2 className="font-serif text-5xl md:text-6xl font-medium kerning-tight">
              From brief to delivery — nine stages.
            </h2>
          </div>
          <Link
            to="/process"
            className="text-[11px] uppercase tracking-[0.25em] text-accent border-b border-accent/40 pb-1 self-start md:self-end hover:text-prime hover:border-prime transition-colors"
          >
            Full Process →
          </Link>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
          {processSteps.map((s) => (
            <li
              key={s.i}
              className="bg-canvas p-8 lg:p-10 flex flex-col gap-4 hover:bg-surface transition-colors duration-500"
            >
              <span className="font-serif italic text-3xl text-accent">{s.i}</span>
              <h3 className="font-serif text-2xl font-medium">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ───────────────────── Testimonial ───────────────────── */}
      <section className="border-y border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-12 lg:gap-24 items-start">
          <Eyebrow number="06">In Their Words</Eyebrow>
          <figure className="space-y-10">
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-balance text-prime">
              <span className="text-accent">“</span>Fulgent didn't grade our
              film, they finished it. The room felt like a theatre. The work
              looked like cinema.<span className="text-accent">”</span>
            </blockquote>
            <figcaption className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-muted">
              <span className="text-prime">Amara Okafor</span>
              <span className="hidden sm:inline">·</span>
              <span>Director, The Verdant Path</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ───────────────────── Awards ───────────────────── */}
      <Section className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline">
          {awards.map((a) => (
            <div key={a.award} className="bg-canvas p-8 flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                {a.award}
              </span>
              <span className="font-serif text-lg md:text-xl text-prime/90">
                {a.note}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────────────────── CTA banner ───────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={ctaCamera}
          alt="Cinema camera silhouette on a film set"
          loading="lazy"
          width={1920}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/40" />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 py-32 lg:py-44 flex flex-col items-center text-center gap-10">
          <Eyebrow number="07">Begin a Project</Eyebrow>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium kerning-tight max-w-[20ch] text-balance">
            Let's craft your <em className="italic font-normal">final frame.</em>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl">
            Whether you're prepping a feature, finishing a campaign or
            mastering for streaming — we'd like to hear about it.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-canvas px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] hover:brightness-110 transition"
            >
              Book Consultation
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 border border-prime/20 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] hover:bg-prime/5 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
