import { useEffect, useState } from "react";
import { subscribeNavHover, navHoverImages } from "@/lib/nav-hover";

// A fixed backdrop that softly crossfades between cinematic images
// as the user hovers navigation items. Preloads all images so the
// transition is instant.
export function NavHoverBackdrop() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    // Preload
    Object.values(navHoverImages).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    return subscribeNavHover((next) => setUrl(next));
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {Object.entries(navHoverImages).map(([key, src]) => (
        <div
          key={key}
          style={{ backgroundImage: `url(${src})` }}
          className={[
            "absolute inset-0 bg-cover bg-center transition-opacity ease-out",
            "duration-[1100ms]",
            url === src ? "opacity-[0.22]" : "opacity-0",
          ].join(" ")}
        />
      ))}
      {/* vignette so text stays legible */}
      <div
        className={[
          "absolute inset-0 transition-opacity duration-[1100ms]",
          url ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.92) 75%)",
        }}
      />
    </div>
  );
}
