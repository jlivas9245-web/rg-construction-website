import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQ } from "@/components/FAQ";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Construction & Remodeling Services in East Texas",
  description:
    "Explore RG Construction's full range of services — residential & commercial construction, kitchen & bathroom remodels, flooring, tile, drywall, painting, framing, tenant improvements & build-outs in Longview & Tyler, TX.",
  path: "/services",
});

const process = [
  { step: "01", title: "Consultation", text: "We discuss your goals, scope and budget — in person or over the phone." },
  { step: "02", title: "Free Estimate", text: "You receive a clear, itemized bid with no hidden costs or surprises." },
  { step: "03", title: "Build", text: "Our skilled crew executes the work on schedule with regular updates." },
  { step: "04", title: "Final Walk-Through", text: "We review every detail together to ensure you're completely satisfied." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Full-Service General Contracting in East Texas"
        description="One trusted contractor for residential and commercial construction, remodeling, finishes and property maintenance — from small repairs to ground-up builds."
        crumbs={[{ label: "Services" }]}
      />

      {/* Quick-jump service list */}
      <section className="border-b border-ink-200 bg-ink-50 py-8 dark:border-ink-800 dark:bg-ink-900/40">
        <div className="container-px">
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Process */}
      <section className="bg-ink-950 py-20 text-white">
        <div className="container-px">
          <span className="eyebrow text-brand-300">How We Work</span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            A Simple, Transparent Process
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <span className="font-display text-4xl font-bold text-brand-400">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-300">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-20">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div className="card p-8">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink-900 dark:text-white">
              For Homeowners
            </h3>
            <p className="mt-3 text-ink-600 dark:text-ink-300">
              Remodels, additions and repairs that make your home more
              beautiful, functional and valuable.
            </p>
            <ul className="mt-5 space-y-2.5">
              {["Kitchen & bathroom remodels", "Flooring & tile", "Interior finishes & carpentry", "Whole-home renovations"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/residential" className="btn-secondary mt-6">
              Residential Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="card p-8">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink-900 dark:text-white">
              For Businesses & Property Managers
            </h3>
            <p className="mt-3 text-ink-600 dark:text-ink-300">
              Build-outs, tenant improvements and maintenance that keep your
              properties productive and profitable.
            </p>
            <ul className="mt-5 space-y-2.5">
              {["Tenant improvements & build-outs", "Office & retail renovations", "Apartment & multi-family maintenance", "Property management support"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/commercial" className="btn-secondary mt-6">
              Commercial Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <ContactCTA />
    </>
  );
}
