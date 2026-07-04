import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Portal — Fulgent Post House" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <AppShell role="client">
      <Outlet />
    </AppShell>
  ),
});
