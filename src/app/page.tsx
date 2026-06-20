import { Hero } from "@/components/Hero";
import { LicensedInsured } from "@/components/LicensedInsured";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesOverview } from "@/components/ServicesOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProjectGallery } from "@/components/ProjectGallery";
import { EmergencyRepair } from "@/components/EmergencyRepair";
import { PropertyMaintenance } from "@/components/PropertyMaintenance";
import { Financing } from "@/components/Financing";
import { Testimonials } from "@/components/Testimonials";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { residentialProjects, commercialProjects } from "@/lib/content";

export const metadata = buildMetadata({
  title: "General Contractor in Longview & Tyler, TX",
  description:
    "RG Construction is a licensed & insured general contractor in East Texas. Residential & commercial construction, remodeling, tenant improvements & property maintenance in Longview, Tyler, Kilgore & Marshall. Free estimates.",
  path: "/",
});

const featured = [
  ...residentialProjects.slice(0, 3),
  ...commercialProjects.slice(0, 3),
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <LicensedInsured />
      <ServicesOverview limit={6} />
      <TrustBadges />
      <WhyChooseUs />
      <ProjectGallery
        projects={featured}
        eyebrow="Project Gallery"
        title="Work We're Proud Of"
        description="A selection of recent residential and commercial projects completed across East Texas."
        cta={{ href: "/residential", label: "Explore Our Projects" }}
      />
      <Financing />
      <PropertyMaintenance />
      <EmergencyRepair />
      <Testimonials />
      <GoogleReviews />
      <ServiceAreaMap />
      <FAQ />
      <ContactCTA />
    </>
  );
}
