import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, EyeOff, Zap, DollarSign, Award } from "lucide-react";
import { brand } from "@/config/brand";

export const Route = createFileRoute("/why-us")({
  head: () => ({ meta: [{ title: `Why Choose ${brand.name}` }, { name: "description", content: `What makes ${brand.name} different.` }] }),
  component: WhyUs,
});

function WhyUs() {
  const items = [
    { icon: Scale, t: "Legal Expertise", d: "Former platform policy specialists and media law attorneys handle every case." },
    { icon: EyeOff, t: "100% Confidential", d: "Your business identity is never disclosed during the removal process." },
    { icon: Zap, t: "Fast Execution", d: "Most removals are completed within 5 days of submission." },
    { icon: DollarSign, t: "Pay After Removal", d: "You're never charged before your review is permanently removed." },
    { icon: Award, t: "Proven Track Record", d: "25,000+ reviews removed and a 100% success rate on Google removals." },
  ];
  return (
    <div className="px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Why choose {brand.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">We focus exclusively on review removal. That focus is what makes us the most effective team in the industry.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-surface p-6">
              <div className="h-12 w-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center"><i.icon className="h-6 w-6" /></div>
              <h3 className="mt-4 font-bold text-lg">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-12 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">Talk to our team</Link>
      </div>
    </div>
  );
}
