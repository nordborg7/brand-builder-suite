import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { brand } from "@/config/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: `Contact — ${brand.name}` }, { name: "description", content: `Free consultation with ${brand.name}.` }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Free consultation</h1>
          <p className="mt-4 text-muted-foreground">Tell us about your case. We respond within 24 hours with a clear assessment — no commitment.</p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-gold">
              <Phone className="h-5 w-5 text-gold" /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-gold">
              <Mail className="h-5 w-5 text-gold" /> {brand.email}
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-surface p-6 space-y-4"
        >
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
              <h2 className="mt-4 text-xl font-bold">Request received</h2>
              <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                <input required className="mt-1 w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Business</label>
                <input className="mt-1 w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us about the reviews</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <button type="submit" className="w-full rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground">Request Free Assessment</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
