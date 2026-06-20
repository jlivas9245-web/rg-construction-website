import { Building2, Briefcase, Store, Wrench, Layers, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { EmergencyRepair } from "@/components/EmergencyRepair";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { commercialProjects } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Commercial Contractor in East Texas | Build-Outs & TI",
  description:
    "Commercial construction, tenant improvements, office & retail build-outs and ground-up commercial projects in Longview, Tyler & East Texas. RG Construction delivers on time and on budget.",
  path: "/commercial",
  keywords: ["Tenant Improvements East Texas", "Commercial Build-Out Longview", "Office Renovation Tyler TX"],
});

const specialties = [
  { icon: Layers, title: "Tenant Improvements", text: "Fast, code-compliant TI work that gets commercial spaces lease-ready." },
  { icon: Briefcase, title: "Office Renovations", text: "Modern, functional workspaces — from refreshes to full reconfigurations." },
  { icon: Store, title: "Retail Build-Outs", text: "White-box to grand opening, coordinated with your brand and timeline." },
  { icon: Wrench, title: "Restaurant Build-Outs", text: "Kitchen infrastructure and dining finishes built to code and on time." },
  { icon: Building2, title: "Commercial Construction", text: "Ground-up builds and structural projects managed end to end." },
  { icon: Users, title: "Multi-Family Renovations", text: "Interior and exterior renovations scaled for multi-family properties." },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Commercial Construction & Build-Outs in East Texas"
        description="Tenant improvements, office and retail build-outs, and ground-up commercial construction for businesses, landlords and property owners across the region."
        crumbs={[{ label: "Commercial" }]}
      />

      <section className="py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Commercial Services"
            title="Solutions for Businesses & Property Owners"
            description="We understand the stakes of commercial work — downtime costs money. We deliver quality on a schedule you can plan around."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <div key={s.title} className="card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value band */}
      <section className="bg-ink-950 py-16 text-white">
        <div className="container-px grid gap-8 sm:grid-cols-3">
          {[
            { stat: "On Schedule", label: "Disciplined project management that respects your timeline." },
            { stat: "Code-Compliant", label: "We handle permits and inspections start to finish." },
            { stat: "Minimal Downtime", label: "Phased work that keeps your business or tenants moving." },
          ].map((item) => (
            <div key={item.stat} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-brand-400">
                {item.stat}
              </p>
              <p className="mt-2 text-sm text-ink-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProjectGallery
        projects={commercialProjects}
        eyebrow="Commercial Portfolio"
        title="Recent Commercial Projects"
        description="Build-outs, renovations and construction delivered for East Texas businesses and property owners."
      />

      <EmergencyRepair />
      <GoogleReviews />
      <ContactCTA />
    </>
  );
}
