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

const projects = [
  {
    title: "The Verdant Path",
    discipline: "Feature Film",
    tag: "Look Dev · Grade",
    year: "2024",
    director: "Amara Okafor",
    dop: "David Mutua",
    image: projectVerdant,
    aspect: "aspect-[4/5]",
  },
  {
    title: "Nocturnal Pulse",
    discipline: "Commercial",
    tag: "Colour Grade",
    year: "2024",
    director: "Kenji Tanaka",
    dop: "Agency — VML",
    image: projectNeon,
    aspect: "aspect-[16/10]",
  },
  {
    title: "Quiet Theatre",
    discipline: "Documentary",
    tag: "Grade · Master",
    year: "2023",
    director: "Wanjiku Mbugua",
    dop: "Self-shot",
    image: heroSuite,
    aspect: "aspect-[16/10]",
  },
  {
    title: "Silver Hour",
    discipline: "Short Film",
    tag: "Look Dev",
    year: "2023",
    director: "Tomás Reyes",
    dop: "Lena Ortega",
    image: ctaCamera,
    aspect: "aspect-[4/5]",
  },
];

function PortfolioPage() {
  return (
    <div className="bg-canvas pt-32">
      <Section className="pb-20">
        <Eyebrow number="01">Selected Works</Eyebrow>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl font-medium kerning-tight max-w-[18ch] text-balance">
          Frames that earned a second look.
        </h1>
      </Section>

      <Section className="pb-28 lg:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={["group", i % 2 === 1 ? "md:mt-32" : ""].join(" ")}
            >
              <div className={["overflow-hidden bg-surface", p.aspect].join(" ")}>
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.discipline}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-start">
                <div className="min-w-0">
                  <h2 className="font-serif text-3xl font-medium">{p.title}</h2>
                  <p className="text-sm text-muted mt-1">
                    {p.discipline} · Dir. {p.director} · DOP {p.dop}
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
    </div>
  );
}
