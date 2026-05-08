import { createFileRoute, Link } from "@tanstack/react-router";
import { brand } from "@/config/brand";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: `About — ${brand.name}` }, { name: "description", content: `About ${brand.name}.` }] }),
  component: About,
});

function About() {
  return (
    <div className="px-4 md:px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">About {brand.name}</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {brand.name} is a specialist team of reputation experts, former platform policy specialists, and media law attorneys.
          We focus exclusively on one thing: removing damaging reviews from the platforms that matter to your business.
        </p>
        <p className="mt-4 text-muted-foreground">
          Over 8+ years we've removed more than 25,000 reviews for businesses across hospitality, healthcare, retail, and professional services — with a 100% success rate on Google.
        </p>
        <p className="mt-4 text-muted-foreground">
          Our process is confidential, legally compliant, and outcome-based — you only pay after the review is gone.
        </p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground">Get in touch</Link>
      </div>
    </div>
  );
}
