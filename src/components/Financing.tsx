import Link from "next/link";
import { ArrowRight, CreditCard } from "lucide-react";
import { financingOptions } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Financing() {
  return (
    <section id="financing" className="scroll-mt-24 bg-ink-50 py-20 dark:bg-ink-900/40">
      <div className="container-px">
        <SectionHeading
          eyebrow="Financing Available"
          title="Affordable Payment Options"
          description="Don't let budget hold your project back. We offer flexible financing so you can start your remodel or repair now and pay over time."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {financingOptions.map((option) => (
            <div key={option.title} className="card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <option.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                {option.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {option.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-brand-500/30 bg-brand-500/10 p-6 text-center sm:flex-row sm:text-left">
          <CreditCard className="h-8 w-8 shrink-0 text-brand-600 dark:text-brand-400" />
          <p className="flex-1 text-sm text-ink-700 dark:text-ink-200">
            Ask about financing when you request your free estimate — we'll help
            you find a plan that fits.
          </p>
          <Link href="/contact" className="btn-primary shrink-0">
            Check Your Options
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
