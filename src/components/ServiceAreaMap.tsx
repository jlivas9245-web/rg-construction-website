import { MapPin } from "lucide-react";
import { serviceAreas, site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreaMap() {
  // Google Maps embed centered on the East Texas service region (no API key required).
  const mapSrc =
    "https://www.google.com/maps?q=Longview,+TX&z=9&output=embed";

  return (
    <section className="py-20">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Service Area"
              title="Proudly Serving East Texas"
              description={`Based in ${site.address.city}, we serve homeowners and businesses throughout the East Texas region. If you don't see your town listed, reach out — chances are we cover it.`}
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm font-medium text-ink-700 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200"
                >
                  <MapPin className="h-4 w-4 text-brand-500" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-ink-200 shadow-card dark:border-ink-800">
            <iframe
              title="RG Construction East Texas service area map"
              src={mapSrc}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
