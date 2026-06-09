import { Bath, ChefHat, Hammer, Layers, PaintRoller, SquareStack } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { residentialProjects } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Residential Contractor in East Texas | Home Remodeling",
  description:
    "Residential remodeling & construction in Longview, Tyler, Kilgore & Marshall. Kitchen & bathroom remodels, flooring, tile, drywall and interior finishes from RG Construction. Free estimates.",
  path: "/residential",
  keywords: ["Kitchen Remodel Longview TX", "Bathroom Remodel Tyler TX", "Home Renovation East Texas"],
});

const specialties = [
  { icon: ChefHat, title: "Kitchen Remodels", text: "Custom cabinetry, countertops, lighting and layouts built around how you cook and gather." },
  { icon: Bath, title: "Bathroom Remodels", text: "Walk-in showers, custom tile, vanities and spa-quality finishes." },
  { icon: Layers, title: "Flooring", text: "Hardwood, luxury vinyl plank, laminate and engineered flooring, expertly installed." },
  { icon: SquareStack, title: "Tile", text: "Showers, backsplashes, floors and feature walls — properly waterproofed to last." },
  { icon: Hammer, title: "Drywall", text: "Hanging, taping, texturing and seamless repairs for smooth, paint-ready walls." },
  { icon: PaintRoller, title: "Interior Finishes", text: "Trim, crown molding, built-ins, doors and paint that bring a room together." },
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Home Remodeling & Construction in East Texas"
        description="From dream kitchens and luxury bathrooms to flooring, tile and full renovations — we help East Texas homeowners love where they live."
        crumbs={[{ label: "Residential" }]}
      />

      <section className="py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Residential Services"
            title="What We Build for Homeowners"
            description="Expert craftsmanship across every room of your home, managed by one dependable team."
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

      <BeforeAfterGallery />

      <ProjectGallery
        projects={residentialProjects}
        eyebrow="Residential Portfolio"
        title="Recent Home Projects"
        description="A look at residential remodels and builds completed across Longview, Tyler, Kilgore and Marshall."
      />

      <Testimonials />
      <ContactCTA />
    </>
  );
}
