import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #11151b 0%, #1c222a 45%, #37404b 100%)",
        }}
      />
      <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-[0.15]" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
            <ShieldCheck className="h-4 w-4" />
            Licensed &amp; Insured · East Texas
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Quality Construction You Can{" "}
            <span className="text-brand-400">Build On</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
            From custom kitchens and bathroom remodels to commercial build-outs
            and tenant improvements — {site.name} delivers expert craftsmanship
            for homeowners and businesses across Longview, Tyler, Kilgore,
            Marshall and surrounding areas.
          </p>

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

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-ink-300">5.0 average rating</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <p className="text-sm text-ink-300">
              <span className="font-bold text-white">750+</span> projects
              completed across East Texas
            </p>
          </div>
        </div>

        {/* Stat / trust panel */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="grid grid-cols-2 gap-4">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="font-display text-3xl font-bold text-brand-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-300">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="font-display text-lg font-semibold uppercase tracking-wide text-white">
              Residential &amp; Commercial
            </p>
            <p className="mt-1 text-sm text-ink-200">
              One trusted general contractor for every project — big or small.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
