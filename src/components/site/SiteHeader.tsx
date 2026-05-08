import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, Star } from "lucide-react";
import { Logo } from "./Logo";
import { brand } from "@/config/brand";

const nav = [
  { to: "/services/google", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs text-muted-foreground border-b border-border/60">
        <div className="flex items-center gap-5">
          <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold transition">
            <Phone className="h-3.5 w-3.5" /> {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-gold transition">
            <Mail className="h-3.5 w-3.5" /> {brand.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          Trusted by 2,000+ businesses worldwide
        </div>
      </div>

      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 hover:text-gold transition"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground hover:opacity-90 transition shadow-[0_8px_30px_-12px_var(--gold)]"
          >
            Free Consultation
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border px-4 py-4 flex flex-col gap-3 bg-surface">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground/90 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
