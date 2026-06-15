import { CheckCircle2, Compass, Heart, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectImage } from "@/components/ProjectImage";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Our East Texas General Contracting Company",
  description:
    "Learn about RG Construction — a licensed & insured general contractor serving Longview, Tyler, Kilgore & Marshall with quality residential & commercial construction and remodeling.",
  path: "/about",
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest bids, honest timelines and honest communication on every project." },
  { icon: Target, title: "Quality", text: "We hold every detail to a high standard — because our name is on it." },
  { icon: Heart, title: "Service", text: "We treat your home or business with the same care we'd want for our own." },
  { icon: Compass, title: "Reliability", text: "We show up, we follow through, and we finish what we start." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Trusted East Texas General Contractor"
        description={`${site.name} was built on a simple idea: do great work, treat people right, and stand behind every project.`}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-20">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on Craftsmanship & Trust"
            />
            <div className="mt-6 space-y-4 text-ink-600 dark:text-ink-300">
              <p>
                For over 15 years, RG Construction has been helping homeowners,
                businesses and property managers across East Texas bring their
                projects to life. From custom kitchens to full commercial
                build-outs, we approach every job with the same commitment to
                quality and clear communication.
              </p>
              <p>
                We're a full-service general contractor, which means you have one
                accountable partner from the first estimate to the final
                walk-through. No juggling subs, no finger-pointing — just
                dependable results.
              </p>
              <p>
                Based in {site.address.city}, we're proud to serve our neighbors
                in Longview, Tyler, Kilgore, Marshall and the surrounding
                communities. When you hire us, you're hiring a local team that
                cares about its reputation in this region.
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Licensed & insured", "15+ years of experience", "Residential & commercial", "Free, transparent estimates"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-800 dark:text-ink-100">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <ProjectImage
              gradient={["#2451cf", "#0c1019"]}
              label="RG Construction team at work"
              className="aspect-[4/5] w-full rounded-xl"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-brand-600 p-6 shadow-card sm:block">
              <p className="font-display text-3xl font-bold text-white">15+</p>
              <p className="text-sm font-medium text-white/90">Years serving East Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="The principles behind every project we take on."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <ServiceAreaMap />
      <ContactCTA />
    </>
  );
}
