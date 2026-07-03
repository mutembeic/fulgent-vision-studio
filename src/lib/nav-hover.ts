// Lightweight pub/sub so <Nav> can broadcast a hovered cinematic
// backdrop image to a fixed layer rendered in the root shell.

type Listener = (url: string | null) => void;
const listeners = new Set<Listener>();

export function setNavHoverImage(url: string | null) {
  listeners.forEach((l) => l(url));
}

export function subscribeNavHover(l: Listener) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

export const navHoverImages: Record<string, string> = {
  "/about":
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1920&q=80&auto=format&fit=crop",
  "/services":
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&q=80&auto=format&fit=crop",
  "/portfolio":
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80&auto=format&fit=crop",
  "/process":
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80&auto=format&fit=crop",
  "/contact":
    "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=1920&q=80&auto=format&fit=crop",
};
