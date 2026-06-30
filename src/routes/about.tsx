import { createFileRoute } from "@tanstack/react-router";
import controlSurface from "@/assets/control-surface.jpg";
import ctaCamera from "@/assets/cta-camera.jpg";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fulgent Post House" },
      {
        name: "description",
        content:
          "Founded by colourists trained in London and New York, Fulgent Post House brings reference-grade finishing to East African productions and global brands.",
      },
      { property: "og:title", content: "About — Fulgent Post House" },
      {
        property: "og:description",
        content: "Our studio, philosophy, and the people behind the grade.",
      },
      { property: "og:image", content: controlSurface },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-canvas pt-32">
      <Section className="pb-28 lg:pb-32">
        <Eyebrow number="01">About the Studio</Eyebrow>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl font-medium kerning-tight max-w-[18ch] text-balance">
          A finishing house for filmmakers, by filmmakers.
        </h1>
        <p className="mt-10 text-muted text-lg max-w-2xl leading-relaxed">
          Fulgent was founded on a simple proposition: that the final frame
          deserves the same care as the first. Our studios in Nairobi house
          three reference theatres, calibrated daily to Dolby Vision and DCI
          standards — built for the colourists, producers and directors who
          care about the difference.
        </p>
      </Section>

      <section className="bg-surface py-28 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <img
            src={controlSurface}
            alt="Illuminated grading control surface in low light"
            loading="lazy"
            width={1400}
            height={1400}
            className="aspect-square object-cover w-full"
          />
          <div className="space-y-8">
            <Eyebrow number="02">Philosophy</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-medium kerning-tight">
              Restraint, precision, intent.
            </h2>
            <p className="text-muted leading-relaxed">
              We believe a grade should disappear into the story. Our work is
              quiet, technical and emotional — designed to support the
              director's intent rather than announce itself.
            </p>
            <dl className="grid grid-cols-2 gap-px bg-hairline mt-10">
              {[
                ["Founded", "2018"],
                ["Suites", "3 reference theatres"],
                ["Standards", "Dolby Vision · IMF · DCI"],
                ["Location", "Nairobi, Kenya"],
              ].map(([k, v]) => (
                <div key={k} className="bg-surface p-6">
                  <dt className="eyebrow !text-muted">{k}</dt>
                  <dd className="mt-3 font-serif text-xl text-prime">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Section className="py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-12 lg:gap-24">
          <Eyebrow number="03">Founder</Eyebrow>
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-6xl font-medium kerning-tight max-w-[18ch]">
              Daniel Wanjau, Senior Colourist.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              Daniel trained at Company3 London before returning to Nairobi to
              found Fulgent. His credits include feature work for A24, Netflix
              originals and commercial campaigns for global brands. He grades
              everything in-house, every frame, in the same room.
            </p>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-hairline">
        <img
          src={ctaCamera}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-canvas/70" />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 py-32 text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl font-medium kerning-tight">
            Visit the studio.
          </h2>
          <p className="text-muted max-w-md mx-auto">
            By appointment only. We host directors, producers and DPs for
            colour sessions, screenings and tests.
          </p>
        </div>
      </section>
    </div>
  );
}
