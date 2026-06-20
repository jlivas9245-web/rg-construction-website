import { trustBadges } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function TrustBadges({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="py-16">
      <div className="container-px">
        {withHeading && (
          <SectionHeading
            eyebrow="Why Homeowners Trust Us"
            title="A Contractor You Can Count On"
            description="We've earned our reputation across East Texas the right way — with credentials, accountability and quality you can verify."
          />
        )}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="card flex flex-col items-center p-5 text-center hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <badge.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-display text-sm font-bold uppercase leading-tight tracking-wide text-ink-900 dark:text-white">
                {badge.title}
              </h3>
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                {badge.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
