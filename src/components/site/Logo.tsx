import { Link } from "@tanstack/react-router";
import { brand } from "@/config/brand";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={brand.logoSrc}
        alt={`${brand.name} logo`}
        className="h-10 w-10 shrink-0"
      />
      {!compact && (
        <div className="leading-tight">
          <div className="font-display font-bold text-lg tracking-tight text-foreground">
            {brand.name}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {brand.tagline}
          </div>
        </div>
      )}
    </Link>
  );
}
