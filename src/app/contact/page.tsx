import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { FAQ } from "@/components/FAQ";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us | Free Estimates in Longview & Tyler, TX",
  description:
    "Contact RG Construction for a free estimate on your residential or commercial project in East Texas. Call, email or request a quote online. Serving Longview, Tyler, Kilgore & Marshall.",
  path: "/contact",
});

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [site.phoneDisplay],
    href: `tel:${site.phoneHref}`,
    cta: "Tap to call",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email],
    href: `mailto:${site.email}`,
    cta: "Send an email",
  },
  {
    icon: MapPin,
    title: "Service Area",
    lines: [`Based in ${site.address.city}, ${site.address.state}`, site.serviceAreaLabel],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Your Free Estimate"
        description="Tell us about your project and we'll get back to you quickly with next steps. No obligation, no pressure."
        crumbs={[{ label: "Contact" }]}
        cta={false}
      />

      <section className="py-20">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink-900 dark:text-white">
              Let's Talk About Your Project
            </h2>
            <p className="mt-3 text-ink-600 dark:text-ink-300">
              Whether you're planning a kitchen remodel, a commercial build-out
              or a full renovation, our team is ready to help. Reach
              out using any method below.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((card) => (
                <div key={card.title} className="card flex items-start gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                      {card.title}
                    </p>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-ink-600 dark:text-ink-300">
                        {line}
                      </p>
                    ))}
                    {card.href && (
                      <a
                        href={card.href}
                        className="mt-1 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
                      >
                        {card.cta} →
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                    Business Hours
                  </p>
                  <ul className="mt-1 space-y-0.5 text-sm text-ink-600 dark:text-ink-300">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span>
                        <span className="font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: quote form */}
          <div id="estimate" className="scroll-mt-24">
            <LeadForm
              variant="quote"
              title="Request a Free Estimate"
              description="Fill out the form and we'll reach out to schedule your project assessment."
            />
          </div>
        </div>
      </section>

      {/* Simple contact / message form */}
      <section className="border-t border-ink-200 bg-ink-50 py-20 dark:border-ink-800 dark:bg-ink-900/40">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <span className="eyebrow">General Inquiry</span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink-900 dark:text-white">
              Have a Quick Question?
            </h2>
            <p className="mt-4 text-ink-600 dark:text-ink-300">
              Not ready for a full estimate? Send us a message and we'll point
              you in the right direction. We respond to every inquiry.
            </p>
          </div>
          <LeadForm variant="contact" />
        </div>
      </section>

      <ServiceAreaMap />
      <FAQ />
    </>
  );
}
