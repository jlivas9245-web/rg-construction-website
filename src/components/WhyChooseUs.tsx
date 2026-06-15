import {
  BadgeCheck,
  CalendarClock,
  HandCoins,
  HardHat,
  MessageSquare,
  Users,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    text: "Fully licensed and insured, so your home or business is protected at every stage of the project.",
  },
  {
    icon: HardHat,
    title: "Skilled Craftsmanship",
    text: "Experienced tradespeople who take pride in clean, durable, detail-oriented work.",
  },
  {
    icon: HandCoins,
    title: "Transparent Pricing",
    text: "Detailed, itemized bids and written change orders. No hidden fees, no surprises.",
  },
  {
    icon: CalendarClock,
    title: "On-Time, On-Budget",
    text: "Clear schedules and disciplined project management keep your project moving.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "A dedicated point of contact keeps you informed from estimate to final walk-through.",
  },
  {
    icon: Users,
    title: "Residential & Commercial",
    text: "Trusted by homeowners, property managers, investors and businesses alike.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why RG Construction"
          title="The Contractor East Texas Trusts"
          description="We've built our reputation on quality work, honest pricing and dependable communication — project after project."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-600 text-white">
                <reason.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
