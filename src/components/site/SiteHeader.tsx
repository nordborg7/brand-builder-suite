import { useState } from "react";
import { Menu, X, Phone, Mail, Star } from "lucide-react";
import { Logo } from "./Logo";
import { brand } from "@/config/brand";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
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
        <a href="#top"><Logo /></a>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-gold transition">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground hover:opacity-90 transition shadow-[0_8px_30px_-12px_var(--gold)]"
          >
            Free Consultation
          </a>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border px-4 py-4 flex flex-col gap-3 bg-surface">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/90 hover:text-gold">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground">
            Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
