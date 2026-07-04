import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Panel } from "@/components/app/AppShell";

export const Route = createFileRoute("/dashboard/support")({
  component: SupportPage,
});

const faqs = [
  { q: "How do I invite my producer to review a cut?", a: "Open any project workspace, click Share, and add the producer's email. They'll receive a passcode-protected review link." },
  { q: "What formats do you deliver for Netflix?", a: "Netflix IMF (JPEG 2000, AS-02) with matching audio and subtitle sidecars. We also QC via Baton before dispatch." },
  { q: "Can I book time in the reference theatre?", a: "Yes — reach out via Messages or your producer. Standard slots are 3-hour blocks; full-day bookings are available with notice." },
  { q: "Where can I find my invoices?", a: "In the Invoices tab. Every statement is downloadable as a PDF and marked with its payment status." },
];

function SupportPage() {
  return (
    <div className="px-6 lg:px-12 py-10 lg:py-14 max-w-[1480px] mx-auto space-y-10">
      <PageHeader eyebrow="Client Portal · Support" title="We're here." lead="A concierge line to the studio, day or night." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Contact Concierge">
          <ul className="space-y-5 text-sm">
            {[
              ["Studio Line", "+254 20 000 0000"],
              ["Producer", "R. Achieng · r.achieng@fulgentpost.co.ke"],
              ["Delivery Ops", "delivery@fulgentpost.co.ke"],
              ["Emergency (24h)", "+254 700 000 000"],
            ].map(([l, v]) => (
              <li key={l} className="border-b border-hairline pb-3 last:border-0">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted">{l}</div>
                <div className="text-prime mt-1">{v}</div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Send a Note">
          <form className="space-y-5">
            <div className="border-b border-hairline pb-2 focus-within:border-accent">
              <label className="eyebrow !text-muted block mb-2">Subject</label>
              <input className="w-full bg-transparent text-prime outline-none" />
            </div>
            <div className="border-b border-hairline pb-2 focus-within:border-accent">
              <label className="eyebrow !text-muted block mb-2">Message</label>
              <textarea rows={5} className="w-full bg-transparent text-prime outline-none resize-none" />
            </div>
            <button className="w-full bg-accent text-canvas py-3 text-[10px] uppercase tracking-[0.3em] hover:brightness-110 transition">Send</button>
          </form>
        </Panel>
      </div>

      <Panel title="Frequently Asked">
        <ul className="divide-y divide-hairline">
          {faqs.map((f) => (
            <li key={f.q} className="py-5">
              <div className="font-serif text-xl mb-2">{f.q}</div>
              <p className="text-sm text-muted max-w-3xl">{f.a}</p>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
