import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { brand } from "@/config/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            {brand.description}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services/google" className="hover:text-gold">Google Reviews</Link></li>
            <li><Link to="/services/facebook" className="hover:text-gold">Facebook Reviews</Link></li>
            <li><Link to="/services/trustpilot" className="hover:text-gold">Trustpilot Reviews</Link></li>
            <li><Link to="/services/reddit" className="hover:text-gold">Reddit Reviews</Link></li>
            <li><Link to="/services/tripadvisor" className="hover:text-gold">Tripadvisor Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/why-us" className="hover:text-gold">Why Us</Link></li>
            <li><Link to="/case-studies" className="hover:text-gold">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-gold">{brand.phone}</a></li>
            <li><a href={`mailto:${brand.email}`} className="hover:text-gold">{brand.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
