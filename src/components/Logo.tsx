import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-500 font-display text-lg font-bold text-ink-950 shadow-card transition group-hover:bg-brand-400">
        RG
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold uppercase tracking-wide ${
            light ? "text-white" : "text-ink-900 dark:text-white"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? "text-white/70" : "text-ink-500 dark:text-ink-400"
          }`}
        >
          General Contractor
        </span>
      </span>
    </Link>
  );
}
