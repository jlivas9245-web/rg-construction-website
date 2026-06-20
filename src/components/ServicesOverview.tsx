import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ServicesOverview({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-Service General Contracting"
          description="A single, trusted team for residential and commercial construction, remodeling and renovations across East Texas."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="card group scroll-mt-24 p-6 hover:-translate-y-1 hover:border-brand-500/60"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-500/15 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white dark:text-brand-400">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
