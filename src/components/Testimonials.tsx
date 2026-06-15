import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-ink-950 py-20 text-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Homeowners, property managers and business owners across East Texas trust RG Construction with their most important projects."
          light
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <Quote className="h-8 w-8 text-brand-400" />
              <div className="mt-3 flex text-accent-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-ink-400">
                  {t.role} · {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
