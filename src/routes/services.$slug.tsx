import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { brand } from "@/config/brand";

const services: Record<string, { name: string; letter: string; tagline: string; bullets: string[] }> = {
  google: {
    name: "Google Reviews",
    letter: "G",
    tagline: "The world's most trusted Google review removal service.",
    bullets: ["Fake reviews from competitors", "Defamatory or false statements", "Policy-violating content", "Coordinated review attacks", "Reviews from non-customers"],
  },
  facebook: {
    name: "Facebook Reviews",
    letter: "f",
    tagline: "Dispute and remove damaging recommendations from your Facebook Business Page.",
    bullets: ["Fake recommendations", "Off-topic or spam reviews", "Harassment and hate content", "Competitor sabotage"],
  },
  trustpilot: {
    name: "Trustpilot Reviews",
    letter: "T",
    tagline: "Challenge fraudulent or policy-violating Trustpilot reviews professionally.",
    bullets: ["Reviews with no genuine experience", "Fake account postings", "Defamatory content", "Misleading claims"],
  },
  reddit: {
    name: "Reddit Reviews",
    letter: "R",
    tagline: "Strategically address damaging Reddit posts and threads affecting your brand.",
    bullets: ["Coordinated brigades", "Personal attacks", "Doxxing or PII", "False claims about your business"],
  },
  tripadvisor: {
    name: "Tripadvisor Reviews",
    letter: "TA",
    tagline: "Remove fake and competitive reviews harming your hospitality or tourism business.",
    bullets: ["Fake guest reviews", "Competitor reviews", "Off-topic complaints", "Policy-violating content"],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services[params.slug];
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} Removal — ${brand.name}` : brand.name },
      { name: "description", content: loaderData?.tagline ?? brand.description },
    ],
  }),
  component: ServicePage,
  notFoundComponent: () => (
    <div className="px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/" className="mt-4 inline-block text-gold">Go home</Link>
    </div>
  ),
});

function ServicePage() {
  const data = Route.useLoaderData();
  return (
    <div>
      <section className="px-4 md:px-6 pt-16 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-gold/15 text-gold flex items-center justify-center font-bold text-2xl">{data.letter}</div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold">{data.name} Removal</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{data.tagline}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/contact" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">Free Assessment</Link>
            <Link to="/" className="inline-flex rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold">Back to Home</Link>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-6 py-16 bg-surface/40 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">What we remove</h2>
          <ul className="mt-6 space-y-3">
            {data.bullets.map((b) => (
              <li key={b} className="flex gap-3 items-start text-foreground/90">
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto rounded-3xl border border-gold/30 bg-surface p-10 text-center">
          <ShieldCheck className="h-10 w-10 text-gold mx-auto" />
          <h2 className="mt-4 text-2xl font-bold">Pay after removal — always</h2>
          <p className="mt-3 text-muted-foreground">You only pay once your review is permanently gone. Get your free assessment today.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">
            Get Free Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
