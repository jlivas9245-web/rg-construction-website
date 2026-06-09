import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-500">
      <div className="absolute inset-0 bg-hero-grid bg-[size:36px_36px] opacity-20" />
      <div className="container-px relative flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-3xl font-display text-3xl font-bold uppercase tracking-tight text-ink-950 text-balance sm:text-4xl">
          Ready to Start Your Project? Get a Free Estimate Today.
        </h2>
        <p className="max-w-2xl text-ink-900/80">
          Tell us about your residential or commercial project and we'll provide
          a transparent, no-obligation quote. Serving Longview, Tyler, Kilgore,
          Marshall and surrounding East Texas.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="btn inline-flex bg-ink-950 text-white hover:-translate-y-0.5 hover:bg-ink-900"
          >
            Request a Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${site.phoneHref}`}
            className="btn inline-flex border-2 border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
