import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, #1f41b0 0%, #1b336f 55%, #122047 100%)",
      }}
    >
      <div className="absolute inset-0 bg-hero-grid bg-[size:36px_36px] opacity-[0.18]" />
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="container-px relative flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-3xl font-display text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl">
          Ready to Start Your Project? Get a Free Estimate Today.
        </h2>
        <p className="max-w-2xl text-brand-100">
          Tell us about your residential or commercial project and we'll provide
          a transparent, no-obligation quote. Serving Longview, Tyler, Kilgore,
          Marshall and surrounding East Texas.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="btn inline-flex bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50"
          >
            Request a Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${site.phoneHref}`}
            className="btn inline-flex border-2 border-white/70 text-white hover:bg-white hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
