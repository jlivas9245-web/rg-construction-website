import { Star } from "lucide-react";
import { googleReviews } from "@/lib/content";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function GoogleReviews() {
  return (
    <section className="py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow="Google Reviews"
          title="Rated 5 Stars by Our Clients"
          description="We're proud of the relationships we've built across East Texas. Here's what clients are saying on Google."
        />

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4 rounded-xl border border-ink-200 bg-white p-5 shadow-card dark:border-ink-800 dark:bg-ink-900">
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-ink-900 dark:text-white">
              5.0
            </p>
            <div className="mt-1 flex justify-center text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="h-12 w-px bg-ink-200 dark:bg-ink-800" />
          <div>
            <p className="text-sm font-semibold text-ink-900 dark:text-white">
              Based on verified reviews
            </p>
            <a
              href={site.social.google}
              className="text-sm text-brand-600 hover:underline dark:text-brand-400"
            >
              Read our Google reviews →
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {googleReviews.map((review) => (
            <figure
              key={review.name}
              className="card flex flex-col p-5"
            >
              <div className="flex text-brand-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {review.text}
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between border-t border-ink-200 pt-3 dark:border-ink-800">
                <span className="text-sm font-semibold text-ink-900 dark:text-white">
                  {review.name}
                </span>
                <span className="text-xs text-ink-500 dark:text-ink-400">
                  {review.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
