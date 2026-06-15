"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Fixed call bar shown only on mobile for one-tap calling.
 */
export function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden">
      <a
        href={`tel:${site.phoneHref}`}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        <Phone className="h-5 w-5" />
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
