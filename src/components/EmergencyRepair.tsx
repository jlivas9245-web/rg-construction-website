import { AlertTriangle, Phone } from "lucide-react";
import { emergencyServices, site } from "@/lib/site";

export function EmergencyRepair() {
  return (
    <section
      id="emergency"
      className="scroll-mt-24 bg-ink-950 py-16 text-white"
    >
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-300">
              <AlertTriangle className="h-4 w-4" />
              24/7 Emergency Repairs
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Property Emergency? We Respond Fast.
            </h2>
            <p className="mt-4 max-w-xl text-ink-300">
              Storm damage, burst pipes, break-ins or urgent tenant repairs —
              RG Construction provides rapid-response emergency repair services
              across East Texas to protect your home or property from further
              damage.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneHref}`} className="btn-primary">
                <Phone className="h-4 w-4" />
                Call Now: {site.phoneDisplay}
              </a>
              <a href="/contact" className="btn-ghost-light">
                Request Emergency Service
              </a>
            </div>
          </div>

          <ul className="grid gap-4">
            {emergencyServices.map((svc) => (
              <li
                key={svc.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  {svc.title}
                </h3>
                <p className="mt-1 text-sm text-ink-300">{svc.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
