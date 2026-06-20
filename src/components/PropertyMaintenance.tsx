import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, RefreshCw } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  "Fast unit turns between tenants",
  "Recurring & on-call maintenance",
  "Make-ready paint, flooring & repairs",
  "Common-area & exterior upkeep",
  "Multi-family & apartment communities",
  "Single point of contact for your portfolio",
];

export function PropertyMaintenance() {
  return (
    <section id="property-maintenance" className="scroll-mt-24 py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="For Property Managers & Owners"
          title="Apartment & Commercial Maintenance"
          description="A dependable maintenance partner for apartment complexes, rental portfolios and commercial properties across East Texas — so your units stay rent-ready and your tenants stay happy."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-sm font-medium text-ink-700 dark:text-ink-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-8 dark:border-ink-800 dark:bg-ink-900/60">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-600 text-white">
                <RefreshCw className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  Recurring Maintenance Agreements
                </h3>
                <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">
                  Set up a service agreement tailored to your properties and let
                  us handle the upkeep so you don't have to chase contractors.
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4 border-t border-ink-200 pt-6 dark:border-ink-800">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <Building2 className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  Volume Pricing for Portfolios
                </h3>
                <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">
                  Managing multiple units or properties? Ask about preferred
                  pricing for ongoing work.
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary mt-7 w-full">
              Request a Maintenance Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
