import Link from "next/link";
import { site } from "@/lib/site";

/**
 * RG Construction primary brand mark, rendered as inline SVG so it stays
 * razor-sharp at any size, scales responsively and adapts to light/dark.
 *
 * The "RG" monogram uses a fixed blue gradient that reads well on both light
 * and dark backgrounds; the "CONSTRUCTION" wordmark + flanking rules use
 * `currentColor` so they invert with the theme (or the `light` prop on dark
 * surfaces such as the footer).
 */
export function LogoMark({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  // Unique gradient id per variant to avoid collisions when multiple
  // instances render on the same page (header + footer).
  const gradId = light ? "rg-grad-light" : "rg-grad";

  return (
    <svg
      viewBox="0 0 260 178"
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{site.name}</title>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b94f6" />
          <stop offset="55%" stopColor="#2f63e0" />
          <stop offset="100%" stopColor="#1a3fb0" />
        </linearGradient>
      </defs>

      {/* RG monogram */}
      <text
        x="130"
        y="108"
        textAnchor="middle"
        fontFamily="var(--font-oswald), 'Arial Narrow', Impact, sans-serif"
        fontWeight="700"
        fontSize="138"
        letterSpacing="-4"
        fill={`url(#${gradId})`}
      >
        RG
      </text>

      {/* Flanking rules */}
      <g
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        className={light ? "text-white" : "text-[#1e3a8a] dark:text-white"}
      >
        <line x1="6" y1="150" x2="30" y2="150" />
        <line x1="230" y1="150" x2="254" y2="150" />
      </g>

      {/* CONSTRUCTION wordmark */}
      <text
        x="130"
        y="160"
        textAnchor="middle"
        fontFamily="var(--font-oswald), 'Arial Narrow', Impact, sans-serif"
        fontWeight="600"
        fontSize="27"
        letterSpacing="5"
        textLength="196"
        lengthAdjust="spacingAndGlyphs"
        className={light ? "fill-white" : "fill-[#1e3a8a] dark:fill-white"}
      >
        CONSTRUCTION
      </text>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label={`${site.name} home`}
    >
      <LogoMark
        light={light}
        className="h-12 w-auto transition-transform duration-200 group-hover:scale-[1.03] md:h-14"
      />
    </Link>
  );
}
