import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  cta = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  cta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #0c1019 0%, #171d2b 55%, #2c3548 100%)",
        }}
      />
      <div className="absolute inset-0 bg-hero-grid bg-[size:38px_38px] opacity-[0.12]" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-px relative py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-400">
            <li>
              <Link href="/" className="hover:text-brand-300">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-200">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && <span className="eyebrow text-brand-300">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">
            {description}
          </p>
        )}

        {cta && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-ghost-light">
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
