import type { Metadata } from "next";
import { site } from "./site";

type SeoArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

const baseKeywords = [
  "General Contractor Longview TX",
  "General Contractor Tyler TX",
  "Commercial Contractor East Texas",
  "Residential Contractor East Texas",
  "Remodeling Contractor Longview",
  "RG Construction",
];

/**
 * Builds consistent, SEO-optimized metadata for every page, including
 * Open Graph and Twitter cards and canonical URLs.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoArgs): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
