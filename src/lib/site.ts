import {
  Hammer,
  Building2,
  PaintRoller,
  Layers,
  DoorOpen,
  Bath,
  ChefHat,
  Wrench,
  Ruler,
  SquareStack,
  Home,
  Store,
  ShieldCheck,
  Award,
  FileCheck2,
  BadgeCheck,
  MapPin,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for company-wide details.
 * Update the placeholder phone / email / address values here and they
 * propagate across the entire site (header, footer, contact, schema, etc.).
 */
export const site = {
  name: "RG Construction",
  legalName: "RG Construction LLC",
  tagline: "Building East Texas, One Project at a Time",
  description:
    "RG Construction is a licensed and insured general contractor serving Longview, Tyler, Kilgore, Marshall and surrounding East Texas communities with residential and commercial construction, remodeling and renovations.",
  // Update this to your production domain before deploying.
  url: "https://www.rgconstructiontx.com",
  phoneDisplay: "903-917-4229",
  phoneHref: "+19039174229",
  email: "rgconstructionserv@gmail.com",
  // Service-area business — no public storefront address.
  address: {
    city: "Longview",
    state: "TX",
  },
  serviceAreaLabel: "Longview, Tyler, Kilgore, Marshall & surrounding East Texas",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com",
  },
  // Stats shown across the site
  stats: [
    { label: "Years of Experience", value: "15+" },
    { label: "Projects Completed", value: "750+" },
    { label: "Repeat & Referral Clients", value: "92%" },
    { label: "Licensed & Insured", value: "100%" },
  ],
  foundingYear: "2009",
  priceRange: "$$",
  // Approx. coordinates for Longview, TX (used in LocalBusiness schema).
  geo: { lat: 32.5007, lng: -94.7405 },
  rating: { value: "5.0", count: "100" },
} as const;

export const serviceAreas = [
  "Longview",
  "Tyler",
  "Kilgore",
  "Marshall",
  "Gladewater",
  "White Oak",
  "Hallsville",
  "Henderson",
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  category: "residential" | "commercial" | "both";
};

export const services: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    short: "Custom homes & additions built to last.",
    description:
      "From custom new builds to room additions, we manage every phase of residential construction with craftsmanship and clear communication.",
    icon: Home,
    category: "residential",
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    short: "Ground-up builds for East Texas businesses.",
    description:
      "Office buildings, retail centers and commercial facilities delivered on schedule and on budget with full project management.",
    icon: Building2,
    category: "commercial",
  },
  {
    slug: "renovations-remodeling",
    title: "Renovations & Remodeling",
    short: "Transform existing spaces, inside and out.",
    description:
      "Whole-home and whole-building renovations that modernize layouts, finishes and systems while protecting your investment.",
    icon: Hammer,
    category: "both",
  },
  {
    slug: "tenant-improvements",
    title: "Tenant Improvements",
    short: "Build-outs tailored to your lease.",
    description:
      "Fast, code-compliant tenant improvements that get commercial spaces move-in ready for your business or your tenants.",
    icon: SquareStack,
    category: "commercial",
  },
  {
    slug: "flooring-installation",
    title: "Flooring Installation",
    short: "Hardwood, LVP, laminate & more.",
    description:
      "Professional installation of hardwood, luxury vinyl plank, laminate and engineered flooring with flawless transitions.",
    icon: Layers,
    category: "both",
  },
  {
    slug: "tile-installation",
    title: "Tile Installation",
    short: "Showers, backsplashes & floors.",
    description:
      "Precision tile work for showers, backsplashes, floors and feature walls — properly waterproofed and built to endure.",
    icon: SquareStack,
    category: "both",
  },
  {
    slug: "drywall-repair",
    title: "Drywall Repair",
    short: "Seamless patches & full installs.",
    description:
      "Hanging, taping, texturing and repair work that leaves walls and ceilings smooth, level and paint-ready.",
    icon: Wrench,
    category: "both",
  },
  {
    slug: "painting",
    title: "Painting",
    short: "Interior & exterior, done right.",
    description:
      "Clean lines and durable finishes for interior and exterior painting, with proper prep that makes the results last.",
    icon: PaintRoller,
    category: "both",
  },
  {
    slug: "framing",
    title: "Framing",
    short: "Structurally sound from the studs up.",
    description:
      "Accurate, code-compliant framing for new construction, additions and structural remodels.",
    icon: Ruler,
    category: "both",
  },
  {
    slug: "finish-carpentry",
    title: "Finish Carpentry",
    short: "Trim, built-ins & custom millwork.",
    description:
      "Crown molding, baseboards, wainscoting, built-ins and custom cabinetry that elevate every room.",
    icon: Hammer,
    category: "both",
  },
  {
    slug: "door-window-installation",
    title: "Door & Window Installation",
    short: "Energy-efficient, weather-tight installs.",
    description:
      "Proper installation of interior and exterior doors and windows for better security, comfort and energy efficiency.",
    icon: DoorOpen,
    category: "both",
  },
  {
    slug: "bathroom-remodels",
    title: "Bathroom Remodels",
    short: "Spa-quality bathrooms, fully managed.",
    description:
      "Complete bathroom remodels including layout changes, tile, vanities, plumbing fixtures and custom showers.",
    icon: Bath,
    category: "residential",
  },
  {
    slug: "kitchen-remodels",
    title: "Kitchen Remodels",
    short: "The heart of the home, reimagined.",
    description:
      "Kitchen remodels featuring custom cabinetry, countertops, lighting and modern layouts built around how you live.",
    icon: ChefHat,
    category: "residential",
  },
  {
    slug: "commercial-build-outs",
    title: "Commercial Build-Outs",
    short: "Retail, office & restaurant build-outs.",
    description:
      "Full commercial build-outs from white-box to grand opening, coordinated with your timeline and brand standards.",
    icon: Store,
    category: "commercial",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type TrustBadge = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export const trustBadges: TrustBadge[] = [
  { title: "Licensed & Insured", detail: "General liability + workers' comp", icon: ShieldCheck },
  { title: "15+ Years Experience", detail: "Serving East Texas since 2009", icon: Award },
  { title: "Free Written Estimates", detail: "No-obligation, itemized bids", icon: FileCheck2 },
  { title: "Workmanship Warranty", detail: "We stand behind every project", icon: BadgeCheck },
  { title: "Locally Owned", detail: "Your East Texas neighbors", icon: MapPin },
  { title: "Background-Checked Crews", detail: "Trusted, professional teams", icon: UserCheck },
];

export type EmergencyService = {
  title: string;
  detail: string;
};

export const emergencyServices: EmergencyService[] = [
  { title: "Storm & Water Damage", detail: "Rapid response for leaks, flooding and storm-damaged structures." },
  { title: "Emergency Board-Up & Repairs", detail: "Secure and stabilize your property fast to prevent further loss." },
  { title: "Urgent Tenant Repairs", detail: "Same-day repairs that keep your rentals safe and occupied." },
];
