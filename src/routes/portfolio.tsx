import { createFileRoute } from "@tanstack/react-router";
import projectVerdant from "@/assets/project-verdant.jpg";
import projectNeon from "@/assets/project-neon.jpg";
import heroSuite from "@/assets/hero-suite.jpg";
import ctaCamera from "@/assets/cta-camera.jpg";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Fulgent Post House" },
      {
        name: "description",
        content:
          "Selected feature, commercial and music video projects coloured and finished at Fulgent Post House.",
      },
      { property: "og:title", content: "Portfolio — Fulgent Post House" },
      {
        property: "og:description",
        content: "Cinematic finishing for feature films, commercials and music videos.",
      },
      { property: "og:image", content: projectVerdant },
    ],
  }),
  component: PortfolioPage,
});

type Project = {
  title: string;
  category: string;
  year: string;
  director: string;
  dop: string;
  agency?: string;
  colourist: string;
  image: string;
  tags: string[];
  // editorial layout hints — desktop grid position/size
  col: string; // grid column span/start
  aspect: string;
  offset?: string; // margin-top for staggering
};

const projects: Project[] = [
  {
    title: "The Verdant Path",
    category: "Feature Film",
    year: "2024",
    director: "Amara Okafor",
    dop: "David Mutua",
    colourist: "K. Njoroge",
    image: projectVerdant,
    tags: ["Look Dev", "Dolby Vision", "DCP"],
    col: "lg:col-span-7",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Nocturnal Pulse",
    category: "Commercial",
    year: "2024",
    director: "Kenji Tanaka",
    dop: "Elena Ríos",
    agency: "VML Nairobi",
    colourist: "K. Njoroge",
    image: projectNeon,
    tags: ["Grade", "Online", "Broadcast"],
    col: "lg:col-span-5",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-40",
  },
  {
    title: "Quiet Theatre",
    category: "Documentary",
    year: "2023",
    director: "Wanjiku Mbugua",
    dop: "Self-shot",
    colourist: "M. Adeyemi",
    image: heroSuite,
    tags: ["Grade", "Restoration"],
    col: "lg:col-span-6 lg:col-start-2",
    aspect: "aspect-[16/10]",
    offset: "lg:mt-24",
  },
  {
    title: "Silver Hour",
    category: "Short Film",
    year: "2023",
    director: "Tomás Reyes",
    dop: "Lena Ortega",
    colourist: "K. Njoroge",
    image: ctaCamera,
    tags: ["Look Dev", "Grade"],
    col: "lg:col-span-4 lg:col-start-9",
    aspect: "aspect-[4/5]",
    offset: "lg:-mt-32",
  },
  {
    title: "The Long Coast",
    category: "Music Video",
    year: "2024",
    director: "Zawadi Mwangi",
    dop: "Ibrahim Salim",
    agency: "Sony Music EA",
    colourist: "M. Adeyemi",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80&auto=format&fit=crop",
    tags: ["Grade", "VFX Finishing"],
    col: "lg:col-span-8 lg:col-start-3",
    aspect: "aspect-[21/9]",
    offset: "lg:mt-32",
  },
  {
    title: "Halogen",
    category: "Commercial",
    year: "2024",
    director: "Ravi Menon",
    dop: "Chiara Bellini",
    agency: "Ogilvy",
    colourist: "K. Njoroge",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600&q=80&auto=format&fit=crop",
    tags: ["Grade", "HDR"],
    col: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    offset: "lg:mt-40",
  },
  {
    title: "Sable Hours",
    category: "Feature Film",
    year: "2022",
    director: "Nia Kariuki",
    dop: "Owen Kimani",
    colourist: "M. Adeyemi",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80&auto=format&fit=crop",
    tags: ["Look Dev", "Grade", "IMF"],
    col: "lg:col-span-6 lg:col-start-7",
    aspect: "aspect-[16/10]",
    offset: "lg:-mt-24",
  },
];

function PortfolioPage() {
  return (
    <div className="bg-canvas pt-32">
      <Section className="pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <Eyebrow number="01">Selected Works</Eyebrow>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl font-medium kerning-tight max-w-[18ch] text-balance">
              Frames that earned a second look.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end space-y-2 text-[10px] uppercase tracking-[0.3em] text-muted">
            <div className="flex justify-between gap-8"><span>Index</span><span className="text-prime">{projects.length.toString().padStart(2, "0")}</span></div>
            <div className="flex justify-between gap-8"><span>Since</span><span className="text-prime">MMXII</span></div>
            <div className="flex justify-between gap-8"><span>Latest</span><span className="text-accent">2024</span></div>
          </div>
        </div>
      </Section>

      <Section className="pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-32">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={["group", p.col, p.offset ?? ""].join(" ")}
            >
              <ProjectCard project={p} index={i + 1} />
            </article>
          ))}
        </div>
      </Section>

      {/* end note */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-24 flex flex-col md:flex-row justify-between gap-8">
          <p className="font-serif text-2xl md:text-3xl max-w-xl text-balance">
            An excerpt. Full case studies available on request under NDA.
          </p>
          <a
            href="/contact"
            className="self-start md:self-center text-[11px] uppercase tracking-[0.25em] text-accent border-b border-accent/40 pb-1 hover:text-prime hover:border-prime transition-colors"
          >
            Request Full Reel →
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const {
    title,
    image,
    aspect,
    category,
    year,
    director,
    dop,
    agency,
    colourist,
    tags,
  } = project;

  return (
    <div>
      <div className={["relative overflow-hidden bg-surface", aspect].join(" ")}>
        {/* number */}
        <span className="absolute z-20 top-4 left-4 font-serif italic text-sm text-prime/60 mix-blend-difference">
          — {index.toString().padStart(2, "0")}
        </span>
        <span className="absolute z-20 top-4 right-4 text-[10px] uppercase tracking-[0.25em] text-prime/70 mix-blend-difference">
          {category}
        </span>

        <img
          src={image}
          alt={`${title} — ${category}`}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[0.15] saturate-[0.9] transition-all duration-[1400ms] ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:saturate-125"
        />

        {/* hover vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/95 via-canvas/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

        {/* hover-in tag row */}
        <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[9px] uppercase tracking-[0.25em] text-prime bg-canvas/60 backdrop-blur-md border border-prime/15 px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {/* soft shadow on hover */}
        <div className="pointer-events-none absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ boxShadow: "0 60px 120px -40px rgba(183,140,69,0.35)" }} />
      </div>

      {/* metadata block — film credits style */}
      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] gap-6">
        <div className="min-w-0 space-y-3">
          <h2 className="font-serif text-3xl md:text-4xl font-medium kerning-tight">
            {title}
          </h2>
          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1.5 text-[11px] font-sans text-muted">
            <dt className="uppercase tracking-[0.2em] text-prime/40">Director</dt>
            <dd className="text-prime/85">{director}</dd>
            <dt className="uppercase tracking-[0.2em] text-prime/40">DOP</dt>
            <dd className="text-prime/85">{dop}</dd>
            {agency && (
              <>
                <dt className="uppercase tracking-[0.2em] text-prime/40">Agency</dt>
                <dd className="text-prime/85">{agency}</dd>
              </>
            )}
            <dt className="uppercase tracking-[0.2em] text-prime/40">Colourist</dt>
            <dd className="text-prime/85">{colourist}</dd>
          </dl>
        </div>
        <div className="text-right shrink-0">
          <span className="block font-serif italic text-3xl text-accent">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
}
