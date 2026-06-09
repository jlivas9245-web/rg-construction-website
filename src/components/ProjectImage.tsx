import { HardHat } from "lucide-react";

/**
 * Self-contained, premium-looking image placeholder built from a gradient
 * and subtle grid texture. Swap this out for next/image with real project
 * photos when available — the rest of the layout stays the same.
 */
export function ProjectImage({
  gradient,
  label,
  className = "",
}: {
  gradient: [string, string];
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      role="img"
      aria-label={label ? `${label} project photo` : "Project photo"}
    >
      <div className="absolute inset-0 bg-hero-grid bg-[size:28px_28px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-lg bg-white/15 text-white backdrop-blur">
        <HardHat className="h-5 w-5" />
      </div>
    </div>
  );
}
