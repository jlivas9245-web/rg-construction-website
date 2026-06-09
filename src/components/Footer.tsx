import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react";
import { navLinks, services, serviceAreas, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
            {site.tagline}. Licensed &amp; insured general contractor proudly
            serving East Texas.
          </p>
          <div className="mt-4 flex items-center gap-1 text-brand-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-xs text-ink-400">
              Rated 5.0 by East Texas clients
            </span>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-md border border-ink-700 transition hover:border-brand-400 hover:text-brand-400"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-md border border-ink-700 transition hover:border-brand-400 hover:text-brand-400"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-400">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="transition hover:text-brand-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Popular Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="transition hover:text-brand-400"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-brand-400">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-400">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                Based in {site.address.city}, {site.address.state}
                <br />
                Serving all of East Texas
              </span>
            </li>
          </ul>
          <p className="mt-5 text-xs uppercase tracking-wider text-ink-500">
            Serving
          </p>
          <p className="mt-1 text-sm text-ink-400">{serviceAreas.join(" • ")}</p>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Licensed &amp; Insured General Contractor · East Texas</p>
        </div>
      </div>
    </footer>
  );
}
