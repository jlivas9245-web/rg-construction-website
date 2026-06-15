import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Primary brand logo. Uses the official RG Construction artwork
 * (transparent PNG). On dark surfaces — dark mode header and the footer
 * (`light` prop) — the mark is rendered as a crisp white silhouette so it
 * stays legible against deep backgrounds.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label={`${site.name} home`}
    >
      <Image
        src="/logo.png"
        alt={`${site.name} logo`}
        width={1113}
        height={430}
        priority
        sizes="(max-width: 768px) 160px, 200px"
        className={`h-11 w-auto transition-transform duration-200 group-hover:scale-[1.03] md:h-12 ${
          light ? "brightness-0 invert" : "dark:brightness-0 dark:invert"
        }`}
      />
    </Link>
  );
}
