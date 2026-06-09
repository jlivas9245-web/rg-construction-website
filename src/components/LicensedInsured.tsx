import { Award, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "Fully covered for your protection" },
  { icon: Award, title: "15+ Years Experience", text: "Proven East Texas track record" },
  { icon: Clock, title: "On-Time Delivery", text: "Projects completed on schedule" },
  { icon: ThumbsUp, title: "Satisfaction Focused", text: "Workmanship you can rely on" },
];

export function LicensedInsured() {
  return (
    <section className="border-y border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900/50">
      <div className="container-px grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400">
              <badge.icon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                {badge.title}
              </p>
              <p className="text-xs text-ink-500 dark:text-ink-400">{badge.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
