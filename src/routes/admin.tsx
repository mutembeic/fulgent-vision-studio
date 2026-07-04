import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Studio Ops — Fulgent Post House" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <AppShell role="admin">
      <Outlet />
    </AppShell>
  ),
});
