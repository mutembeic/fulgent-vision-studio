// Frontend-only demo auth. Two roles: client / admin.
export type Role = "client" | "admin";

const KEY = "fulgent_demo_session";
const CREDS = { email: "testemail@gmail.com", password: "password" };

export type Session = { email: string; role: Role; name: string } | null;

export function signIn(email: string, password: string, role: Role): Session {
  if (email.trim().toLowerCase() !== CREDS.email || password !== CREDS.password) {
    return null;
  }
  const session: Session = {
    email: CREDS.email,
    role,
    name: role === "admin" ? "K. Njoroge" : "Amara Okafor",
  };
  try { sessionStorage.setItem(KEY, JSON.stringify(session)); } catch {}
  return session;
}

export function getSession(): Session {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    // Legacy value support
    if (raw === "1") return { email: CREDS.email, role: "client", name: "Amara Okafor" };
    return JSON.parse(raw);
  } catch { return null; }
}

export function signOut() {
  try { sessionStorage.removeItem(KEY); } catch {}
}

export const DEMO_CREDS = CREDS;
