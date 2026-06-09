"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-200 bg-white/90 backdrop-blur dark:border-ink-800 dark:bg-ink-950/90"
          : "bg-white dark:bg-ink-950"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-ink-700 hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-800 hover:text-brand-600 dark:text-ink-100 dark:hover:text-brand-300 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary hidden md:inline-flex">
            Free Estimate
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 text-ink-800 dark:border-ink-700 dark:text-ink-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950 lg:hidden">
          <nav className="container-px flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-ink-800 hover:bg-ink-50 hover:text-brand-600 dark:text-ink-100 dark:hover:bg-ink-900"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3">
              Request a Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
